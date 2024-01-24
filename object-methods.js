
const mySym = Symbol('keys');
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
    greeting: function(){
        console.log(`Hello ${this.name}`);
    }

};


//topic: Object.freeze
jsUser.email = 'tanha@gmail.com';
// console.log(jsUser);
// Object.freeze();
jsUser.email = 'nusratanha@gmail.com';
// console.log(jsUser);

// topic: Object.keys
// console.log(Object.keys(jsUser));

// topic: Object.entries
// console.log(Object.entries(jsUser));
// with flat method of array
const allKeyValue = Object.entries(jsUser);
// console.log(allKeyValue.flat(Infinity));

//topic: Object.values
console.log(Object.values(jsUser));