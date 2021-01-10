import * as handpose from '@tensorflow-models/handpose';
import * as tf from '@tensorflow/tfjs-core';

import wait from '../utils/wait';
import triggerEvent from '../utils/triggerEvent';
import displayToast from '../utils/displayToast';
import '@tensorflow/tfjs-backend-cpu';

// make peer dependency available in module
import '@tensorflow/tfjs-backend-webgl';

let video;
let model;

/** @async */
async function initGestures() {
  video = await loadVideo();
  await tf.setBackend('webgl');
  model = await handpose.load({
    detectionConfidence: 0.99,
    maxContinuousChecks: 5,
  });
  setTimeout(() => requestAnimationFrame(getHandPositions), 1000 / 24);
}

async function loadVideo() {
  video = await setupCamera();
  video.play();
  return video;
}

async function setupCamera() {
  if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
    throw new Error('Navigator API is not available');
  }

  video = document.querySelector('video#gesture-capture');

  video.width = 400;
  video.height = 250;

  const stream = await navigator.mediaDevices.getUserMedia({
    audio: false,
    video: {
      facingMode: 'user',
      width: video.width,
      height: video.height,
    },
  });

  video.srcObject = stream;

  return new Promise(
    resolve => (video.onloadedmetadata = () => resolve(video))
  );
}

async function getHandPositions() {
  const predictions = await model.estimateHands(
    document.querySelector('video#gesture-capture'),
    {
      // flip video for correct hand orientation
      flipHorizontal: true,
    }
  );

  // if hand movement is detected
  if (predictions.length > 0) {
    handleGesture(predictions);
  }

  // run at 24fps (roughly)
  setTimeout(() => requestAnimationFrame(getHandPositions), 1000 / 24);
}

// 0 = no action, 1 = waiting for next action, 2 = action active
let gestureState = 0;

const isDigitExtended = (tip, base) => tip < base;
const getDigitDiff = (tipA, tipB) => (tipA > tipB ? tipA - tipB : tipB - tipA);
const isLeftOrRight = wrist => wrist[0].landmarks[0][0] > video.width / 2;

