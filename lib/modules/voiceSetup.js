/** @file speech synthesis */

import wait from '../utils/wait';
import displayToast from '../utils/displayToast';
import triggerEvent from '../utils/triggerEvent';

// `${wakeWord}, ${action[0]}`
const wakeWord = 'signal';
const actions = [
  {
    action: 'show me all gestures',
    evt: 'click',
    parent: '.all-gestures',
    child: 'a',
  },
  {
    action: 'select',
    evt: 'click',
    parent: '.swiper-slide-active',
    child: undefined,
  },
  {
    action: 'left',
    evt: 'click',
    parent: '.swiper-button-prev',
    child: undefined,
  },
  {
    action: 'right',
    evt: 'click',
    parent: '.swiper-button-next',
    child: undefined,
  },
  {
    action: 'return',
    evt: 'click',
    parent: '.back',
    child: 'a',
  },
  {
    action: 'refresh',
    evt: undefined,
    parent: undefined,
    child: undefined,
  },
  {
    action: 'watch',
    evt: 'click',
    parent: '.watch',
    child: undefined,
  },
  {
    action: 'play',
    evt: 'click',
    parent: 'button[title="Toggle Play"]',
    child: undefined,
  },
  {
    action: 'pause',
    evt: 'click',
    parent: 'button[title="Toggle Play"]',
    child: undefined,
  },
  {
    action: 'skip forward',
    evt: 'click',
    parent: 'button[data-skip="25"]',
    child: undefined,
  },
  {
    action: 'skip back',
    evt: 'click',
    parent: 'button[data-skip="-10"]',
    child: undefined,
  },
  {
    action: 'full screen',
    evt: 'click',
    parent: '.view-mode',
    child: undefined,
  },
  {
    action: 'window mode',
    evt: 'click',
    parent: '.view-mode',
    child: undefined,
  },
  {
    action: 'add to watch later',
    evt: 'click',
    parent: '.watch-list',
    child: undefined,
  },
  {
    action: 'remove from watch later',
    evt: 'click',
    parent: '.watch-list',
    child: undefined,
  },
  {
    action: 'cancel',
    evt: undefined,
    parent: undefined,
    child: undefined,
  },
];
const confidenceThreshold = 0.5;

const SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;

function initVoice() {
  const recognition = new SpeechRecognition();

  recognition.interimResults = false;
  recognition.maxAlternatives = 1;
  recognition.lang = 'en-US';

  recognition.start();

  recognition.addEventListener('result', handleSpeech);
  recognition.addEventListener('end', recognition.start);
}

const userSaid = (sentence, word) => sentence.includes(word);

async function handleSpeech(e) {
  console.log(e.results);
  // first check that user has finished talking
  if (e.results[0].isFinal) {
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
            // const msg = ``;
            // displayToast(1200, msg, 'is-success');
            console.log('Finished:', completedPhrase);
            await wait(1000);
            // then trigger the event
            // triggerEvent('click'); - add event type and els to array in actions object to group together
          }
        }
      }
    }
  }
}

export { initVoice };
