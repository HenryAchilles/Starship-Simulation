let KEY_SPACE = false;
let KEY_UP = false;
let KEY_DOWN = false;
let KEY_LEFT = false;
let KEY_RIGHT = false;
let canvas;
let ctx;
let backgroundimage = new Image();
let rocket = {
  x: 100,
  y: 250,
  z: 500,
  width: 200,
  height: 300,
  src: "img/typ.jpg",
};
let niko = {
  x: 100,
  y: 250,
  z: 0,
  width: 250,
  height: 250,
  src: "img/niko.jpg",
};

let ufos = [];
let boom = false;

document.onkeydown = function (e) {
  if (e.keyCode == 32) {
    KEY_SPACE = true;
  }
  if (e.keyCode == 38) {
    KEY_UP = true;
  }
  if (e.keyCode == 40) {
    KEY_DOWN = true;
  }
  if (e.keyCode == 37) {
    KEY_LEFT = true;
  }
  if (e.keyCode == 39) {
    KEY_RIGHT = true;
  }
};

document.onkeyup = function (e) {
  if (e.keyCode == 32) {
    KEY_SPACE = false;
  }

  if (e.keyCode == 38) {
    KEY_UP = false;
  }

  if (e.keyCode == 40) {
    KEY_DOWN = false;
  }
  if (e.keyCode == 37) {
    KEY_LEFT = false;
  }
  if (e.keyCode == 39) {
    KEY_RIGHT = false;
  }
};
function checkforcollision() {
  ufos.forEach(function (ufo) {
    if (
      rocket.x + rocket.width > ufo.x &&
      rocket.y + rocket.height > ufo.y &&
      rocket.x < ufo.x + ufo.width &&
      rocket.y < ufo.y + ufo.height
    ) {
      boom = true;
      console.log("collision");
    }
  });
}
function startGame() {
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  loadimages();
  draw();
  setInterval(update, 1000 / 25);
  setInterval(createhens, 5000);
  setInterval(checkforcollision, 1000 / 25);
}

function createhens() {
  let ufo = {
    x: 900,
    y: 250,
    z: 300,
    width: 150,
    height: 150,
    src: "img/prettyboy.jpg",
    img: new Image(),
  };
  ufo.img.src = ufo.src;
  ufos.push(ufo);
}

function update() {
  if (KEY_UP) {
    rocket.y -= 15;
  }
  if (KEY_DOWN) {
    rocket.y += 15;
  }
  if (KEY_RIGHT) {
    rocket.x += 15;
  }
  if (KEY_LEFT) {
    rocket.x -= 15;
  }
  ufos.forEach(function (ufo) {
    ufo.x -= 5;
  });
}

//function bringtofront() {
//niko.getElementById() bringToFront();
//}

function loadimages() {
  backgroundimage.src = "img/hyperraum.jpg";
  rocket.img = new Image();
  rocket.img.src = rocket.src;
  niko.img = new Image();
  niko.img.src = niko.src;
}
function drawniko() {
  //console.log("drawniko");
  ctx.drawImage(niko.img, niko.x, niko.y, niko.width, niko.height);
  //bringtofront();
}

function draw() {
  //console.log("1")
  ctx.drawImage(backgroundimage, 0, 0, 1080, 720);

  ctx.drawImage(rocket.img, rocket.x, rocket.y, rocket.width, rocket.height);
  ufos.forEach(function (ufo) {
    ctx.drawImage(ufo.img, ufo.x, ufo.y, ufo.width, ufo.height);
    if (boom) {
      drawniko();
    }
    if (boom = false) {}
  });

  requestAnimationFrame(draw);
}