async function handleGesture(hand) {
  console.log(hand);
  const currentPage = localStorage.getItem('page');

  const thumbTipY = hand[0].landmarks[4][1];
  const thumbTipX = hand[0].landmarks[4][0];
  const thumbBaseX = hand[0].landmarks[3][0];

  const indexTipY = hand[0].landmarks[8][1];
  const indexBaseY = hand[0].landmarks[5][1];
  const indexTipX = hand[0].landmarks[8][0];

  const middleTipY = hand[0].landmarks[12][1];
  const middleBaseY = hand[0].landmarks[9][1];
  const middleTipX = hand[0].landmarks[12][0];

  const ringTipY = hand[0].landmarks[16][1];
  const ringBaseY = hand[0].landmarks[13][1];
  const ringTipX = hand[0].landmarks[16][0];

  const pinkyTipY = hand[0].landmarks[20][1];
  const pinkyBaseY = hand[0].landmarks[17][1];
  const pinkyTipX = hand[0].landmarks[20][0];

  const thumbExtended = isDigitExtended(thumbTipX, thumbBaseX);
  const indexExtended = isDigitExtended(indexTipY, indexBaseY);
  const middleExtended = isDigitExtended(middleTipY, middleBaseY);
  const ringExtended = isDigitExtended(ringTipY, ringBaseY);
  const pinkyExtended = isDigitExtended(pinkyTipY, pinkyBaseY);

  const indexMiddleDiff = getDigitDiff(indexTipX, middleTipX);
  const middleRingDiff = getDigitDiff(middleTipX, ringTipX);
  const ringPinkyDiff = getDigitDiff(ringTipX, pinkyTipX);
  const thumbIndexDiff = getDigitDiff(indexTipX, thumbTipX);

  const isLeft = isLeftOrRight(hand);

  const gestures = {
    // v sign
    notifyApp:
      indexMiddleDiff > 28 && middleRingDiff > 25 && ringPinkyDiff > 22,
    // Swipe Hand Left or point left
    navLeft:
      indexExtended &&
      middleExtended &&
      !ringExtended &&
      !pinkyExtended &&
      isLeft,
    // Swipe Hand Right or point right
    navRight:
      indexExtended &&
      middleExtended &&
      !ringExtended &&
      !pinkyExtended &&
      !isLeft,
    // rock symbol
    select: indexExtended && !middleExtended && !ringExtended && pinkyExtended,
    // Swipe Hand Up or two finger point left
    // goBack: ,
    // open palm or thumb up
    play:
      thumbExtended &&
      !indexExtended &&
      !middleExtended &&
      !ringExtended &&
      !pinkyExtended,
    // clench fist
    pause:
      !thumbExtended &&
      !indexExtended &&
      !middleExtended &&
      !ringExtended &&
      !pinkyExtended,
    // thumb down
    // refresh: ,
    // right hand, two fingers up
    skipForward:
      indexMiddleDiff < 10 &&
      indexExtended &&
      middleExtended &&
      !ringExtended &&
      !pinkyExtended &&
      !thumbExtended &&
      isLeft,
    // left hand, two fingers up
    skipBack:
      indexMiddleDiff < 10 &&
      indexExtended &&
      middleExtended &&
      !ringExtended &&
      !pinkyExtended &&
      !thumbExtended &&
      !isLeft,
    // thumb up symbol
    addToWatchlist:
      thumbExtended &&
      !indexExtended &&
      !middleExtended &&
      !ringExtended &&
      !pinkyExtended,
    //  L symbol - toggle between windowed and full screen will need flag
    viewMode:
      thumbExtended &&
      indexExtended &&
      !middleExtended &&
      !ringExtended &&
      !pinkyExtended,
  };

  if (gestureState === 0) {
    // THESE GESTURES ARE FOR ALL PAGES IN INACTIVE STATE
    if (gestures.notifyApp) {
      console.log('waiting for next action ...');
      displayToast(1000, 'Please wait ...', undefined);
      await wait(1000);
      displayToast(1000, 'Ready for your next gesture ...', undefined);
      await wait(1000);
      gestureState = 1;
    }
  }

  // if ready for the next action
  if (gestureState === 1) {
    // THESE GESTURES ARE FOR ALL PAGES IN ACTIVE STATE
    // none yet

    // THESE GESTURES ARE FOR THE HOME PAGE ONLY
    if (currentPage === 'home') {
      if (gestures.navLeft) {
        displayToast(undefined, 'Sliding left ...', 'is-success');
        if (triggerEvent('click', '.swiper-button-prev')) gestureState = 0;
        await wait(500);
      } else if (gestures.navRight) {
        displayToast(undefined, 'Sliding right ...', 'is-success');
        if (triggerEvent('click', '.swiper-button-next')) gestureState = 0;
        await wait(500);
      } else if (gestures.select) {
        displayToast(undefined, 'Selected ...', 'is-success');
        await wait(500);
        if (triggerEvent('click', '.swiper-slide-active', 'a'))
          gestureState = 0;
      }
    }

    // THESE GESTURES ARE FOR THE CONTENT PAGES ONLY
    if (currentPage === 'content') {
      if (!document.querySelector('.modal').classList.contains('is-active')) {
        if (gestures.select) {
          displayToast(undefined, 'Opening the film ...', 'is-success');
          await wait(750);
          if (triggerEvent('click', '.watch')) gestureState = 0;
        } else if (gestures.addToWatchlist) {
          displayToast(undefined, 'Adjusting watch list', 'is-success');
          await wait(250);
          if (triggerEvent('click', '.watch-list')) gestureState = 0;
        }
      }

      // check if video modal is open and make further gestures available
      if (document.querySelector('.modal').classList.contains('is-active')) {
        if (gestures.skipForward) {
          displayToast(
            undefined,
            'Skipping forward 25 seconds ...',
            'is-success'
          );
          await wait(250);
          gestureState = 0;
        } else if (gestures.skipBack) {
          displayToast(undefined, 'Skipping back 10 seconds ...', 'is-success');
          await wait(250);
          gestureState = 0;
        } else if (gestures.viewMode) {
          await wait(250);
          if (triggerEvent('click', `button[data-view]`)) gestureState = 0;
        }
      }
    }
  }
}

export { initGestures };
