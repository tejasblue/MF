mX=0;
mY=0;
 function preload(){
    m=loadImage("M.png")
 }

 function setup(){
    canvas=createCanvas(300,300);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(300,300);
    video.hide();

  poseNet=ml5.poseNet(video,modelLoaded);
  poseNet.on('pose', gotPoses);
}

function modelLoaded(){
    console.log ("poseNet is initialized")
}