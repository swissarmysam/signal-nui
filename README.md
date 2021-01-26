# :tv: Signal Video Streaming Website

A proof-of-concept natural user interface (NUI) using hand gestures and voice commands to control a video streaming website. This was selected as previous use-cases indicate that NUIs work best in an entertainment context. A streaming VOD site only requires a small set of clearly defined actions so that the user can play, skip, and navigate video content making it a prime example of using a NUI effectively.

The UI will be designed according to researched best practices to allow the user to navigate and select content easily. Whilst the UI will be adapted to make it suitable for the novel control scheme, it is crucial to maintain the core attributes of a streaming site, so it still feels familiar to the user.

Mouse control can be used if a webcam or speech recognition is not available.

---

## :package: Tech Stack

#### Web Languages

- HTML5
- SASS
- JavaScript

#### Libraries & Packages

- Tensorflow Handpose
- Speech Recognition API
- Bulma
- Bulma Pageloader
- Bulma Toast
- Handlebars
- HowlerJS
- SwiperJS
- Tiny Timer
- Youtube to HTML5 Loader

#### Tools

- Parcel

All videos are from [Blender Open Movies](https://www.blender.org/about/projects/)

This app uses libraries and packages that are very large. The app itself is resource heavy so performance may depend on connection quality and available hardware.
Testing has been carried out on Windows 10 machine with a AMD Ryzen 2700, 16GB RAM and RTX 2070.

---

## :hand: Commands

| Action                  | Camera                                                      | Microphone                      |
| ----------------------- | ----------------------------------------------------------- | ------------------------------- |
| Wake                    | Wave hand                                                   | Signal, ...                     |
| Next                    | Point index and middle finger up on left hand               | Signal, next                    |
| Previous                | Point index and middle finger up on right hand              | Signal, previous                |
| Select                  | Point index and pinky fingers, fold middle and ring fingers | Signal, select                  |
| Go Back                 | Point index and middle finger up on left hand               | Signal, go back                 |
| Refresh                 | Not available                                               | Signal, refresh                 |
| Start Media             | Point index and pinky fingers, fold middle and ring fingers | Signal, start                   |
| Play                    | Point index and pinky fingers, fold middle and ring fingers | Signal, play                    |
| Pause                   | Point index and pinky fingers, fold middle and ring fingers | Signal, pause                   |
| Skip Forward            | Point index and middle finger on right hand                 | Signal, skip forward            |
| Skip Back               | Point index and middle finger on left hand                  | Signal, skip back               |
| Close Media             | Clench fist                                                 | Signal, close                   |
| Add to Watch Later      | Thumb Up                                                    | Signal, add to watch later      |
| Remove from Watch Later | Thumb Up                                                    | Signal, remove from watch later |

_Some gestures have been removed as they had a lot of false detections. Reduced the total number of gestures required to 7 to reduce burden on user._

### :thumbsup: Signal NUI Demo

[CLICK HERE](https://signal-nui.xyz)

:exclamation::exclamation::exclamation: USES EXPERIMENTAL BROWSER FEATURES. SUPPORT IS LIMITED. FULLY WORKING IN CHROME (v.87) ONLY (17/01/21) :exclamation::exclamation::exclamation:

#### localhost usage

**_Node needs to be installed before following these instructions:_**

1. Download ZIP folder
2. Extract contents
3. Open bash terminal in folder
4. npm install
5. npm start
6. Navigate to localhost:1234/index.html

If any issues with the build, please delete .babelrc and try running npm start again

---

### :thumbsdown: Troubleshooting

| Issue                          | Solution                                                                                                                     |
| ------------------------------ | ---------------------------------------------------------------------------------------------------------------------------- |
| Website frozen                 | Refresh                                                                                                                      |
| Webcam not appearing           | Check developer console for error. If video source could not be loaded then try unplugging webcam and using a different port |
| Voice commands not working     | Please use an up-to-date version of Chrome                                                                                   |
| No sound effects               | Workaround: Try clicking on the webpage with the mouse and refreshing the page                                               |
| Wrong gesture detected         | Gestures need some fine-tuning so false detections do occur. Sorry!                                                          |
| Go back command is not working | If you are using the app locally then this is the behaviour on localhost. It will work on server hosted app.                 |
| Mic/camera stops working       | Clear the Chrome permissions and hard reload the website                                                                     |

---

### Known Issues

1. fullScreenRequest requires user interaction. Not able to fire custom event for this. Need to mimic something close to full screen behaviour.
2. No sound in video. This is due to how video is encoded. Sounds seems to be stripped. Looking for fix.
3. Sound FX need mouse interaction to start in Chrome. Not sure if there is a workaround for this?
4. Sometimes motion gestures result in custom event firing twice.

---

### Potential Improvements

- Add gesture recognition for two hands (this is waiting for update from Tensorflow team)
- Remove any unused CSS and JS to reduce overall app size
- Fine tune the gestures so they are recognised better
- Make progressive enhancement more graceful when using a browser other than Chrome
- Improve speech recognition so more general phrases could be used
- Add speech synthesis so voice feedback is provided to user

---

### :books: References

- Cole, L. (2020) Thelevicole/youtube-to-html5-loader, GitHub. Available at: <https://github.com/thelevicole/youtube-to-html5-loader/> (Accessed: 17 January 2021).
- Eden, D. (2018) Animate.css | A Cross-browser Library Of CSS Animations., animate.style. Available at: <https://animate.style/> (Accessed: 17 January 2021).
- Foundation, B. (no date) Open Movies, Blender.org. Available at: <https://www.blender.org/about/projects/> (Accessed: 17 January 2021).
- Freepik (no date) Poster Icons | Flaticon, The Largest Database Of Free Vector Icons, Flaticon. Available at: <https://www.flaticon.com/> (Accessed: 26 January 2021).
- Gerard, C. (2020) Practical Machine Learning in JavaScript. New York, NY: Apress, pp. 199–219.
- Katz, Y. (2011) Handlebars. Available at: <https://handlebarsjs.com/> (Accessed: 17 January 2021).
- Kharlampidi, V. (2018) Getting Started With Swiper, Swiper. Available at: <https://swiperjs.com/get-started/> (Accessed: 17 January 2021).
- MediaPipe (2020) Tensorflow/tfjs-models, GitHub. Available at: <https://github.com/tensorflow/tfjs-models/tree/master/handpose> (Accessed: 17 January 2021).
- Rasmussen, M. (2017) Mathiasvr/tiny-timer, GitHub. Available at: <https://github.com/mathiasvr/tiny-timer> (Accessed: 17 January 2021).
- Simpson, J. (2017) Howler.js - JavaScript Audio Library For The Modern Web, howlerjs.com. Available at: <https://howlerjs.com/> (Accessed: 17 January 2021).
- Thomas, J. (2016) Bulma: Free, Open Source, And Modern CSS Framework Based On Flexbox, bulma.io. Available at: <https://bulma.io/> (Accessed: 17 January 2021).
- University of Nebraska (2016) Mdn/web-speech-api, GitHub. Available at: <https://github.com/mdn/web-speech-api/tree/master/phrase-matcher> (Accessed: 17 January 2021).

---

This work was completed as part of CT6007 Individual Research Project at University of Gloucestershire
