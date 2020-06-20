function setup(){
    Text1 = createElement("h3");
    Text1.html("Area and Volume Calculator");
    Text1.position(displayWidth/2+100,100);
    Text2 = createP("");
    Text2.html("Enter Principal(In ₹)");
    Text2.position(displayWidth/2+100,175);
    principal1 = createInput("");
    principal1.position(displayWidth/2+200,270);
    Text3 = createP("");
    Text3.html("Enter Rate of Interest(In %)");
    Text3.position(displayWidth/2+100,345);
    rate  = createInput("");
    rate.position(displayWidth/2+200,410);
    Text4 = createP("");
    Text4.html("Enter Time (in years)");
    Text4.position(displayWidth/2+100,475);
    time = createInput("");
    time.position(displayWidth/2+200,550);
    InterestAns = createElement("h4");
    InterestAns.position(displayWidth/2,620);
    AmountAns = createElement("h4");
    AmountAns.position(displayWidth/2,670);
}
function draw(){
    principalAns = principal1.value();
    rateAns = rate.value();
    timeAns = time.value();
    Amount = 1*principalAns*(Math.pow((1+(rateAns/100)),timeAns));
    Interest = 1*Amount-1*principalAns;
    InterestAns.html("Compound Interest: ₹"+ Interest );
    AmountAns.html("Amount: ₹"+ Amount );

}