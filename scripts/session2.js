//get from the prompt the number
//function mult(num1,num2){
    //let num=prompt("Enter a number:");
    //console.log(num1*num2);
//}
//display on the console the multiplication

//mult(10,3)
//mult(8,2)
//mult(5,4)

//function taxCalculation(){
    
    //var product=prompt("Enter the product's name:");
    //var price=prompt("Enter the price:");
    //var qty=prompt("Enter the quantity:");
    //const taxes =1.08;

   // var subtotal=price*qty;
    //var total=subtotal*taxes;

    //console.log(product);
   // console.log(subtotal);
    //console.log(total);
///}


function addition(){
//the user will input 2 numbers
var num1=Number(prompt("Enter a number"));
var num2=Number(prompt("Enter a second number"));
//function add up them

//display the result on the console
console.log(num1+num2)
//r1: trigger the event using a button
//r2: create the flow diagram
}

function getGPA(){
    var name=prompt ("Enter the name:");
    var grade101 = Number(prompt("Enter the 101 grade:"));
    var grade102 = Number(prompt("Enter the 102 grade:"));

    var gpa=(grade101+grade102)/2;
    document.getElementById("studentList").innerHTML+=`
    <li> Name:  ${name} - GPA: ${gpa} </li>`;
}   
