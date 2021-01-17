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

---

## :hand: Commands

| Action                  | Camera                                                        | Microphone                     |
| ----------------------- | ------------------------------------------------------------- | ------------------------------ |
| Wake                    | Wave hand                                                     | Signal, ...                    |
| Go Left                 | Point index and middle finger up on left hand                 | Signal, left                   |
| Go Right                | Point index and middle finger up on right hand                | Signal, right                  |
| Select                  | Point index and ring fingers up, fold middle and ring fingers | Signal, select                 |
| Go Back                 | Point index and middle finger up on left hand                 | Signal, go back                |
| Refresh                 | Thumb down                                                    | Signal, refresh                |
| Start Media             | Point index and ring fingers, fold middle and ring fingers    | Signal, start                  |
| Play                    | Clench fist                                                   | Signal, play                   |
| Pause                   | Clench fist                                                   | Signal, pause                  |
| Skip Forward            | Point index and middle finger up on right hand                | Signal, skip forward           |
| Skip Back               | Point index and middle finger up on left hand                 | Signal, skip back              |
| Full Screen             | V symbol                                                      | Signal, full screen            |
| Window Mode             | V symbol                                                      | Signal, window mode            |
| Close Media             | Thumb and pink extended, all other fingers folded             | Signal, close                  |
| Add to Watch Later      | Thumb Up                                                      | Signal, add to watch list      |
| Remove from Watch Later | Thumb Up                                                      | Signal, remove from watch list |

---

### :thumbsup: Signal NUI Demo

[CLICK HERE](https://signal-nui.xyz)

:exclamation::exclamation::exclamation: (17/01/21) FULLY WORKING IN CHROME (v.87) ONLY :exclamation::exclamation::exclamation:

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

| Issue | Solution |
| Website frozen | Refresh |
| Webcam not appearing | Check developer console for error. If video source could not be loaded then try unplugging webcam and using a different port |
| Voice commands not working | Please use an up-to-date version of Chrome |
| No sound effects | Workaround: Try clicking on the webpage with the mouse and refreshing the page |

---

### :books: References

- Cole, L. (2020). Thelevicole/youtube-to-html5-loader. GitHub. <https://github.com/thelevicole/youtube-to-html5-loader/>
- Eden, D. (2018). Animate.css | A Cross-browser Library Of CSS Animations. Animate.Style. <https://animate.style/>
- Foundation, B. (n.d.). Open Movies. Blender.Org. Retrieved January 17, 2021, from <https://www.blender.org/about/projects/>
- Gerard, C. (2020). Practical Machine Learning in JavaScript (pp. 199–219). Apress.
- Katz, Y. (2011). Handlebars. <https://handlebarsjs.com/>
- Kharlampidi, V. (2018). Getting Started With Swiper. Swiper. <https://swiperjs.com/get-started/>
- MediaPipe. (2020). Tensorflow/tfjs-models. GitHub. <https://github.com/tensorflow/tfjs-models/tree/master/handpose>
- Rasmussen, M. (2017). Mathiasvr/tiny-timer. GitHub. <https://github.com/mathiasvr/tiny-timer>
- Simpson, J. (2017). Howler.js - JavaScript Audio Library For The Modern Web. Howlerjs.Com. <https://howlerjs.com/>
- Thomas, J. (2016). Bulma: Free, Open Source, And Modern CSS Framework Based On Flexbox. Bulma.Io. <https://bulma.io/>
- University of Nebraska. (2016). Mdn/web-speech-api. GitHub. <https://github.com/mdn/web-speech-api/tree/master/phrase-matcher>

---

This work was completed as part of CT6007 Individual Research Project at University of Gloucestershire
