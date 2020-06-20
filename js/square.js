function setup(){
    Text1 = createP("");
    Text1.html("Area and Perimeter Calculator(Enter only value no unit)");
    Text1.position(displayWidth/4,displayHeight-50);
    Text2 = createP("");
    Text2.html("Enter Value of Side");
    Text2.position(displayWidth/4,displayHeight+25);
    SideI = createInput("");
    SideI.position(displayWidth/4,displayHeight+100);
    areaAns = createElement("h4");
    areaAns.position(displayWidth/4,displayHeight+125);
    perimeterAns = createElement("h4");
    perimeterAns.position(displayWidth/4,displayHeight+175);
}
function draw(){
    side = SideI.value();
    area = side * side;
    perimeter = side *4;
    areaAns.html("Area: "+ area + " unit square");
    perimeterAns.html("Perimeter: "+ perimeter + " units");
    console.log("Area: " + area)

}