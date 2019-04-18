//var num=document.getElementById("square-input")

function squareNumber(){
    var num=document.getElementById("square-input").value;
    var square=num**2;
    alert("The result of squaring the number"+num+"is"+square);
    console.log("The result of squaring the number",num,"is",square);
}

function halfNumber(){
    var num=document.getElementById("half-input").value;
    var half=num/2;
    alert("Half of"+num+"is"+half);
    console.log("Half of",num,"is",half);
    
}

function percentOf(){
    var num1=document.getElementById("percent1-input").value;
    var num2=document.getElementById("percent2-input").value;
    var percent=(num1/num2)*100;
    alert(num1+"is"+percent+"%"+"of"+num2);
    console.log(num1+"is",percent,"%"+"of",num2);
    
}

function areaOfCircle(){
   var R= document.getElementById("area-input").value;
   var area=3.14*(R**2);
   alert("The area for a circle with radius"+R+"is"+area);
   console.log("The area for a circle with radius",R,"is",area);
}

