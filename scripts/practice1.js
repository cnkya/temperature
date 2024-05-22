var globalVariable = "I'm in global scope";

function myFunction(){
    var localVariable = "I'm in local scope"
    //This function can access globalVariable
    console.log(globalVariable);
    console.log(localVariable)
}


myFunction();
//Accessing local Variable her would result in an error

if(true){
    //console.log(localVariable);
    let blockVariable="I am block variable";
    console.log(globalVariable);
    console.log(blockVariable);

}

//object literal

let student1={
    name: "Josh",
    email: "josh@gamil.com",
    grade101: 3.5,
    grade102: 3.9,
}

let student2={
    name: "Shelby",
    email: "Shelby@gamil.com",
    grade101: 3.5,
    grade102: 3.9,

}
console.log()
    let student3={
        name: "Chris",
        email: "Chris@gamil.com",
        grade101: 3.5,
        grade102: 3.9,
    }
console.log(student1, student2, student3);

    //Arrays are square braces []
    let myArray=[10, false, "Chris", student3]
    console.log(myArray[2]);

    console.log(petSalon.pets[1].name);