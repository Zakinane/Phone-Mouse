if (window.DeviceMotionEvent) {
  window.addEventListener("devicemotion", function (event) {
    const x = event.acceleration.x;
    const y = event.acceleration.y;
    const z = event.acceleration.z;

    console.log(`X: ${x}, Y: ${y}, Z: ${z}`);
  });
} else {
  console.log("ERR");
}
