var leftwrist_X,rightwrist_X,difference;



function setup(){
canvas=createCanvas(400,400);
canvas.position(950,200);

cam=createCapture(VIDEO);
cam.position(100,200);
cam.size(400,400);

teachable=ml5.poseNet(cam,test);
teachable.on("pose",getResult);
}


function test(){
    console.log("Teachable machine loaded");
}


function getResult(result){
    if(result.length>0){
        console.log(result);
        leftwrist_X=result[0].pose.leftWrist.x;
        rightwrist_X=result[0].pose.rightWrist.x;
        difference=Math.floor(leftwrist_X-rightwrist_X);
        document.getElementById("size").innerHTML=difference;

    }
}

function draw(){
     background("grey");
     textSize(difference);
     fill("blue");
     text("canvas test",10,200);
}



function preload(){

}