var kingdom1,kingdom2,kingdom3,kingdom4;
var army1,army2,army3,army4;
var coins1,coins2,coins3,coins4;
var gameState = 0;
var playerCount;
var allPlayers;
var database;
var form;
var player;
var game;

function preload(){

}

function setup(){
  canvas = createCanvas(displayWidth - 20, displayHeight-30);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}

function draw(){
  if(playerCount === 4){
    game.update(1);
  }
}
