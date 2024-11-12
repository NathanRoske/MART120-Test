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
    background(20, 55, 35);
    stroke(0);
    fill(0);

    //call the function that draws the borders
    createBorders(10);

    //create the exit
    textSize(16);
    text("EXIT", width-50, height-50)

    //create the character in the above text, fingers crossed the background spawns again!!!

    drawCharacter();
    characterMovement();

    //aaaannnd it didn't, wth?! anyway, let's keep going. Let's create our enemy.
    fill(26, 150, 20);
    // give them breath, life and form!
    circle(shapeX, shapeY, 10);

    //try spawning our other guy...
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
  

    //speed?
    shapeXSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
    shapeYSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
    shapeX2Speed = Math.floor(Math.random() * (Math.floor(Math.random() * 2.5)) - 1);
    shapeY2Speed = Math.floor(Math.random() * (Math.floor(Math.random() * 2.5)) - 1);

    //moving the enemy? I think?
    shapeX += shapeXSpeed;
    shapeY += shapeYSpeed;
    shapeX2 += shapeX2Speed;
    shapeY2 += shapeY2Speed;

    //out of bounds parameters.

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

    // is our character still here?
    if(characterX > width && characterY > width-50)
    {
        fill(0);
        stroke(5);
        textSize(26);
        text("AHHH, Victory!", width/2-50, height/2-50);
    }

    //create a shape when you click
    fill(0);
    circle(mouseShapeX, mouseShapeY, 25);
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
    //okay something's wrong here, but at least it works now!
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
function mouseClicked()
{
    mouseShapeX = mouseX;
    mouseShapeY = mouseY;
}
// Now to give some arrowkey keybinds! oh it twitches a little, I see!
function keyPressed() {
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

//wow, the example really carried me through this.