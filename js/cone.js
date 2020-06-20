function setup(){
    Text1 = createElement("h3");
    Text1.html("Area and Volume Calculator");
    Text1.position(displayWidth/2+200,100);
    Text2 = createP("");
    Text2.html("Enter Value of Radius");
    Text2.position(displayWidth/2+200,200);
    radiusI = createInput("");
    radiusI.position(displayWidth/2+200,275);
    Text4 = createP("");
    Text4.html("Enter Value of Height(no unit)");
    Text4.position(displayWidth/2+200,350);
    height = createInput("");
    height.position(displayWidth/2+200,400);
    SHeightAns = createElement("h4");
    SHeightAns.position(displayWidth/3,500);
    TsareaAns = createElement("h4");
    TsareaAns.position(displayWidth/3,600);
    CsareaAns = createElement("h4");
    CsareaAns.position(displayWidth/3,750);
    VolumeAns = createElement("h4");
    VolumeAns.position(displayWidth/3,900);
}
function draw(){
    radiusAns = radiusI.value();
    heightAns = height.value();
    SHeight = Math.sqrt(radiusAns*radiusAns+heightAns*heightAns)
    SHeightAns.html("Slant Height: "+ SHeight + " units");
    Tsarea = PI*radiusAns*(radiusAns+SHeight);
    Tsarea1 = 22*radiusAns*(radiusAns+SHeight);
    TsareaAns.html("Total Surface Area: "+ Tsarea + " unit square ="+Tsarea1+"/7 unit square");
    Csarea = PI*radiusAns*SHeight;
    Csarea1 = 22*radiusAns*SHeight;
    CsareaAns.html("Curved Surface Area: "+ Csarea + " unit square ="+Csarea1+"/7 unit square");
    Volume = (PI*radiusAns*radiusAns*heightAns)/3;
    Volume1 = (22*radiusAns*radiusAns*heightAns);
    VolumeAns.html("Volume of Cone: "+ Volume + " cubic unit ="+Volume1+"/21 cubic unit");

}