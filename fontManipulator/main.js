
noseX=0;
noseY=0;
difference=0;
leftWristX=0;
RightWristX=0;

function setup(){
    video = createCapture(VIDEO);
    video.size(550,550);
    canvas = createCanvas(700,550);
    canvas.position(1060,150);
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
    video.position(300,150)
}
function draw(){
background('#d6b0ff');
fill('#03b1fc');
stroke('#03b1fc');
text("Vaishnavi", noseX, noseY);
textSize(difference);
}
function modelLoaded(){
    console.log('posenet is initialized');
}
function gotPoses(results){
    if(results.length>0){
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY=results[0].pose.nose.y; 
        leftWristX= results[0].pose.leftWrist.x ;
        rightWristX= results[0].pose.rightWrist.x ;
        difference=floor(leftWristX-rightWristX);
        console.log("leftWristX = " + leftWristX + " rightWristX = " + rightWristX +  "difference = "+ difference)
  }
}
