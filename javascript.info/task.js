/**
 * Write the code, one line for each action:
01. Create an empty object user.
02. Add the property name with the value John.
03. Add the property surname with the value Smith.
04. Change the value of the name to Pete.
05. Remove the property name from the object.
 * 
 */
const user = {};
user.name = "John";
user.surName = "Smith";
user.name = "Pete";
// console.log(user);
delete user.name;
// console.log(user);

/* Write the function isEmpty(obj) which returns true if the object has no properties, false otherwise.
 */
let schedule = {};

function isEmpty(obj) {
  let count = 0;
  for (let key in obj) {
    count++;
  }
  if (count === 0) {
    return true;
  } else {
    return false;
  }
}
isEmpty(schedule); // true
schedule.time = "8.30";
schedule["8:30"] = "get up";
isEmpty(schedule); //

/**
 * We have an object storing salaries of our team:
 * let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
}
Write the code to sum all salaries and store in the variable sum. Should be 390 in the example above.If salaries is empty, then the result must be 0.
 */

let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
}
let sum = 0;
for(let salary in salaries){
    sum += salaries[salary];
}
console.log(sum);

/**
 * Create a function multiplyNumeric(obj) that multiplies all numeric property values of obj by 2.
 * 
 */
function multiplyNumeric(obj){
    for(let key in obj){
        if(typeof obj[key] === 'number'){
             obj[key] = obj[key] * 2;
        }
    }
    return obj;
}
let menu = {
    width: 200,
    height: 300,
    title: 'My menu'
}
console.log(multiplyNumeric(menu));