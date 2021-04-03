if(status!=""){
    objectdetector.detect(video, gotResult);
    for(i=0; i<object.length; i++){
       document.getElementById("status").innerHTML="Status: Object detected";
       document.getElementById("number_of_objects").innerHTML="Number of objects are: "+ object.length;
       fill(r, g, b);
       percent=floor(object[i].confidence*100);
       text(object[i].label + " " + percent + "%", object[i].x, object[i].y);
       noFill();
       stroke(r,g,b);
       rect(object[i].x, object[i].y, object[i].width, object[i].height);
       
    }
}

function modelLoaded(){
    console.log("Model is loaded!");
    status=true;
    
}
function gotResult(error, results){
if(error){
    console.error(error);
}
else{
    console.log(results);
    object=results;
}
}