var moonX = 150;
var moonY = 200;
var moonDirection = 1;

var hair1X = 400;
var hair1Y = 400;
var hair1Direction = 2; 

var hair2X = 475;
var hair2Y = 450;
var hair2Direction = 0.5;

var hair3X = 475;
var hair3Y = 550;
var hair3Direction = 0.25;

var hair4X = 350;
var hair4Y = 450;
var hair4Direction = 1.5;

var size = 22;
var count = 0;
var sizeDirection = 1;

function setup()
{
    createCanvas(600,700);
}

function draw()
{
    background(50,47,62);
   //Moon
    strokeWeight(1);
    fill(255,255,255)
    circle(moonX,moonY,220);
    moonX+=moonDirection;
    moonY+=moonDirection;
    if(moonX >= 700 || moonX <= 1)
    {
        moonDirection *= -1;
    }

    fill(0,0,0);
    ellipse(400, 500, 150, 200);
    //Hair1 
    circle(hair1X,hair1Y,75);
    hair1X+=hair1Direction;
    if(hair1X >= 420 || hair1X <= 400)
    {
        hair1Direction *= -1;
    }

    circle(450,450,75);
    
    //Hair4
    circle(hair4X,hair4Y,75);
    hair4Y+=hair4Direction;
    if(hair4Y >= 451 || hair4Y <= 425)
    {
        hair4Direction *= -1;
    }

    //Hair3
    circle(hair3X,hair3Y,120);
    hair3Y+=hair3Direction;
    if(hair3Y >= 555 || hair3Y <= 525)
    {
        hair3Direction *= -1;
    }

   
    //Hair2
    circle(hair2X,hair2Y,120);
    hair2X+=hair2Direction;
    if(hair2X >= 485 || hair2X <= 450)
    {
        hair2Direction *= -1;
    }
    triangle(5100,1200,3100,500,200,300);
    square(325,500,75);
    ellipse(400, 600, 95, 200);
    
    rect(350, 600, 150, 200);

    line(30,200,805,400);

    fill(255,0,0);
    strokeWeight(25);
    point(325,500);

    //title size and resize
    fill(120);
    textSize(size);
    size+=sizeDirection;
    count++;
    if(count > 5)
    {
        sizeDirection *=-1;
        count = 0;
    }
    text('Nate Roske..."Under the Moonlight"', 10,30);
}