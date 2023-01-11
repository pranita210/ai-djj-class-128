song = "";
leftWristX = 0;
leftWristY = 0;

rightWristX = 0;
rightWristY = 0;

function setup() {
    canvas = createCanvas(600, 500);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded() {
    console.log('poseNet is Initialize');
}

function gotPoses(results) {
if(results.length > 0){
console.log(results);
leftWristX = results[0].pose.leftWrist.x;
leftWristY = results[0].pose.leftWrist.y;
console.log("leftWristX = "+ leftWristX + "leftWristY = "+ leftWristY);

rightWristX = results[0].pose.rightWrist.x;
rightWristY = results[0].pose.rigthWrist.y;


console.log("rightWristX = "+ rightWristX + "rightWristY = "+ rigthWristY);


}
}

function draw() {
    Image(video, 0, 0, 600, 500);
}


function preload()  {
    song = loadSong("music.mp3")
}

function  play()  {
    song.play();
    song.setVolume(1);
    song.rate(1);
}