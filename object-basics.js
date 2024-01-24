// singleton: when object is created using object literals, singleton is not created. But when is created using constructor, singleton is created.

// declaring a object
// topic-01: object literals
// const jsUser = {}; //empty object
const jsUser = {
    //key value pair
    name: "Nusrat", 
    age: 24,
    email: 'nusrat@gmail.com',
    location: 'Mirpur,Dhaka,Bangladesh',
    isLoggedIn : false,
    lastLoginDays: ['Monday','Saturday'],

};

//topic-02: using constructor
// Object.create()
const newUser = new Object();
console.log(newUser);
