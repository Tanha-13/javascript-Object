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


