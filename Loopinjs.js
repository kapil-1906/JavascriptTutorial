// for in loop : 

const listOfAnimals = ["dog", "cat", "tiger"];
    for(let index in listOfAnimals){
        console.log(index);
    }

// for of loop : 

for(let value of listOfAnimals){
    console.log(value);
}

const animal = ['rat', 'camel', 'rabbit'];
for(var i = 0; i<animal.length; i++){
    console.log(animal[i], i);
}

const employee = {name: "vishal", lastName: "sharma"}

for(let index in employee){
    console.log("object key : ", index);
}

for(let value of employee){
    console.log("object value : ", value);
}