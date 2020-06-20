function setup(){
    Text1 = createP("");
    Text1.html("Area and Perimeter Calculator(Enter only value no unit)");
    Text1.position(displayWidth/4,displayHeight+60);
    Text2 = createP("");
    Text2.html("Enter Value of Base");
    Text2.position(displayWidth/4,displayHeight+135);
    base = createInput("");
    base.position(displayWidth/4,displayHeight+210);
    Text3 = createP("");
    Text3.html("Enter Value of Height");
    Text3.position(displayWidth/4,displayHeight+260);
    height1 = createInput("");
    height1.position(displayWidth/4,displayHeight+310);
    areaAns = createElement("h4");
    areaAns.position(displayWidth/4,displayHeight+400);
}
function draw(){
    heightAns = height1.value();
    baseAns = base.value();
    area = heightAns * baseAns;
    areaAns.html("Area: "+ area + " unit square");
    console.log("Area: " + area)

}