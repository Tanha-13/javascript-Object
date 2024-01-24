//
const tinderUser = new Object();
// console.log(tinderUser);  // output: {}

tinderUser.id = '201-021';
tinderUser.name = 'Tanha';
tinderUser.isLoggedIn = false;

// console.log(tinderUser);


// nested object
const regularUser ={
    email: 'some@gmail.com',
    fullName: {
        userFullName : {
            firstName: 'Nusrat',
            lastName: 'Tanha'
        }
    }
}
// accessing nested object values
// console.log(regularUser.fullName.userFullName.firstName);
// console.log(regularUser["fullName"]["userFullName"]["lastName"]);


// combining two object using spread operator
const obj1 = {
    1: 'a',
    2: 'b',
}
const obj2 = {
    3: 'a',
    4: 'b',
}

// const obj3 = {obj1,obj2};
// const obj3 = {...obj1,...obj2};

// combining objects using Object.assign
//info:all the copies are gone inside the target(the first value)
// const obj3 = Object.assign(obj1,obj2); // all the values are merged inside the obj1 object. that means obj3 and obj1 is same.
// console.log(obj3 == obj1); // same

//info: {} is target. all the copies are gone inside the target(the first value)
const obj3 = Object.assign({},obj1,obj2);
// console.log(obj3 == obj1); // false
// console.log(obj1);
// console.log(obj3);