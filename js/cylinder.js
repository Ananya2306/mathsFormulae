function setup(){
    Text1 = createElement("h3");
    Text1.html("Area and Volume Calculator");
    Text1.position(displayWidth/2+200,150);
    Text2 = createP("");
    Text2.html("Enter Value of Radius");
    Text2.position(displayWidth/2+200,250);
    radiusI = createInput("");
    radiusI.position(displayWidth/2+200,300);
    Text4 = createP("");
    Text4.html("Enter Value of Height(no unit)");
    Text4.position(displayWidth/2+200,375);
    height = createInput("");
    height.position(displayWidth/2+200,450);
    TsareaAns = createElement("h4");
    TsareaAns.position(displayWidth/3,520);
    CsareaAns = createElement("h4");
    CsareaAns.position(displayWidth/3,650);
    VolumeAns = createElement("h4");
    VolumeAns.position(displayWidth/3,780);
}
function draw(){
    radiusAns = radiusI.value();
    heightAns = height.value();
    Tsarea = 2*PI*radiusAns*(radiusAns*1+heightAns*1);
    Tsarea1 = 2*22*radiusAns*(radiusAns*1+heightAns*1);
    TsareaAns.html("Total Surface Area: "+ Tsarea + " unit square ="+Tsarea1+"/7 unit square");
    Csarea = 2*PI*radiusAns*heightAns;
    Csarea1 = 2*22*radiusAns*heightAns;
    CsareaAns.html("Curved Surface Area: "+ Csarea + " unit square ="+Csarea1+"/7 unit square");
    Volume = PI*radiusAns*radiusAns*heightAns;
    Volume1 = PI*radiusAns*radiusAns*heightAns;
    VolumeAns.html("Volume: "+ Volume + " cubic unit ="+Volume1+"/7 cubic unit");

}