var n1,n2;
var b1,b2,b3,b4;

function setup() {
  
  createCanvas(400, 400);
  
  num1 = createInput();
  num1.position(5, 60);
  
  num2 = createInput();
  num2.position(200, 60);
  
  b1 = createButton("ADD");
  b1.position(10, 200);
  b1.mousePressed(add);
  
  b2 = createButton("Multiply");
  b2.position(80, 200);
  b2.mousePressed(mul);
  
  b3 = createButton("subtract");
 b3.position(10,300);
   b3.mousePressed(sub);

   b3 = createButton("division");
   b3.position(80,300);
   b3.mousePressed(divi);

  textAlign(CENTER);
  textSize(15);
}

function draw() {
  background(200,10,200)
  text("Number 1",70,50)
  text("Number 2",270,50)
  n1 = parseFloat(num1.value())
  n2 = parseFloat(num2.value())
}
function add(){
  console.log (n1 + n2)
}
function mul(){
  console.log(n1*n2)
}
function sub(){
  console.log(n1-n2);
}
function divi(){
   console.log(n1/n2);
}