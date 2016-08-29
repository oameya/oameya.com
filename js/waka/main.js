$(function() {
  var button_back, button_front, digipack, scene;
  digipack = $(".digipack");
  scene = $(".scene");
  button_front = $(".button-front");
  button_back = $(".button-back");
  scene.css({
    rotateX: "0",
    rotateY: "90"
  });
  scene.delay(1500).transition({
    rotateX: "-90",
    rotateY: "0"
  }, 3000, "easeInOutQuart");
  button_back.on("click", function(e) {
    e.preventDefault();
    scene.stop();
    return scene.transition({
      rotateX: "90",
      rotateY: "180"
    }, 2000, "easeInOutQuart");
  });
  return button_front.on("click", function(e) {
    e.preventDefault();
    scene.stop();
    return scene.transition({
      rotateX: "-90",
      rotateY: "0"
    }, 2000, "easeInOutQuart");
  });
});
