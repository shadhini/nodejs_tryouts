// #### "this" keyword ####
// it refers to the thing that called it
var Shadhini = {
    printFirstName: function () {
        console.log("My name is Shadhini");
        console.log(this === Shadhini);
    }
};

// what's calling printFirstName() is Shadhini
// thus this == Shadhini
Shadhini.printFirstName();

// The default calling context is global
// If we build a function and it doesn't belong to any object its global
function doSomethingWorthless() {
    console.log("\n I am worthless");
    console.log(this === global);
}

doSomethingWorthless();