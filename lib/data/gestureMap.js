const gestures = {
  navRight: {
    action: [],
    // Swipe Hand Right or point right
  },
  navLeft: {
    action: [],
    // Swipe Hand Left or point left
  },
  select: {
    action: {
      demo: '',
      desc: '',
    },
    // thumb up or open palm
  },
  goBack: {
    action: [],
    // Swipe Hand Up
    // two finger point left
  },
  play: {
    action: [],
    // open palm
  },
  pause: {
    action: [],
    // Both hands raised, open palm
    // clench fist
  },
  refresh: {
    action: [],
    // Wave Both Hands
    // thumb down
  },
  skipForward: {
    // Left palm showing, right hand closed fist (hold)
    // right hand, two fingers up
  },
  skipBack: {
    // Left hand closed fist, right palm showing (hold),
    // left hand, two fingers up
  },
  fullScreen: {
    // Move both hands apart
    //  L symbol toggle
  },
  windowed: {
    // Bring both hands together
    // L symbol (toggle)
  },
  addToList: {
    // rock symbol
  },
  gestureInstructions: {
    // four fingers up
  },
  notifyApp: {
    // V symbol
  },
};

export default gestures;
