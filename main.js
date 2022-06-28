Webcam.set({
    width:350, height:300, image_format:"png",
    png_quality:90
});
Webcam.attach("#camera");
function takesnapshot()
{
Webcam.snap(function(dataurl)
{document.getElementById("result").innerHTML='<img id="captureimage" src="'+dataurl+'"/>';});
}
console.log("ml5version",ml5.version);
classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/i_MzY4Vq5/model.json",modelloaded);
function modelloaded() {
   console.log("model is loaded");
}
function check() {
    img=document.getElementById("captureimage");
    classifier.classify(img,getresult);
}
function getresult(error, result) {
if (error) {
    console.error(error);
}
else {
    console.log(result);
    document.getElementById("objectname").innerHTML=result[0].label;
    document.getElementById("objectaccuracy").innerHTML=result[0].confidence.toFixed(3);
    
}
}