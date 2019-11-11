// #### Prototyping #####
// gives you the ability to add cool methods or properties to your objects and classes
// we can add special methods or properties to objects in classes

// this keyword refers to the whatever the thing calling it.
// thus, now we can have bunch of different users with different names
function User() {
    this.name = "";
    this.life = 100;
    this.giveLife = function giveLife(targetPlayer) {
        targetPlayer.life += 1;
        console.log(this.name + " gave 1 life to " + targetPlayer.name);
    }
}

var Shadhini = new User();
var Windy = new User();
Shadhini.name = "Shadhini";
Windy.name = "Windy";

Shadhini.giveLife(Windy);
console.log("Shadhini: " + Shadhini.life);
console.log("Windy: " + Windy.life);

// you can add functions to all objects
// prototypes used to add additional methods or functions onto this User class
// so now every object, instance of this User class has access to this new uppercut function
User.prototype.uppercut = function uppercut(targetPlayer) {
    targetPlayer.life -= 3;
    console.log(this.name + " just uppercutted " + targetPlayer.name);
};

Windy.uppercut(Shadhini);
console.log("Shadhini: " + Shadhini.life);
console.log("Windy: " + Windy.life);

// you can add properties to all objects
User.prototype.magic = 60;
console.log(Shadhini.magic);
console.log(Windy.magic);

// Why add functions and properties to classes later using prototypes
// while we can add them to classes at the begining?
//