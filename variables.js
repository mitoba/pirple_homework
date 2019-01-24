
// Homework Assignment #2: Variables and Constants

// JavaScript variables are containers for storing data values.  In the following example x and y represent variables: 

var x = "school"
let number1 = 3
const number2 = 4

// In ES6 variables are declared with the word var, but var had a few drawbacks, was of them was hosting. Hosting means that the JavaScript engine will treat all variable declarations as if they are declared at the top of the functional scope (if declared inside a function) or global scope (if declared outside the function). 
// Example of hostig:

Console.log(number)
//Result: undefine
var number = 33
Console.log(number)
//Result will be 33

// Other issue with var is that is very easy to create global variables and global variables are not a good coding practice. 
// Const and let were created in ES6 and their advantage is that they have block scope, they are actually called Block level declarations. The difference between then is that let can be re assigned values and const not. Place your let declarations at the top in a block so they’ll be available within that entire block.

function getMoney(condition) {
// money doesn't exist here
// console.log(money); => ReferenceError: money is not defined
if (condition) {
        let money = 44;
        // some other code
        return money;
    } else {
        // money doesn't exist here as well
        return false;
    }
}

// For const it has to be initialized when is declared

//valid
Const friend  = “right”
// invalid
Const enemy;

// Note: Also is important to mention that arrays and objects can be modified



