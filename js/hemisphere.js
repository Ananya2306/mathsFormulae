function setup(){
    Text1 = createElement("h3");
    Text1.html("Area and Volume Calculator");
    Text1.position(displayWidth/3+100,100);
    Text2 = createP("");
    Text2.html("Enter Value of Radius(no unit)");
    Text2.position(displayWidth/3+100,175);
    radius = createInput("");
    radius.position(displayWidth/3+200,270);
    TsareaAns = createElement("h4");
    TsareaAns.position(displayWidth/3,350);
    CsareaAns = createElement("h4");
    CsareaAns.position(displayWidth/3,500);
    VolumeAns = createElement("h4");
    VolumeAns.position(displayWidth/3,650);
    DiameterAns = createElement("h4");
    DiameterAns.position(displayWidth/3,800);
}
function draw(){
    radiusAns = radius.value();
    Tsarea = 3*PI*radiusAns*radiusAns;
    Tsarea1 = 3*22*radiusAns*radiusAns;
    TsareaAns.html("Total Surface Area: "+ Tsarea + " unit square = "+ Tsarea1 +"/7 unit square");
    Csarea = 2*PI*radiusAns*radiusAns;
    Csarea1 = 2*22*radiusAns*radiusAns;
    CsareaAns.html("Curved Surface Area: "+ Csarea + " unit square = "+ Csarea1 +"/7 unit square");
    Volume = (radiusAns* radiusAns* radiusAns*2*PI)/3;
    Volume1 = (radiusAns* radiusAns* radiusAns*2*22)/3;
    VolumeAns.html("Volume: "+ Volume + " cubic units = " + Volume1 + "/7 cubic units");
    Diameter = radiusAns*2;
    DiameterAns.html("Diameter: "+ Diameter + " units");

}