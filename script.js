console.log("script")

//var userName; //declaration of var, declaring space on the ram/
//userName= prompt("Enter your name"); //assign a value for the space on the ram/
//console.log(userName);


//---------as1-----//

//user enters a number//
var num1=Number(prompt("Enter a number"));
//user enters a second number//
var num2=Number(prompt("Enter second number"));
//present a menu: (addition, subtraction, multiplication, division)//
var option = prompt("Select 1) Addition or select 2) Subtraction or select 3) Multiplication or select 4) Division")
var result;

//do the calculation//
if(option==1){
    result=num1+num2;    
}
if(option==2){
    result=num1-num2;    
}
if(option==3){
    result=num1*num2;    
}
if(option==4){
    result=num1/num2;    
}
//display the result in the console
console.log(result);












