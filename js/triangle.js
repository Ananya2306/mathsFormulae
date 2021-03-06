function setup(){

    Text4 = createP(" Types Of Triangles");
    Text4.position(displayWidth/4,displayHeight+40);
    Text5 = createP("==> Right-Angled Triangles"); 
    Text5.position(displayWidth/4,displayHeight+120);
    Text6 = createP("==>These are triangles which has one right angle(90 degrees).");
    Text6.position(displayWidth/4,displayHeight+170);
    Text7 = createP("Formulae: Area = Base*Height/2");
    Text7.position(displayWidth/4,displayHeight+220);
    Text8 = createP("Perimeter = Sum of Three Sides");
    Text8.position(displayWidth/3,displayHeight+270);
    Text9 = createP("Hypotenuse = √(Base×Base+Height×Height)");
    Text9.position(displayWidth/3,displayHeight+320);
    Text1 = createP("");
    Text1.html("Area and Perimeter Calculator(Enter only value no unit)");
    Text1.position(displayWidth/4,displayHeight+400);
    Text2 = createP("");
    Text2.html("Enter Value of Base");
    Text2.position(displayWidth/4,displayHeight+450);
    base = createInput("");
    base.position(displayWidth/4,displayHeight+500);
    Text3 = createP("");
    Text3.html("Enter Value of Height");
    Text3.position(displayWidth/4,displayHeight+570);
    height1 = createInput("");
    height1.position(displayWidth/4,displayHeight+620);
    areaAns = createElement("h4");
    areaAns.position(displayWidth/4,displayHeight+670);
    perimeterAns = createElement("h4");
    perimeterAns.position(displayWidth/4,displayHeight+720);
    hypotenuseAns = createElement("h4");
    hypotenuseAns.position(displayWidth/4,displayHeight+770);
    console.log(areaAns);
    
    
    txt7 = createP("==> Isosceles Triangle");
    txt7.position(displayWidth/4,displayHeight*2+1000);
    txt8 = createP("==>These are triangles which have two equal sides.");
    txt8.position(displayWidth/4,displayHeight*2+1050);
    txt8 = createP("Formulae: Area = 1/2(√(a*a - b*b/4)*b)");
    txt8.position(displayWidth/4,displayHeight*2+1100);
    txt8 = createP("Perimeter = 2 * a + b");
    txt8.position(displayWidth/3.5,displayHeight*2+1150);
    txt9 = createP("(a=Equal Side,b=Other Side)");
    txt9.position(displayWidth/3,displayHeight*2+1200);
    txt1 = createP("");
    txt1.html("Area and Perimeter Calculator(Enter only value no unit)");
    txt1.position(displayWidth/4,displayHeight*2+1280);
    txt2 = createP("");
    txt2.html("Enter Value of Equal Side");
    txt2.position(displayWidth/4,displayHeight*2+1380);
    equalSideI = createInput("");
    equalSideI.position(displayWidth/4,displayHeight*2+1440);
    txt3 = createP("");
    txt3.html("Enter Value of Other Side");
    txt3.position(displayWidth/4,displayHeight*2+1500);
    otherSideI = createInput("");
    otherSideI.position(displayWidth/4,displayHeight*2+1550);
    IareaAns = createElement("h4");
    IareaAns.position(displayWidth/4,displayHeight*2+1630);
    IperimeterAns = createElement("h4");
    IperimeterAns.position(displayWidth/4,displayHeight*2+1680);

    text7 = createP("==> Equilateral Triangle");
    text7.position(displayWidth/4,displayHeight*2+120);
    text8 = createP("==>These are triangles which have all three sides equal.");
    text8.position(displayWidth/4,displayHeight*2+170);
    text8 = createP("Formulae: Area = √3/4 * side* side");
    text8.position(displayWidth/4,displayHeight*2+220);
    text8 = createP("Perimeter = 3 * Sides");
    text8.position(displayWidth/3,displayHeight*2+320);
    text1 = createP("");
    text1.html("Area and Perimeter Calculator(Enter only value no unit)");
    text1.position(displayWidth/4,displayHeight*2+400);
    text2 = createP("");
    text2.html("Enter Value of Side");
    text2.position(displayWidth/4,displayHeight*2+500);
    sideI = createInput("");
    sideI.position(displayWidth/4,displayHeight*2+580);
    text3 = createP("");
    originalRoot = createElement("h4");
    originalRoot.position(displayWidth/4,displayHeight*2+630);
    areaAns1 = createElement("h4");
    areaAns1.position(displayWidth/4,displayHeight*2+700);
    root = createElement("h4");
    root.position(displayWidth/4,displayHeight*2+770);
    areaAns2 = createElement("h4");
    areaAns2.position(displayWidth/4,displayHeight*2+820);
    perimeterAns1 = createElement("h4");
    perimeterAns1.position(displayWidth/4,displayHeight*2+900);

    Stext7 = createP("==> Scalene Triangle");
    Stext7.position(displayWidth/4,displayHeight*5);
    Stext8 = createP("==>These are triangles which have athree unequal sides.");
    Stext8.position(displayWidth/4,displayHeight*5+70);
    Stext11 = createP("Formulae: Area = √(s(s-a)(s-b)(s-c))");
    Stext11.position(displayWidth/4,displayHeight*5+140);
    Stext12 = createP("Perimeter = a + b +c");
    Stext12.position(displayWidth/4,displayHeight*5+200);
    Stext9 = createP("SemiPerimeter = (a + b +c)/2");
    Stext9.position(displayWidth/4,displayHeight*5+250);
    Stext10 = createP("where s = semiperimeter, a = first side, b = second side, c= third side");
    Stext10.position(displayWidth/3,displayHeight*5+300);
    Stext1 = createP("");
    Stext1.html("Area and Perimeter Calculator(Enter only value no unit)");
    Stext1.position(displayWidth/4,displayHeight*5+400);
    Stext2 = createP("");
    Stext2.html("Enter Value of First Side");
    Stext2.position(displayWidth/4,displayHeight*5+450);
    sideS1 = createInput("");
    sideS1.position(displayWidth/4,displayHeight*5+500);
    Stext12 = createP("");
    Stext12.html("Enter Value of Second Side");
    Stext12.position(displayWidth/4,displayHeight*5+580);
    sideS2 = createInput("");
    sideS2.position(displayWidth/4,displayHeight*5+630);
    Stext22 = createP("");
    Stext22.html("Enter Value of Third Side");
    Stext22.position(displayWidth/4,displayHeight*5+710);
    sideS3 = createInput("");
    sideS3.position(displayWidth/4,displayHeight*5+760);
    Stext3 = createP("");
    areaS1 = createElement("h4");
    areaS1.position(displayWidth/4,displayHeight*5+850);
    perimeterS1 = createElement("h4");
    perimeterS1.position(displayWidth/4,displayHeight*5+900);
    semiperimeterS1 = createElement("h4");
    semiperimeterS1.position(displayWidth/4,displayHeight*5+950);
}
function draw(){
    heightAns = height1.value();
    baseAns = base.value();
    hypotenuse = Math.sqrt(baseAns*baseAns + heightAns*heightAns);
    area = heightAns * baseAns/2;
    perimeter = 1*heightAns + 1*baseAns  + 1*hypotenuse;
    areaAns.html("Area: "+ area + " unit square");
    perimeterAns.html("Perimeter: "+ perimeter + " units");
    hypotenuseAns.html("Hypotenuse: "+ hypotenuse + " units");

    
    equalSide = equalSideI.value();
    otherSide = otherSideI.value();
    Iarea = (Math.sqrt(equalSide*equalSide-otherSide*otherSide/4)*otherSide)/2;
    Iperimeter= 2*equalSide + otherSide;
    IareaAns.html("Area: "+ Iarea + " unit square");
    IperimeterAns.html("Perimeter: "+ Iperimeter + " units");

    sideAns = sideI.value();
    area1 = sideAns*sideAns * Math.sqrt(3)/4;
    area2 = sideAns*sideAns/4;
    perimeter1 = 3*sideAns;
    areaAns1.html("Area: "+ area1 + " unit square");
    originalRoot.html("For original value of √3 upto 10 decimals.");
    root.html("For value with √3");
    areaAns2.html("Area: "+ area2 + "√3 unit square");
    perimeterAns1.html("Perimeter: "+ perimeter1 + " units");

    side1 = sideS1.value();
    side2 = sideS2.value();
    side3 = sideS3.value();
    semiperimeter= (1*side1 + 1*side2 + 1*side3)/2;
    areaAnswerS1 = Math.sqrt(semiperimeter*(semiperimeter-side1)*(semiperimeter-side2)*(semiperimeter-side3));
    perimeter1 = 1*side1 + 1*side2 + 1*side3;
    areaS1.html("Area: "+ areaAnswerS1 + " unit square");
    perimeterS1.html("Perimeter: "+ perimeter1 + " units");
    semiperimeterS1.html("Semi-Perimeter: "+ semiperimeter + " units");

}