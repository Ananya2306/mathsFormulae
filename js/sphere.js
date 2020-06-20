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
    VolumeAns = createElement("h4");
    VolumeAns.position(displayWidth/3,500);
    DiameterAns = createElement("h4");
    DiameterAns.position(displayWidth/3,650);
}
function draw(){
    radiusAns = radius.value();
    Tsarea = 4*PI*radiusAns*radiusAns;
    Tsarea1 = 4*22*radiusAns*radiusAns;
    TsareaAns.html("Total Surface Area: "+ Tsarea + " unit square = "+ Tsarea1 +"/7 unit square");
    Volume = (radiusAns* radiusAns* radiusAns*4*PI)/3;
    Volume1 = (radiusAns* radiusAns* radiusAns*4*22)/3;
    VolumeAns.html("Volume: "+ Volume + " cubic units = " + Volume1 + "/7 cubic units");
    Diameter = radiusAns*2;
    DiameterAns.html("Diameter: "+ Diameter + " units");

}