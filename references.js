// In nodeJS everything is a reference
var Shadhini = {
    favFood: "ice cream",
    favMovie: "bumblebee"
};

// here you are not assigning a copy of object Shadhini to object Person
// you are just getting a reference to Shadhini with variable Person
var Person = Shadhini;
Person.favFood = "chicken";

console.log(Shadhini.favFood);