const myCanvas = document.querySelector("#myCanvas");
const countL = document.querySelector("#countL");
const countR = document.querySelector("#countR");
const ctx = myCanvas.getContext("2d");

myCanvas.width = innerWidth;
myCanvas.height = innerHeight;
let x = Math.floor(myCanvas.width / 2);
let y = Math.floor(myCanvas.height / 2);
let plusX = 1;
let plusY = -1;
let ballRadius = 5;
let paddlyHeight = 70;
let paddlyWidth = 10;
let paddlyX = 10;
let paddlyH = myCanvas.width - 20;
let paddlyY = myCanvas.height / 2 - paddlyHeight / 2;
let paddlyJ = myCanvas.height / 2 - paddlyHeight / 2;
// const unknwn = document.createElement('span')
addEventListener("keydown", move);
function move(e) {
  switch (e.key) {
    case "w":
      if (paddlyY <= 0) {
      } else {
        paddlyY -= 10;
      }
      break;
    case "s":
      if (paddlyY >= myCanvas.height - paddlyHeight) {
        return;
      } else {
        paddlyY += 10;
      }
      break;
    case "ArrowUp":
      if (paddlyJ == myCanvas.width) {
      } else {
        paddlyJ -= 10;
      }
      break;
    case "ArrowDown":
      if (paddlyJ >= myCanvas.height - paddlyHeight) {
        return;
      } else {
        paddlyJ += 10;
      }
      break;
  }
}
function restart() {
  x = Math.floor(myCanvas.width / 2);
  y = Math.floor(myCanvas.height / 2);
}
setInterval(() => {
  ctx.beginPath();
  ctx.fillStyle = "black";
  ctx.fillRect(0, 0, myCanvas.width, myCanvas.height);
  ctx.fillStyle = "red";
  ctx.fillRect(paddlyX, paddlyY, paddlyWidth, paddlyHeight);
  ctx.fillStyle = "purple";
  ctx.fillRect(paddlyH, paddlyJ, paddlyWidth, paddlyHeight);
  ctx.fillStyle = "white";
  ctx.arc(x, y, ballRadius, 0, Math.PI * 2);
  ctx.stroke();
  ctx.fill();
  ctx.closePath();

  if (x + ballRadius == myCanvas.width) {
    plusX = -1;
    restart();
  }
  if (x - ballRadius <= 0) {
    plusX = 1;
    restart();
  }
  if (y + ballRadius == myCanvas.height) {
    plusY = -1;
  }
  if (y - ballRadius <= 0) {
    plusY = 1;
  }

  if (
    x - ballRadius < paddlyX + paddlyWidth &&
    y < paddlyY + paddlyHeight &&
    y > paddlyY
  ) {
    plusX = 1;
  }
  if (x + ballRadius > paddlyH && y < paddlyJ + paddlyHeight && y > paddlyJ) {
    plusX = -1;
  }

  x += plusX;
  y += plusY;
  if (x + ballRadius === myCanvas.width) {
    countL.innerHTML = Number(countL.innerHTML) + 1;
    restart();
  } else if (x - ballRadius == 0) {
    countR.innerHTML = Number(countR.innerHTML) + 1;
    restart();
  }

  
}, 1);
// ctx.fillStyle="blue"
// ctx.fillRect(10,10,100,100)
// ctx.fill()

// ctx.fillStyle="red"
// ctx.strokeStyle="blue"
// ctx.beginPath()
// ctx.moveTo(10,10)
// ctx.lineTo(10,130)
// ctx.lineTo(130,130)
// ctx.lineTo(130,10)
// ctx.closePath()
// ctx.stroke()
// ctx.fill()

// ctx.strokeStyle="red"
// ctx.arc(60,60,50,0,Math.PI/2*3,true)
// ctx.stroke()

// tegsh untsugt
// ctx.beginPath()
// ctx.moveTo(10,10)
// ctx.lineTo(10,100)
// ctx.lineTo(100,100)
// ctx.closePath()
// ctx.stroke()

// hurts untsug
// ctx.beginPath()
// ctx.moveTo(100,10)
// ctx.lineTo(10,100)
// ctx.lineTo(100,100)
// ctx.stroke()

// mohoo untsug
// ctx.beginPath()
// ctx.moveTo(10,10)
// ctx.lineTo(80,100)
// ctx.lineTo(100,100)
// ctx.stroke()
