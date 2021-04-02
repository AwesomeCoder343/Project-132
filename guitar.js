img="";
status="";
object=[];
function setup(){
    canvas=createCanvas(380, 380);
    canvas.center();
    video=createCapture(VIDEO);
    video.hide();
    objectdetector=ml5.objectDetector('cocosst', modelLoaded);
    document.getElementById("status").innerHTML="Status: Detecting Objects";
}
function preload(){
    img=loadImage('guitar.jpg');
}