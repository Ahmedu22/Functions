// function = is block of code that perform specific task

// function declaration

// function greet (){
//     console.log('hello world')
// }
// greet();

``

function sayHello(name){
    console.log(`hello ${name}`);
}
sayHello("Ahmed");
sayHello("yussuf");

function add(x, y){
    return x + y;
   
}
 console.log(add(20, 10))
 
//  function experation

const greeting = function (user){
    console.log(`hello ${user}`)
};
greeting('how are you')



// JSON stands for Javascript Object Notation

const person = {
    name: "Ahmed Abdi",
    age: "25",
    email: "ahmedabdirahman4167@gmail.com",
    isProgrammer : "true",
    hoppies: ["resding", "training"],
    addrees : {
        city : "Nairobi",
        zipcode : "70100",
},
}


const jsonString = JSON.stringify(person);
console.log(jsonString);

const parse = JSON.parse(jsonString);
console.log(parse);
