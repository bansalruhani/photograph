function setup(){
    canvas= createCanvas(640,480);
    canvas.position(150,150);
    video=createCapture(VIDEO);
    video.hide();
}
function draw(){
    image(video,230,150,220,200);
    fill(225,0,0);
     stroke(225.,0,0);
     circle(50,50,80);

     fill(0,120,0);
     stroke(0,128,0);
     Rect(90,40,460,20);
     Rect(90,420,460,20);
}