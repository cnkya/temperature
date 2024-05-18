//create flow chart-done
 //create a var called temperature that stores a temp in Celsius
 //convert the temp to Fahrenheit using the formula: F=(Celsius* 9/5)+32
 //Display the converted tem in console

function convertTemperature() {
    
    let temperature = Number(prompt ("Enter in temperature"));
    let scale = prompt("Select c to convert to celsius or Select f to convert to fahrenheit");
    
    //console.log(temperature);
    //console.log(scale);
    
    
    if(scale=="c"){
        let c = (temperature - 32)*5/9;
        document.getElementById("results").innerHTML= "Answer in Celsius is: " + c;
        //console.log(c);
    }else if(scale=="f"){
        let f = (temperature * 9/5)+32;           
        document.getElementById("results").innerHTML= "Answer in Fahrenheit is: " + f;
        //console.log(f);
    }
}


//Create a function called convertTemperature//
//Use an if statement to check the scale parameter. If it is "C", convert the temperature to Fahrenheit using the formula F=(celsius* 9/5) +32.
//If it is "F", convert the temp to Celsius using the formula: c = (Fahrenheit - 32)* 5/9
//display the converted temperature on the HTML





