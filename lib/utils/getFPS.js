/** @file script for debugging frame rate - code based on answer from Stack Overflow */

let before = Date.now();
let now;
let fps = 0;

function getFPS() {
  requestAnimationFrame(function loop() {
    now = Date.now();
    fps = Math.round(1000 / (now - before));
    before = now;
    requestAnimationFrame(loop);
    if (fps < 24) {
      console.warn(`FPS: ${fps}`);
    }
  });
}

export { getFPS };
