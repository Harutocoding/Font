rightX = 0;
leftX = 0;
d = 0;


function setup() {
video = createCapture(VIDEO);
video.size(550, 500);

canvas = createCanvas(550, 550);
canvas.position(560,150);

poseNet = ml5.poseNet(video, modelLoaded);
poseNet.on('pose', gotPoses);
}

function modelLoaded() {
    console.log('PoseNet Is Initialized!!!')
}

function draw() {
    background('#d4af37');
    textSize(d);
    fill('#01796f');
    text("Haruto Lloyd", 50, 400);
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        leftX = results[0].pose.leftWrist.x;
        rightX = results[0].pose.rightWrist.x;
        d = floor(leftX = rightX);
    }
}
