"use strict";

const canvas = document.getElementById("draw");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
ctx.lineCap = "round";
ctx.lineJoin = "round";
ctx.strokeStyle = "#439820";
ctx.lineWidth = 10;

let Xvalue = 0;
let Yvalue = 0;
let drawing = false;
let hue = 0;
let direction = true;

function draw(e) {
  if (!drawing) return;
  console.log(e);
  ctx.beginPath();
  ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
  ctx.moveTo(Xvalue, Yvalue);
  ctx.lineTo(e.offsetX, e.offsetY);
  ctx.stroke();
  [Xvalue, Yvalue] = [e.offsetX, e.offsetY];

  hue++;
  if (hue >= 360) {
    hue = 0;
  }
  if (ctx.lineWidth >= 100 || ctx.lineWidth <= 1) {
    direction = !direction;
  }
  if (direction) {
    ctx.lineWidth++;
  } else {
    ctx.lineWidth--;
  }
}

canvas.addEventListener("mousedown", function (e) {
  drawing = true;
  [Xvalue, Yvalue] = [e.offsetX, e.offsetY];
});
canvas.addEventListener("mousemove", draw);
canvas.addEventListener("mouseup", () => (drawing = false));
canvas.addEventListener("mouseout", () => (drawing = false));
