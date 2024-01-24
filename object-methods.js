//topic: Object.freeze
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

};
jsUser.email = 'tanha@gmail.com';
console.log(jsUser);
Object.freeze();
jsUser.email = 'nusratanha@gmail.com';
console.log(jsUser);