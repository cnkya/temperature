let petSaloon={
    name:"Pet Saloon",
    phone:"765-0988",
    hours:{
        open:"9am",
        close:"4pm",
},

pets:[
    {name: "Stuffy",
    age: 99,
    gender: "Female",
    service: "Grooming",}


],
}
console.log(petSaloon.pets[1].name);

function displayNames(){}//use a loop
function countPets(){
    console.log(petSaloon.pets.lenth);
}