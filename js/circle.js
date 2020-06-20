function setup(){
    Text1 = createP("");
    Text1.html("Area and Perimeter Calculator(Enter only value no unit)");
    Text1.position(displayWidth/4,displayHeight+50);
    Text2 = createP("");
    Text2.html("Enter Value of Radius");
    Text2.position(displayWidth/4,displayHeight+125);
    radiusI = createInput("");
    radiusI.position(displayWidth/4,displayHeight+200);
    diameter = createElement("h4");
    diameter.position(displayWidth/4,displayHeight+250);
    originalPi = createElement("h4");
    originalPi.position(displayWidth/4,displayHeight+320);
    areaAns = createElement("h4");
    areaAns.position(displayWidth/4,displayHeight+370);
    circumferenceAns = createElement("h4");
    circumferenceAns.position(displayWidth/4,displayHeight+420);
    pi = createElement("h4");
    pi.position(displayWidth/4,displayHeight+490);
    areaAns1 = createElement("h4");
    areaAns1.position(displayWidth/4,displayHeight+540);
    circumferenceAns1 = createElement("h4");
    circumferenceAns1.position(displayWidth/4,displayHeight+590);
    fractionPi = createElement("h4");
    fractionPi.position(displayWidth/4,displayHeight+660);
    areaAns2= createElement("h4");
    areaAns2.position(displayWidth/4,displayHeight+710);
    circumferenceAns2 = createElement("h4");
    circumferenceAns2.position(displayWidth/4,displayHeight+760);
}
function draw(){
    
    originalPi.html("For original value of Pi upto 10 decimals");
    pi.html("For Pi = 3.14");
    fractionPi.html("For Pi = 22/7");
    radius = radiusI.value();
    area = radius * radius * PI;
    circumference = radius * PI * 2;
    area1 = radius * radius * 3.14;
    circumference1 = radius * 3.14 * 2;
    area2 = radius * radius * 22;
    circumference2 = radius * 22 * 2;
    diameter1 = radius* 2
    diameter.html("Diameter: "+ diameter1 +" units")
    areaAns.html("Area: "+ area + " unit square");
    circumferenceAns.html("circumference: "+ circumference + " units");
    areaAns1.html("Area: "+ area1 + " unit square");
    circumferenceAns1.html("circumference: "+ circumference1 + " units");
    if(area2%7===0){
    areaAns2.html("Area: "+ area2/7 + " unit square");
    circumferenceAns2.html("circumference: "+ circumference2/7 + " units");} 
    else{
        
    areaAns2.html("Area: "+ area2 + "/7 unit square");
    circumferenceAns2.html("circumference: "+ circumference2 + "/7units");
    }

}