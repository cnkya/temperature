//for(let i=10;i<=100;i++){
   // console.log(i)
//}



//function multiplicationTable(){

    //let x=prompt ('Enter a number');
   // let start=prompt("start point");
   // let end=prompt("end point"5)

   // document.write(`<h2> Multipication table for ${x}</h2>`)
   // for(let i=start;i<=end;i++){
        //console.log(i*5);
       // document.write(`<li> ${i} x ${x} = ${i*x} </li>`)
        
    //}
//}

// Exercise: Multiplication Table for X

// Use a for loop to generate and display the multiplication table for the number 5.
// The table should include values from 1 to 10.
//----------------------------------------------------
//Write a program that prints the numbers from 1 to 20. 

//But for multiples of 3, print "Fizz" instead of the number, and for the multiples of 5, print "Buzz". 

//For numbers that are multiples of both 3 and 5, print "FizzBuzz".

for(let i=1;i<=50;i++){
    //console.log(i)

    if(i%3==0 && i%5==0){
        console.log("FizzBuzz");
    }
    else if(i&5==0){
        console.log("Buzz");
    }else if(i%3==0){
        console.log("Fizz");
    }
    else{
        console.log(i);
    }
    

}