const aboutBtn = document.getElementById(`about`);
const homeBtn = document.getElementById(`home`);
const contactBtn = document.getElementById(`contact`);
let gameState = {
  start: 0,
  pause: 1,
  playing: 2,
  end: 4,
} // Game states
gameState = 0;

homeBtn.addEventListener("click", ()=>{
  document.getElementById("cvdiv").style.display = 'block';
  document.getElementById("aboutdiv").style.display = 'none';
  document.getElementById("contactdiv").style.display = 'none';
  if(gameState == 1) gameState = 2;
  else if(gameState == 2) gameState = 1;
}, false);

aboutBtn.addEventListener("click", ()=>{
  document.getElementById("cvdiv").style.display = 'none';
  document.getElementById("aboutdiv").style.display = 'block';
  document.getElementById("contactdiv").style.display = 'none';
  gameState = 1;
}, false);

contactBtn.addEventListener("click", ()=>{
  document.getElementById("cvdiv").style.display = 'none';
  document.getElementById("contactdiv").style.display = 'block';
  document.getElementById("aboutdiv").style.display = 'none';
  gameState = 1;
}, false);

//Game logic
// Every Object in the game will be resposinble for drawing itself,
// And there will only be a single clear canvas function in the loop
// This will imporve performance
var canvas = document.querySelector('#cvdiv').querySelector('#canv')
var c = canvas.getContext("2d");

function Player(x, y, radius, color) {
  this.x = x;
  this.y =y;
  this.dx = 1;
  this.dy = 2; 
  this.radius = radius;
  this.color = color;

  this.draw = function() {
    c.beginPath()
    c.arc(this.x, this.y, this.radius, Math.PI - (10/180) , Math.PI * 2 , false);
    c.strokeStyle = color;
    c.stroke();
  }

  this.update = function() {
    if(this.x + this.radius > canvas.width
      || this.x - this. radius < 0) {
        this.dx = -this.dx; }
    if(this.y + this.radius > canvas.height
      || this.y - this. radius < 0) {
        this.dy = -this.dy; }
    
    this.x += this.dx;
    this.y += this.dy;
  }
}

const random_hex_color_code = () => {
  let n = (Math.random() * 0xfffff * 1000000).toString(16);
  return '#' + n.slice(0, 6);
};
const numThings = 1000;

let stack = [];
for(let i = 0; i < numThings ; i ++)
  stack[i] = new Player(Math.random() * 150, Math.random() * 100, Math.random() * 20,
    random_hex_color_code());
 
function gameLoop(){
  requestAnimationFrame(gameLoop)
  c.clearRect(0, 0 , canvas.width, canvas.height);
  for(let j = 0 ; j < numThings ; j++)
  {
    stack[j].draw();
    stack[j].update();
  }


}

gameLoop();