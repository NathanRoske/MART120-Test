//Player Spawn
var playerX = 100;
var playerY = 100;
//Values for the keyboard controls
var w = 87;
var a = 83;
var s = 65;
var d = 68;

//X and Y shape
var shapeX2 = 50;
var shapeY2 = 100;
var shapeX2Speed;
var shapeY2Speed;
var shape2diameter = 40;

var shapeX = 30;
var shapeY = 50;
var shapeXSpeed;
var shapeYSpeed;

//obstacle setup
var mouseShapeX;
var mouseShapeY;
function setup()
{
    createCanvas(600, 800);
    //random speed for shapes
    shapeXSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
    shapeYSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
    shapeX2Speed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) - 1);
    shapeY2Speed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) - 1);
    createCharacter(25,250);
}

function draw()
{
    //calling background drawing function
    drawbackground();
    
    //call the function that draws the borders
    createBorders(10);

    //create the exit
    exitcreation()

    //create the player
    drawCharacter();
    
    characterMovement();

    //spawning first bad guy
    drawBadGuy1()
    
    //try spawning our other guy...
    drawBadGuy2()
  

    //speed?
    enemyspeed()

    //moving the enemy? I think?
    enemymovement()

    //out of bounds parameters.
    outofbounds()
    

    //win detection.
    WinDetection()

    //create a shape when you click
    mouseclickcirclespawn()
}

function characterMovement()
{
    //keybinds!!!
    if(keyIsDown(w))
    {
        characterY -= 10;
    }
    if(keyIsDown(s))
    {
        characterX -= 10;
    }
    if(keyIsDown(a))
    {
        characterY += 10;
    }
    if(keyIsDown(d))
    {
        characterX += 10;
    }
}

function drawbackground()
{
    background(20, 55, 35);
    stroke(0);
    fill(0);
}
function drawBadGuy2()
{
    fill(55, 30, 50);
    circle(shapeX2, shapeY2, shape2diameter); 
    //The logical operator gives the second ball an "inflate" animation until it gets to a certain size.
    if(shape2diameter <= 200)
    {
        shape2diameter += 1;
    }
    else if (shape2diameter > 200 || shape2diameter <= 300)
    {
        shape2diameter -=2;
    }
}
function enemyspeed()
{
    shapeXSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
    shapeYSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
    shapeX2Speed = Math.floor(Math.random() * (Math.floor(Math.random() * 2.5)) - 1);
    shapeY2Speed = Math.floor(Math.random() * (Math.floor(Math.random() * 2.5)) - 1);
}    
function drawBadGuy1() 
{    //Bad Guy 1
    fill(26, 150, 20);
    circle(shapeX, shapeY, 10);
}
function createCharacter(x,y)
{
    characterX = x;
    characterY = y;
}
function drawCharacter()
{
    fill(23,40,123);
    circle(characterX,characterY,25);
}
function createBorders(thickness)
{
    //top
    rect(0,0,width,thickness);
    //left
    rect(0,0,thickness,height);
    //bottom
    rect(0, height-thickness, width, thickness);
    //right border with exit
    rect(width-thickness,0,thickness,height-50);
}
function enemymovement()
{
    shapeX += shapeXSpeed;
    shapeY += shapeYSpeed;
    shapeX2 += shapeX2Speed;
    shapeY2 += shapeY2Speed;
}
function mouseClicked()
{
    mouseShapeX = mouseX;
    mouseShapeY = mouseY;
}
// Now to give some arrowkey keybinds! oh it twitches a little, I see!
function keyPressed() 
{
    if (keyCode === LEFT_ARROW) {
        characterX -=10;
    }
    else if (keyCode === RIGHT_ARROW) {
        characterX +=10;
    }
    else if (keyCode === UP_ARROW) {
        characterY -= 10;
    }
    else if (keyCode === DOWN_ARROW) {
        characterY += 10;
    }
}
function exitcreation()
{
    textSize(16);
    text("EXIT", width-50, height-50)
}
function outofbounds()
{
    if(shapeX  > width)
        {
            shapeX  = 0
        }
        if(shapeX < 0)
        {
            shapeX = width;
        }
        if(shapeY > height)
        {
            shapeY = 0;
        }
        if(shapeY < 0)
        {
            shapeY = height;
        } 
    
        if(shapeX2 > width)
            {
                shapeX2 = 0
            }
            if(shapeX2 < 0)
            {
                shapeX2 = width;
            }
            if(shapeY2 > height)
            {
                shapeY2 = 0;
            }
            if(shapeY2 < 0)
            {
                shapeY2 = height;
            } 
}
function WinDetection()
{
    if(characterX > width && characterY > width-50)
    {
        fill(0);
        stroke(5);
        textSize(26);
        text("AHHH, Victory!", width/2-50, height/2-50);
    }
}
function mouseclickcirclespawn()
{
    fill(0);
    circle(mouseShapeX, mouseShapeY, 25);
}
//wow, the example really carried me through this.