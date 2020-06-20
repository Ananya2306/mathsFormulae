function setup(){
    Text1 = createElement("h3");
    Text1.html("Area and Volume Calculator");
    Text1.position(displayWidth/2+100,100);
    Text2 = createP("");
    Text2.html("Enter Value of Side(no unit)");
    Text2.position(displayWidth/2+100,175);
    side = createInput("");
    side.position(displayWidth/2+200,270);
    TsareaAns = createElement("h4");
    TsareaAns.position(displayWidth/2,300);
    LsareaAns = createElement("h4");
    LsareaAns.position(displayWidth/2,350);
    VolumeAns = createElement("h4");
    VolumeAns.position(displayWidth/2,400);
    DiagonalAns = createElement("h4");
    DiagonalAns.position(displayWidth/2,450);
}
function draw(){
    sideAns = side.value();
    Tsarea = 6* sideAns* sideAns;
    TsareaAns.html("Total Surface Area: "+ Tsarea + " unit square");
    Lsarea = 4* sideAns* sideAns;
    LsareaAns.html("Lateral Surface Area: "+ Lsarea + " unit square");
    Volume = sideAns* sideAns* sideAns;
    VolumeAns.html("Volume: "+ Volume + " cubic unit");
    Diagonal = sideAns;
    Diagonal1 = sideAns * Math.sqrt(3);
    DiagonalAns.html("Diagonal: "+ Diagonal + "√3 units = " + Diagonal1 + " units");

}