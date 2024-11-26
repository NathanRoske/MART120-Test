//Player Spawn
var playerX = 100;
var playerY = 100;
//Values for the keyboard controls
var w = 87;
var a = 83;
var s = 65;
var d = 68;

// redefining the X and Y shapes with arrays
var shapeXs = [];
var shapeYs = [];
var shapesdiameter = [];


var shapeXsSpeed = [];
var shapeYsSpeed = [];

var shapeX = 30;
var shapeY = 50;
   

//obstacle setup
var mouseShapeX;
var mouseShapeY;

function setup()
{
    createCanvas(600, 800);
    
    for (var i = 0; i < 50; i++){   
        shapeXsSpeed[0] = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
        shapeXsSpeed[1] = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
        shapeXsSpeed[2] = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
        shapeXsSpeed[3] = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
        shapeXsSpeed[4] = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);

        shapeYsSpeed[0] = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
        shapeYsSpeed[1] = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
        shapeYsSpeed[2] = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
        shapeYsSpeed[3] = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
        shapeYsSpeed[4] = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);

        shapeXs[0] = getRandomNumber(600);
        shapeXs[1] = getRandomNumber(600);
        shapeXs[2] = getRandomNumber(600);
        shapeXs[3] = getRandomNumber(600);
        shapeXs[4] = getRandomNumber(600);

        shapeYs[0] = getRandomNumber(800);
        shapeYs[1] = getRandomNumber(800);
        shapeYs[2] = getRandomNumber(800);
        shapeYs[3] = getRandomNumber(800);
        shapeYs[4] = getRandomNumber(800);

        shapesdiameter[0] = getRandomNumber(50);
        shapesdiameter[1] = getRandomNumber(50);
        shapesdiameter[2] = getRandomNumber(50);
        shapesdiameter[3] = getRandomNumber(50);
        shapesdiameter[4] = getRandomNumber(50);
    }
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

    //Well, that took me longer than I would've liked...
    
    create_enemies()

    create_enemies2()

    create_enemies3()

    create_enemies4()

    create_enemies5()

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
function create_enemies()
{   fill (10,14,55)
    for (var i = 0; i < shapeXs.length; i++) {
        circle(shapeXs[0], shapeYs[0], shapesdiameter[0]);
        shapeXsSpeed[0] = Math.floor(Math.random() * (Math.floor(Math.random() * 2.5)) - 1);
        shapeYsSpeed[0] = Math.floor(Math.random() * (Math.floor(Math.random() * 2.5)) - 1);

        shapeXs[i] += shapeXsSpeed[i];
        shapeYs[i] += shapeYsSpeed[i];
   
        if(shapeXs[0]  > width) {
            shapeXs[0]  = 0
        }
        if(shapeXs[0] < 0)
        {
            shapeXs[0] = width;
        }
        if(shapeYs[0] > height)
        {
            shapeYs[0] = 0;
        }
        if(shapeYs[0] < 0)
        {
            shapeYs[0] = height;
        }
    } 
}
function create_enemies2()
{   fill (42,23,64)
    for (var i = 0; i < shapeXs.length; i++) {
        circle(shapeXs[1], shapeYs[1], shapesdiameter[1]);
        shapeXsSpeed[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 1.5)) - 1);
        shapeYsSpeed[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 1.5)) - 1);

        shapeXs[1] += shapeXsSpeed[1];
        shapeYs[1] += shapeYsSpeed[1];
   
        if(shapeXs[1]  > width) {
            shapeXs[1]  = 0
        }
        if(shapeXs[1] < 0)
        {
            shapeXs[1] = width;
        }
        if(shapeYs[1] > height)
        {
            shapeYs[1] = 0;
        }
        if(shapeYs[1] < 0)
        {
            shapeYs[1] = height;
        }
    } 
}
function create_enemies3()
{   fill (15,214,255)
    for (var i = 0; i < shapeXs.length; i++) {
        circle(shapeXs[2], shapeYs[2], shapesdiameter[2]);
        shapeXsSpeed[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 0.5)) - 1);
        shapeYsSpeed[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 0.5)) - 1);

        shapeXs[2] += shapeXsSpeed[2];
        shapeYs[2] += shapeYsSpeed[2];
   
        if(shapeXs[2]  > width) {
            shapeXs[2]  = 0
        }
        if(shapeXs[2] < 0)
        {
            shapeXs[2] = width;
        }
        if(shapeYs[2] > height)
        {
            shapeYs[2] = 0;
        }
        if(shapeYs[2] < 0)
        {
            shapeYs[2] = height;
        }
    } 
}
function create_enemies4()
{   fill (64,7,207)
    for (var i = 0; i < shapeXs.length; i++) {
        circle(shapeXs[3], shapeYs[3], shapesdiameter[3]);
        shapeXsSpeed[3] = Math.floor(Math.random() * (Math.floor(Math.random() * 0.25)) - 1);
        shapeYsSpeed[3] = Math.floor(Math.random() * (Math.floor(Math.random() * 0.25)) - 1);

        shapeXs[3] += shapeXsSpeed[3];
        shapeYs[3] += shapeYsSpeed[3];
   
        if(shapeXs[3]  > width) {
            shapeXs[3]  = 0
        }
        if(shapeXs[3] < 0)
        {
            shapeXs[3] = width;
        }
        if(shapeYs[3] > height)
        {
            shapeYs[3] = 0;
        }
        if(shapeYs[3] < 0)
        {
            shapeYs[3] = height;
        }
    } 
}
function create_enemies5()
{   fill (5,34,63)
    for (var i = 0; i < shapeXs.length; i++) {
        circle(shapeXs[4], shapeYs[4], shapesdiameter[4]);
        shapeXsSpeed[4] = Math.floor(Math.random() * (Math.floor(Math.random() * 0.10)) - 1);
        shapeYsSpeed[4] = Math.floor(Math.random() * (Math.floor(Math.random() * 0.10)) - 1);

        shapeXs[i] += shapeXsSpeed[i];
        shapeYs[i] += shapeYsSpeed[i];
   
        if(shapeXs[4]  > width) {
            shapeXs[4]  = 0
        }
        if(shapeXs[4] < 0)
        {
            shapeXs[4] = width;
        }
        if(shapeYs[4] > height)
        {
            shapeYs[4] = 0;
        }
        if(shapeYs[4] < 0)
        {
            shapeYs[4] = height;
        }
    } 
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
// Move it
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
function getRandomNumber(number)
{
    return Math.floor(Math.random() * number) + 10;
}
//The example carried me here too.
