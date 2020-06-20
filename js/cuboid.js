function setup(){
    Text1 = createElement("h3");
    Text1.html("Area and Volume Calculator");
    Text1.position(displayWidth/2+100,100);
    Text2 = createP("");
    Text2.html("Enter Value of Length(no unit)");
    Text2.position(displayWidth/2+100,175);
    length1 = createInput("");
    length1.position(displayWidth/2+200,270);
    Text3 = createP("");
    Text3.html("Enter Value of Breadth(no unit)");
    Text3.position(displayWidth/2+100,345);
    breadth = createInput("");
    breadth.position(displayWidth/2+200,410);
    Text4 = createP("");
    Text4.html("Enter Value of Height(no unit)");
    Text4.position(displayWidth/2+100,475);
    height = createInput("");
    height.position(displayWidth/2+200,550);
    TsareaAns = createElement("h4");
    TsareaAns.position(displayWidth/2,620);
    LsareaAns = createElement("h4");
    LsareaAns.position(displayWidth/2,670);
    VolumeAns = createElement("h4");
    VolumeAns.position(displayWidth/2,720);
    DiagonalAns = createElement("h4");
    DiagonalAns.position(displayWidth/2,770);
}
function draw(){
    lengthAns = length1.value();
    breadthAns = breadth.value();
    heightAns = height.value();
    Tsarea = 2* lengthAns*breadthAns+2* lengthAns*heightAns+2* heightAns*breadthAns;
    TsareaAns.html("Total Surface Area: "+ Tsarea + " unit square");
    Lsarea = 2*heightAns*(1*lengthAns+1*breadthAns)
    LsareaAns.html("Lateral Surface Area: "+ Lsarea + " unit square");
    Volume = lengthAns* breadthAns* heightAns;
    VolumeAns.html("Volume: "+ Volume + " cubic unit");
    Diagonal = Math.sqrt(1*lengthAns*lengthAns+1*breadthAns*breadthAns+1*heightAns*heightAns)
    DiagonalAns.html("Diagonal: "+ Diagonal + " units");

}