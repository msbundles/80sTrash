function setup() {
  createCanvas(1000, 1000, WEBGL);
	slider = createSlider(0, 10, 0.03, 0.00000000000000000000000000000000000000000000000000001);
  slider.position(1000, 10);
  slider.style('width', '80px');
  console.log('Hello person looking at the JS console have a good day.');
}

function draw() {
  background(200);
  var val = slider.value();
  rotateX(frameCount * val);//val
  rotateY(frameCount * val);//val
  box(300, 300, 300);
}
