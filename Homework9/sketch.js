function setup()
{
    createCanvas(600,700);
}

function draw()
{
    background(50,47,62);
    
    strokeWeight(1);
    fill(255,255,255)
    circle(150,200,220);

    fill(0,0,0);
    ellipse(400, 500, 150, 200);
    circle(400,400,75);
    circle(450,450,75);
    circle(350,450,75);
    circle(475,550,120);
    circle(475,450,120);
    triangle(5100,1200,3100,500,200,300);
    square(325,500,75);
    ellipse(400, 600, 95, 200);
    
    rect(350, 600, 150, 200);

    line(30,200,805,400);

    fill(255,0,0);
    strokeWeight(25);
    point(325,500);


    text('Nate Roske..."Under the Moonlight"', 10,30);
}