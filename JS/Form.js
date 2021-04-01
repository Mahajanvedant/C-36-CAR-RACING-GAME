class Form{
constructor(){
}
Display(){
var Title=createElement('h1')
Title.html("Car Racing Game");
Title.position(150,0);

var Input=createInput("Name")
Input.position(130,160);
var Button=createButton('Play')
Button.position(250,200);
var Greeting=createElement('h2')
Button.mousePressed(function(){
Input.hide();
Button.hide();
var Name=Input.value();
playerCount=playerCount+1
player.update(Name)
player.updateCount(playerCount)
Greeting.html('HELLO'+ Name);
Greeting.position(130,160);
})
}
}
