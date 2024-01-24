// singleton: when object is created using object literals, singleton is not created. But when is created using constructor, singleton is created.

// declaring a object
// topic-01: object literals
// const jsUser = {}; //empty object

//todo: declare a symbol variable. Use it as key in object and print the output.
//declare a Symbol variable
const mySym = Symbol('key1');

const jsUser = {
    //key value pair
    name: "Nusrat", 
    //key is considered as a string.
    "full name": "Nusrat Tanha",
    // declaring symbol variable as key
    [mySym] : 'myKey1',
    age: 24,
    email: 'nusrat@gmail.com',
    location: 'Mirpur,Dhaka,Bangladesh',
    isLoggedIn : false,
    lastLoginDays: ['Monday','Saturday'],

};

// accessing object values
// console.log(jsUser.email);
// console.log(jsUser["email"]);
// console.log(jsUser.full name); // not possible to access this js object using dot notation
// console.log(jsUser["full name"]); //imp: this is recommended
//accessing the symbol value
// console.log(jsUser[mySym]);

// changing values
jsUser.email = 'tanha@gmail.com';
// console.log(jsUser['email']);

// adding function to object and access
jsUser.greeting = function(){
    console.log('hello JavaScript User');
}
jsUser.greetingTwo = function(){
    console.log(`Hello JavaScript User, ${this.name}`);
}

// console.log(jsUser.greeting);
// console.log(jsUser.greeting()); // undefined: because the function did not return anything
jsUser.greeting();
jsUser.greetingTwo();




//topic-02: using constructor
// Object.create()
const newUser = new Object();
