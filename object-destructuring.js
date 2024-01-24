const course = {
    courseName: 'JavaScript',
    price: "1000",
    courseInstructor: 'Hitesh'
}
//destructuring
const {courseName,price} = course;
const {courseInstructor: instructor} = course;
console.log(instructor);


//API: JSON(JavaScript Object Notation) and XML
const jsonDataFormat = 
{
    "name":"nusrat",
    "courseName":"JavaScript",
    "price":"free"

}
// data in JSON file can be objects and array of objects.
[
    {},
    {},
    {}
]