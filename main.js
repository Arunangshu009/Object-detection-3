img="";
status="";

function preload(){
    img= loadImage('India.jpg');
    document.getElementById("India.png");
}

function setup(){
    canvas= createCanvas(640, 420);
    canvas.center();
   
    document.getElementById("status").innerHTML= "Status : Detecting Object";
}

function modelLoaded(){
    console.log("Model Loaded");
    status=true;

}

function gotResult(error, results){
if(error){
    console.log("error");
}
    console.log("results");
}

function draw(){
    image(img, 0, 0, 640, 420);

    fill("#ffffff");
    text("INDIA", 403, 115);
    noFill();
    stroke("#ff0000");
    rect(400, 100, 80, 95);
}

function next(){
    img= loadImage('dog.jpg');
    document.getElementById("dog.jpg");
    console.log("Dog image");
}

function before(){
    img= loadImage('India.jpg');
    document.getElementById("India.jpg");
    console.log("India uploaded");
}