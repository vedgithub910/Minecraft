var c1=new fabric.Canvas("myCanvas");
px=10;
py=10;
blockw=30;
blockh=30;
var steve="";
var blocki="";

function playerupdate(){
fabric.Image.fromURL("player.png",function(Img){
steve=Img;
steve.scaleToWidth(150);
steve.scaleToHeight(150);
steve.set({
top:py,left:px
});
c1.add(steve);
}
);
}
function newimage(get_image){
    fabric.Image.fromURL(get_image,function(Img){
    blocki=Img;
    blocki.scaleToWidth(blockw);
    blocki.scaleToHeight(blockh);
    blocki.set({
    top:py,left:px
    });
    c1.add(blocki);
    }
    );
    }
window.addEventListener("keydown",mykeydown);
function mykeydown(e){
keypress=e.keyCode;
if(keypress=='38')
{
   up ();
console.log("up")
}
if(keypress=='40')
{
   down ();
console.log("down")
}
if(keypress=='37')
{
   left ();
console.log("left")
}
if(keypress=='39')
{
   right ();
console.log("right")
}
if(keypress=='87')
{
    newimage('wall.jpg');
console.log("w")
}
if(keypress=='71')
{
    newimage('ground.png');
console.log("w")
}
if(keypress=='76')

    {newimage('light_green.png');
console.log("l")
}
if(keypress=='84')

    {newimage('trunk.jpg');
console.log("t");       
}
if(keypress=='82')

    {newimage('roof.jpg');
console.log("r");
}
if(keypress=='89')

    {newimage('yellow_wall.png');
console.log("y");
}
if(keypress=='68')

    {newimage('dark_green.png');
console.log("d");
}
if(keypress=='85')

    {newimage('unique.png');
console.log("u");
}
if(keypress=='67')

    {newimage('cloud.jpg');
console.log("c");
}
}
function up(){
if(py>=0)
{
py=py-10;
c1.remove(steve);
playerupdate();

}

}
function down(){
if (py<=450)
{
py=py+10;
c1.remove(steve);
playerupdate();
}

}
function right(){
if(px<=850)
{
px=px+10;
c1.remove(steve);
playerupdate();
}

}
function left(){
if (px>=0)
{
px=px-10;
c1.remove(steve);
playerupdate();
}

}