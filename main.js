noseX = 0;
noseY = 0;
difference = 0;
rightWristX = 0;
leftWristX = 0;

function setup() {
    video = createCapture(VIDEO);
    video.size(550, 500);

    canvas = createCanvas(550, 500);
    canvas.position(560, 150);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);


}

function draw() {
    background('#6b797d');
    textSize(difference);
    fill("#cc21aa");
    text("Rudra",50, 400);


}

function modelLoaded() {
    console.log('poseNet Is Initialized!');

}


function gotPoses(results) {
    if (results.length > 0) {
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log("noseX = " + noseX + " noseY = " + noseY);

        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        difference = floor(leftWristX - rightWristX);
        console.log("leftWristX = " + leftWristX + "rightWristX = " + rightWristX + "difference =" + difference);



    }
}

document.addEventListener("DOMContentLoaded", function() {
    // Simulate content loading delay
    setTimeout(function(){
      // Hide preloader and show content
      document.querySelector('.preloader').style.display = 'none';
      document.querySelectorAll('h1, p').forEach(function(el) {
        el.style.display = 'block';
      });
    }, 2000); // Adjust this time to match your actual content loading time
  });
  