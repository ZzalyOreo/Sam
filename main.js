function preload() {
}

function setup() {
  canvas = createCanvas(640, 450);
  video = createCapture(VIDEO);
  video.hide();
  color = "";
}

function draw() {
  image(video, 0, 0, 640, 450);
  tint(color);
  textSize(38);
  fill(255,255,255);
  stroke(0,0,0);
}

function cambiarFiltro(){
  color = document.getElementById("color").value;
}

function tomarFoto(){
  save("foto.png");
}
