function setup() {
    video = createCapture(VIDEO);
    video.size(550, 500)

    canvas = createCanvas(550, 550)
    canvas.position(560, 150)

    poseNet = ml5.poseNet(video, modalLoaded);
}

function draw() {
    background('#99CB0E')
}

function modalLoaded() {
    console.log('PoseNet Is Initialized! ');
}

function gotPoses(results)
{
    if(results.lenght > 0)
    {
        console.log(results)
    }
}