Webcam.set({
width:320,
height:300,
image_format:'png',
png_quality:90
});
camera=document.getElementById("camera");
Webcam.attach('#camera');
function takePhoto(){
Webcam.snap(function(data_uri)
    {
     document.getElementById("result").innerHTML='<img id="capture_img"src="'+data_uri+'"/>';
    }
    );
}
console.log("ml5: ",ml5.version);
Classifier=ml5.imageClassifier('MobileNet',modelLoaded);
function modelLoaded(){
    console.log("model has loaded");
}
function result(){
    img=document.getElementById("capture_img");
    Classifier.classify(img,gotResult);
}
function gotResult(error,results){
    if(error){
        console.error(error);
    }else{
        document.getElementById("object_name").innerHTML=results[0].label;
    }
}