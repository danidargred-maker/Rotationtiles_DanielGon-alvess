
let tamanho = 60;
let grelha = [];
let modo = false;

 function setup() {
 createCanvas(600, 600);

 //grelha aleatória
 for (let i = 0; i < 10; i++) {
 grelha[i] = [];

 for (let j = 0; j < 10; j++) {
 grelha[i][j] = random(1) < 0.5 ? 0 : 1;
 }
}
}
function draw() {
  background(15);

 for (let i = 0; i < 10; i++) {
 for (let j = 0; j < 10; j++) {
 let x = i * tamanho;
  let y = j * tamanho;

  let distancia = dist(mouseX, mouseY,
 x + 30, y + 30);

 let peca = grelha[i][j];

 if (distancia < 100) {
 peca = 1 - peca;
 }

 if (modo == false) {
 stroke(240);
  strokeWeight(3);
 } else {
  stroke(255, 70, 130);
 strokeWeight(5);
 }

 noFill();

 if (peca == 0) {
 arc(x, y, tamanho, tamanho, 0, HALF_PI);
  arc(x + tamanho, y + tamanho,
  tamanho, tamanho, PI, PI + HALF_PI);
  } else {
  
  arc(x + tamanho, y, tamanho, tamanho,
  HALF_PI, PI);
  arc(x, y + tamanho, tamanho, tamanho,
  PI + HALF_PI, TWO_PI);
  }
  }
  }
}

function mousePressed() {
  if (modo == false) {
  modo = true;
  } else {
  modo = false;
  }
}
