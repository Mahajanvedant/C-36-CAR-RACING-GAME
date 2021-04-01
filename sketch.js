var gameState=0;
var playerCount=0;
var database;
var form;
var game;
var player;


function setup(){
createCanvas(1600,800);
database=firebase.database();
game=new Game();
game.getState();
game.Start();
}


function draw(){


}