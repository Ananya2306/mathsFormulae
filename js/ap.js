function setup(){
    Text1 = createElement("h3");
    Text1.html("nth Term and Sum of n terms Calculator");
    Text1.position(displayWidth/2+100,100);
    Text2 = createP("");
    Text2.html("Enter the first term(a).");
    Text2.position(displayWidth/2+100,175);
    first1 = createInput("");
    first1.position(displayWidth/2+200,270);
    Text3 = createP("");
    Text3.html("Enter the common difference(d).");
    Text3.position(displayWidth/2+100,345);
    commonD  = createInput("");
    commonD.position(displayWidth/2+200,410);
    Text4 = createP("");
    Text4.html("Enter the number of terms(n).");
    Text4.position(displayWidth/2+100,475);
    n = createInput("");
    n.position(displayWidth/2+200,550);
    nthTermAns = createElement("h4");
    nthTermAns.position(displayWidth/2,620);
    SumAns = createElement("h4");
    SumAns.position(displayWidth/2,670);
}
function draw(){
    firstAns = first1.value();
    commonDAns = commonD.value();
    nAns = n.value();
    nthTerm = 1*firstAns+(1*(nAns-1)*commonDAns);
    Sum = (nAns*(1*firstAns+1*nthTerm))/2
    nthTermAns.html("nth term:"+ nthTerm );
    SumAns.html("Sum of n terms:"+ Sum );

}