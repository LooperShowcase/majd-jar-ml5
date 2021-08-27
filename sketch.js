
let player
let bgImg
let playerImg
let obsImg
let obstacles = []
let wordClassfier;

function preload(){
  bgImg = loadImage("5lfya.jpg")
  playerImg = loadImage("player.png")
  obsImg = loadImage("obstacle.png")


  let options={
    probabilitytheresshold:0.85
  }
  wordClassfier = ml5.soundClassifier("SpeechCommands18w",options)
}






function setup() {
  createCanvas(800, 400);
  player = new Player()
  wordClassfier.classify(heardWord)
}

function heardWord(error,results){
  console.log(results[0].label+" "+ results[0].confidence)
  if(results[0].label== "up"){
    player.jump()
  }
}

function draw() {
  background(bgImg);

  if (random(1) < 0.01){
    obstacles.push(new Obstacle())
  }

  for (let obs of obstacles){
    obs.show()
    obs.move()
    if (player.collided(obs)== true){
      textSize(80)
      fill("black")
      text("game over",400,200)
      noLoop()
    }
  }
  player.show();
  player.move();
}

function keyPressed(){
  if (key === " "){
    player.jump()
  }
}

