function setup(){
    Text1 = createP("");
    Text1.html("Area and Perimeter Calculator(Enter only value no unit)");
    Text1.position(displayWidth/4,displayHeight+60);
    Text2 = createP("");
    Text2.html("Enter Value of First Parallel Side");
    Text2.position(displayWidth/4,displayHeight+135);
    side1 = createInput("");
    side1.position(displayWidth/4,displayHeight+210);
    Text3 = createP("");
    Text3.html("Enter Value of Second Parallel Side");
    Text3.position(displayWidth/4,displayHeight+260);
    side2 = createInput("");
    side2.position(displayWidth/4,displayHeight+310);
    Text4 = createP("");
    Text4.html("Enter Value of Height");
    Text4.position(displayWidth/4,displayHeight+360);
    height = createInput("");
    height.position(displayWidth/4,displayHeight+410);
    areaAns = createElement("h4");
    areaAns.position(displayWidth/4,displayHeight+500);
    perimeterAns = createElement("h4");
    perimeterAns.position(displayWidth/4,displayHeight+550);
}
function draw(){
    side1Ans = side1.value();
    side2Ans = side2.value();
    heightAns = height.value();
    area = (1*side1Ans+1*side2Ans)*heightAns/2;
    areaAns.html("Area: "+ area + " unit square");
    console.log("Area: " + area)

}