
/**
 * info-01: objects are stored and copied 'by reference' whereas primitive values are stored and copied 'as a whole value'. 
 * info-02: const object variables can be modified. Actually the value of variable is constant, but the properties are free to change. If the whole value of the variable is tried to change, then will generate an error.
 */

//an object variable does not store the object itself, but its 'address in memory'/ a reference.


// the 'userName' key is stored in memory and the variable user has a reference to it. While performing any action, the js engine looks at what's the address and performs the operation on the actual object.
let user = {
    userName: 'Nusrat'
}

let admin = user; // admin variable is also holding the address in memory.
admin.userName = 'Tanha'; // this will change the actual object property.
user.userName; // output: Tanha


// a, b has the reference to one object. So they are same.
let a = {};
let b = a;
// console.log(a==b); // true
// console.log(a === b); // true

// c and d has the reference of two independent object address. So they are different.
let c = {};
let d = {};
// console.log(c==d); // false


// topic: cloning/coping
// way - 01
let clone1 = {...user};
clone1.age = 24;
// console.log(user,clone1);

// way - 02
let clone2 = {};
for(let key in user){
    clone2[key] = user[key];
}
clone2.age = 25;
// console.log(user,clone2);

//way - 03
// Object.assign
// syntax
// Object.assign(destination,sources)
//info: the first argument 'destination' is a target object. the second argument 'sources' is a list of source objects.
// copied to the existing object
let permission1 = { canView: true};
let permission2 = {canEdit: true};
// Object.assign(user, permission1,permission2);
// console.log(user);

// copied to a new variable
// const clone = Object.assign({}, user,permission1,permission2);
// console.log(user,clone);


// Nested Cloning
//problem:
const userProfile ={
    fullName: 'Nusrat',
    sizes: {
        height: 165,
        weight: 62
    }
}
let cloneProfile = Object.assign({},userProfile);
userProfile === cloneProfile; //false
userProfile.sizes === cloneProfile.sizes // true

//imp: solution- deep cloning / structured cloning. StructuredClone method clones the object with all nested properties.
cloneProfile = structuredClone(user);
cloneProfile.sizes === userProfile.sizes // false



