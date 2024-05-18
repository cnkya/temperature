function practice (){
    let num1=99;
    let num2=99;
    if(num1>num2){
        console.log("The num1 is greater than num2");
    }else if(num1<num2){
        console.log("The num2 is greater than num1");
    }else{
    console.log("The values are the same.");
}

}

// Challenge: Driving License

// 1. Prompt the user to enter their age.
// 2. Use an if-else statement to determine if the person can get a driving license.
// 3. If the age is 18 or older, print "Congratulations! You can get your driving license."
// 4. If the age is less than 18, print "Sorry, you are too young to get a driving license."

function getDriveLicense(){
    let age=(prompt("Enter Age"))
        
    if(age>18){
        console.log("Congratualtions! You can get your driving license.");

    }else{
        console.log("Sorry, you are too young to get a driving license");
    }

} 

// Exercise: Guess the Number Game

// 1. Generate a random number between 1 and 10 (you can use Math.random() and Math.floor()).
// 2. Ask the user to guess the number. (prompt)
// 3. Use an if-else statement to check if the user's guess is correct.
// 4. If the guess is correct, print "Congratulations! You guessed the number."
// 5. If the guess is incorrect, print "Sorry, that's not correct. The number was [generated number]".

function guesstheNumber(){
    let randomNumber=Math.floor(Math.random()*10)+1;
    let guess= prompt("Guess number between 1 and 10");

    if(guess==randomNumber){
        document.getElementById("results").innerHTML="Congratulations! You guessed the number!";
        console.log("Congratulations! You guessed the number.");

    }else{
        document.getElementById("results").innerHTML="Sorry, that's not correct. The number was" + randomNumber;
        console.log("Sorry, that's not correct. The number was" + randomNumber);
    }
        
}

//DB simulation
let userName="Christina";
let password="jump";
//create a login function

function login(){
    let unameInput=prompt("Enter user name")
    let upassInput=prompt ("Enter user password")

    if(unameInput===userName && upassInput===password){
        
        console.log("Welcome " + userName);

    }else{
        console.log("Invalid")
    }
    }

    

//get the username and pass from the user