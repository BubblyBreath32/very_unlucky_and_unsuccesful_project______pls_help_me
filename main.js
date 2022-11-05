var listened = new webkitSpeechRecognition;

function start() {
    document.getElementById("textbox").innerHTML = "";
    listened.start();
}

listened.onresult = function(event) {
    console.log(event);
    output = event.results[0][0].transcript;
    document.getElementById("textbox").innerHTML = output;
    if(output == "selfie") {
    speak();
    }}


function speak() {
    var apicontainer = window.speechSynthesis;
    var apicontainercontainer = "taking your selfie in 5 seconds";
var contcontcont = new SpeechSynthesisUtterance(apicontainercontainer);
apicontainer.speak(contcontcont);
Webcam.attach(webera);
setTimeout(function() {snapshot();}, 5000);
}

webera = document.getElementById("webcam");

Webcam.set({
   width: 320,
   height: 240,
   image_format: 'jpeg',
   force_flash: true,
   jpeg_quality: 100
});

function snapshot() {
    Webcam.snap(function(data_uri){
        document.getElementById("webcam").innerHTML = '<img id = "weam" src ="'+data_uri+'">';
    });
}
