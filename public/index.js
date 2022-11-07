const aboutBtn = document.getElementById(`about`);
const homeBtn = document.getElementById(`home`);
const contactBtn = document.getElementById(`contact`);

homeBtn.addEventListener("click", ()=>{
  document.getElementById("cvdiv").style.display = 'block';
  document.getElementById("aboutdiv").style.display = 'none';
  document.getElementById("contactdiv").style.display = 'none';
}, false);

aboutBtn.addEventListener("click", ()=>{
  document.getElementById("cvdiv").style.display = 'none';
  document.getElementById("aboutdiv").style.display = 'block';
  document.getElementById("contactdiv").style.display = 'none';
}, false);

contactBtn.addEventListener("click", ()=>{
  document.getElementById("cvdiv").style.display = 'none';
  document.getElementById("contactdiv").style.display = 'block';
  document.getElementById("aboutdiv").style.display = 'none';
}, false);

//Game logic

var canvas = document.querySelector('#cvdiv').querySelector('#canv')
var draw = canvas.getContext("2d");

draw.beginPath();
draw.fillStyle = "#000000";
draw.fillRect(250, 00, 30, 50);
draw.closePath();

draw.beginPath()
draw.fillStyle = "Yellow"
draw.arc(150, 100, 40, 0, 2 * Math.PI)
draw.fill();
draw.closePath();