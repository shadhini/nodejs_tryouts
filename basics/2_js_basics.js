// #### JS Basics ####

// ## Objects ##
var person = {
    firstname: "Shadhini",
    lastname: "Jayatilake",
    age: 25
};
console.log(person);

// ## Functions ##

function addNumber(a, b) {
    return a + b ;
}
console.log(addNumber(7,3));

// functions without a return statement returns undefined
function doNohing() {
}
console.log(doNohing());

// # Anonymous Functions #
// here we don't need a name for the function
// we can assign these functions to variables
// whenever we have a function stored in a variable, we can actually use this variables and pass them to other functions
var printBacon = function () {
    console.log("Bacon is healthy. ");
};
printBacon();

// call printBacon in 5 seconds
setTimeout(printBacon, 5000);