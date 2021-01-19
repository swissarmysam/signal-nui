/** @file speech recogntion script - ONLY AVAILABLE IN CHROME */

import wait from '../utils/wait';
import displayToast from '../utils/displayToast';
import triggerEvent from '../utils/triggerEvent';

const wakeWord = 'signal';
// array of actions and associated elements
const actions = [
  {
    action: 'show me all gestures',
    evt: 'click',
    parent: '.all-gestures',
    child: 'a',
    sound: 'success',
  },
  {
    action: 'select',
    evt: 'click',
    parent: '.swiper-slide-active',
    child: 'a:nth-child(2)',
    sound: 'select',
  },
  {
    action: 'left',
    evt: 'click',
    parent: '.swiper-button-prev',
    child: undefined,
    sound: 'back',
  },
  {
    action: 'right',
    evt: 'click',
    parent: '.swiper-button-next',
    child: undefined,
    sound: 'forward',
  },
  {
    action: 'go back',
    evt: 'click',
    parent: '.back',
    child: 'a',
    sound: 'back',
  },
  {
    action: 'refresh',
    evt: undefined,
    parent: undefined,
    child: undefined,
    sound: undefined,
  },
  {
    action: 'start',
    evt: 'click',
    parent: '.watch',
    child: undefined,
    sound: 'success',
  },
  {
    action: 'play',
    evt: 'click',
    parent: 'button[title="Toggle Play"]',
    child: undefined,
    sound: 'select',
  },
  {
    action: 'pause',
    evt: 'click',
    parent: 'button[title="Toggle Play"]',
    child: undefined,
    sound: 'select',
  },
  {
    action: 'skip forward',
    evt: 'click',
    parent: 'button[data-skip="25"]',
    child: undefined,
    sound: 'forward',
  },
  {
    action: 'skip back',
    evt: 'click',
    parent: 'button[data-skip="-10"]',
    child: undefined,
    sound: 'back',
  },
  {
    action: 'full screen',
    evt: 'click',
    parent: '.view-mode',
    child: undefined,
    sound: undefined,
  },
  {
    action: 'window mode',
    evt: 'click',
    parent: '.view-mode',
    child: undefined,
    sound: undefined,
  },
  {
    action: 'add to watch later',
    evt: 'click',
    parent: '.watch-list',
    child: undefined,
    sound: 'success',
  },
  {
    action: 'remove from watch later',
    evt: 'click',
    parent: '.watch-list',
    child: undefined,
    sound: 'cancel',
  },
  {
    action: 'cancel',
    evt: undefined,
    parent: undefined,
    child: undefined,
    sound: 'cancel',
  },
  {
    action: 'close',
    evt: 'click',
    parent: '.modal-close',
    child: undefined,
    sound: undefined,
  },
];

function initVoice() {
  // if speech recognition exists
  try {
    const SpeechRecognition =
      window.SpeechRecognition || window.webkitSpeechRecognition;

    // create instance and add options
    const recognition = new SpeechRecognition();

    recognition.interimResults = false;
    recognition.maxAlternatives = 1;
    recognition.lang = 'en-US';

    // start instance
    recognition.start();

    console.log(
      '%c %c Voice Initiated',
      'font-size: 12px;background: red; color: white',
      'font-size: 12px; background: white; color: black;'
    );
    // create listeners
    recognition.addEventListener('result', handleSpeech);
    recognition.addEventListener('end', recognition.start);
  } catch (err) {
    // if not available then display message to use chrome
    console.log(err);
    document.querySelector('.feature-detection').classList.remove('is-hidden');
  }
}

const userSaid = (sentence, word) => sentence.includes(word);

/**
 * @param {Event} e - the generated event which is Speech Recogntion object
 */
async function handleSpeech(e) {
  const confidenceThreshold = 0.5;
  // console.log(e.results);
  displayToast(500, 'Listening ...', 'is-info');
  // first check that user has finished talking
  if (e.results[0].isFinal) {
    displayToast(1000, 'Please wait ...', 'is-info');
    await wait(1000);
    // check confidence of the final sentence
    if (e.results[0][0].confidence > confidenceThreshold) {
      // construct the final sentence for check
      const completedPhrase = e.results[0][0].transcript.toLowerCase();
      // check if the user said the wake word
      if (userSaid(completedPhrase, wakeWord)) {
        // check if completed phrase is in actions object
        for (let i = 0; i < actions.length; i++) {
          if (userSaid(completedPhrase, actions[i].action)) {
            // display message (and said sentence?)
            const msg = `Processing ${actions[i].action} ...`;
            displayToast(1200, msg, 'is-success');
            console.log('Finished:', completedPhrase);
            await wait(1000);
            // then trigger the event- add event type and els to array in actions object to group together
            if (actions[i].action === 'refresh') {
              window.location.reload();
            } else {
              // fix anchor existence issue with swiper carousel
              const activeSlide = document.querySelector(
                '.swiper-slide-active'
              );
              if (activeSlide) {
                if (!activeSlide.querySelector('a:nth-child(2)')) {
                  triggerEvent(
                    actions[i].evt,
                    actions[i].parent,
                    'a',
                    actions[i].sound
                  );
                }
              } else {
                triggerEvent(
                  actions[i].evt,
                  actions[i].parent,
                  actions[i].child,
                  actions[i].sound
                );
              }
            }
          }
        }
      } else {
        // instruction does not exist
        displayToast(1000, 'Sorry, instruction not recognised ...', 'is-info');
      }
    }
  }
}

export { initVoice };
