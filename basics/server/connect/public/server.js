// #### Server Framework: Connect ####

// ## install "connect" module ##
// 1. Go to terminal
// 2. npm install connect
// >> now connect would be there in the directory /node_modules

var connect = require('connect');
var http = require('http');


// Connect Dispatcher
// a function that just takes the request and response arguments
// so whenever the user makes a request to your server it's gonna look to this right here
// to pretty much determine how it wants to handle that request
var app = connect(); // a request handle

function doFirst(request, response, next){
    console.log("Bacon");
    next();
}

function doSecond(request, response, next){
    console.log("Tuna");
    next();
}

// inside here is the code to handle the code to handle the user requests :: this is called middleware
// you can actually take these middleware and stack it on top of each other
// in other words, whenever you have a stack of middleware, these functions can get executed one by one; one after each other
app.use(doFirst);
app.use(doSecond);

// # next #
// next: whenever the user connects to our website, whenever they make a request to our server,
// what's gonna happen is it's gonna say "ok app, how do you want me to handle this"
// so it's go upto above app object and it says you obviously want me to use this function doFirst
// so it's gonna run first the doFirst function and then it's gonna look for a method called next()
// if the first function has this method next(), then it's gonna go to the next object in the stack; which is doSecond function
// (this would be used in e.g. to test whether user has permission to do this thing or that)
// you don't always have to have this next right here
// you can make some kind of logic to to avoid it


http.createServer(app).listen(8888);
// the param which need to pass above is the request handler
// in this case app is essentially a request handler
console.log("Server is now running ....");