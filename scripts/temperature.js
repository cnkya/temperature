//create flow chart-done
//create a var called temperature that stores a temp in Celsius
//convert the temp to Fahrenheit using the formula: F=(Celsius* 9/5)+32
//Display the converted tem in console

//Create a function called convertTemperature//
//Use an if statement to check the scale parameter. If it is "C", convert the temperature to Fahrenheit using the formula F=(celsius* 9/5) +32.
//If it is "F", convert the temp to Celsius using the formula: c = (Fahrenheit - 32)* 5/9
//display the converted temperature on the HTML

//Create a function called convertTemperatureRange that gets from the prompt: startValue (a number), endValue (a number), and scale (a string containing either "C" for Celsius or "F" for Fahrenheit). 
//Inside the function, use a for loop to iterate through the temperatures from startValue to endValue (inclusive). 
//For each temperature, use an if statement to check the scale parameter. 
//If it is "C", convert the temperature to Fahrenheit using the formula: Fahrenheit = (Celsius * 9/5) + 32. 
//If it is "F", convert the temperature to Celsius using the formula: Celsius = (Fahrenheit - 32) * 5/9.
//Display each converted temperature in the loop. 
//Outside the function, prompt the user to enter a starting temperature, an ending temperature, and a scale (either "C" or "F"). Call the convertTemperatureRange function with the user's inputs.
//addEventListener("click",convertTemperatureRange(startv, endv, scale));

function convertTemperatureRange() {
    let startv = Number (prompt ("Enter in starting temperature"));
    let endv = Number (prompt ("Enter in ending temperature"));
    let scale = prompt("Select c if you wish to convert celsius to fahrenheit or Select f if you wish to convert fahrenheit to celsius");

    for(let i=startv;i<=endv;i++){
    
        if(scale=="c"){
         let c = (i * 9/5)+32;
            document.write(`<li> (${i} * ${9/5}) + ${32} = ${c}; </li>`);
        
    }else if(scale=="f"){
        let f = (i - 32)*5/9;           
            document.write(`<li> ${i} - ${32} * ${9/5}= ${f} </li>`);
    
    }
    
}
}






