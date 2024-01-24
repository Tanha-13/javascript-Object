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

// array of objects
const users = [
    {
        id: 1,
        email: 'tanha@gmail.com'
    },
    {
        id: 2,
        email: 'nusrat@gmail.com'
    },
    {
        id: 3,
        email: 'nusratanha@gmail.com'
    },

];
console.log(users[0].email);
