// #### Server Framework: Connect ####
var connect = require('connect');
var http = require('http');

// in addition to using plain old middleware , what you can do with connect is
// have an optional argument of a path
// say we have many paths (urls) in our application

var app = connect();

function profile(request, response){
    //load html css usually
    console.log("User requested profile");
}

function forum(request, response){
    console.log("User requested forum");
}

// whenever a user makes a request for the profile page, you're gonna call a function called profile
//
app.use('/profile', profile);
app.use('/forum', forum);

http.createServer(app).listen(8888);
console.log("Server is now running ....");