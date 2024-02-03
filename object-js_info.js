//info: Object can be created with curly braces{} with an optional list of properties. A property is a key:value pair where key is the property name and value can be anything(number,string,boolean,function etc).

//info: Properties are separated using comma. This is called a trailing or hanging comma.
const user = {
    userName: 'Nusrat', // Property (key is userName and stored value is Nusrat)
    age: 24, // Property (key is age and stored value is 24)
    //multiword property
    "likes music": true, //multiword property name must be quoted.

    //imp: special properties. This property values are not accessible using dot notation. Square brackets are used to access them.
    1: 'one',
    $: 'dollar',
    _: 'underScore',
}

//info: Property values can accessible using dot notation. Dot notation is used to access object properties with valid identifier names and identifier cannot start with numbers. 

user.userName;
user.age;
user.$;
user._;

//info: a new property can be created using dot notation
user.isAdmin = true;
// console.log(user);

//info: delete operator is used to remove any property
delete user.isAdmin;
// console.log(user);

//imp: for multi word properties and invalid identifiers, dot notation does not work. Square Bracket notation is used to access them. When square bracket notation is used, the expression inside the brackets is treated as a string.
//error: console.log(user.likes music); //SyntaxError
//error: console.log(user.1); // SyntaxError

//info: user[1] is equivalent to user['1'].
console.log(user[1]);
// console.log(user["$"]);
// console.log(user["_"]);

//info: for keys like '$' and '_', you need to use quotes to treat them as strings.
//error:console.log(user[_]); // ReferenceError: _ is note defined
//error:console.log(user[$]); // ReferenceError: $ is note defined

// storing the key into a variable and access the value using square bracket notation.
let key = 'userName';
console.log(user[key]);

