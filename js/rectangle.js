function setup(){
    Text1 = createP("");
    Text1.html("Area and Perimeter Calculator(Enter only value no unit)");
    Text1.position(displayWidth/4,displayHeight+60);
    Text2 = createP("");
    Text2.html("Enter Value of Breadth");
    Text2.position(displayWidth/4,displayHeight+135);
    breadth = createInput("");
    breadth.position(displayWidth/4,displayHeight+210);
    Text3 = createP("");
    Text3.html("Enter Value of Length");
    Text3.position(displayWidth/4,displayHeight+260);
    length1 = createInput("");
    length1.position(displayWidth/4,displayHeight+310);
    
    areaAns = createElement("h4");
    areaAns.position(displayWidth/4,displayHeight+400);
    perimeterAns = createElement("h4");
    perimeterAns.position(displayWidth/4,displayHeight+450);
}
function draw(){
    lengthAns = length1.value();
    breadthAns = breadth.value();
    area = lengthAns * breadthAns;
    perimeter = 2*lengthAns+2*breadthAns;
    areaAns.html("Area: "+ area + " unit square");
    perimeterAns.html("Perimeter: "+ perimeter + " units");
    console.log("Area: " + area)

}