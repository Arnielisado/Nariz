noseX=0;
noseY=0;

function preload(){}
function setup(){
    canvas=createCanvas(300,300);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(300,300);
    video.hide();

    postNet=ml5.poseNet(video, modelLoaded);
    postNet.on('post',gotPoses);
}

function modelLoaded(){
    console.log('postNet esta inicializado')
}

function gotPoses(results){
    console.log(results);
    if(results.lenght>0){
        console.log(results);
        noseX=results[0].pose.nose.x;
        noseY=results[0].pose.nose.y;
        console.log("Nariz x = "+noseX);
        console.log("Nariz y = "+noseY);
    }
}
function draw(){
    image(video,0,0,300,300);
}
function take_snapshot(){
    save('nariz_payaso.png');
}