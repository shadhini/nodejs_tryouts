var http = require('http');
// whenever we start this program it's gonna be listening for traffic or listening for users to request through this port


function onRequest(request, response){
    console.log("A user made a request" + request.url);
    // this (above) is printed twice like a double request when the page is loaded
    // e.g.: A user made a request/
    //     : A user made a request/favicon.ico
    // reason: whenever user try to connect to your server, what your browser does is
    // it first sends a request for whatever page they are looking for (in this case home page)
    // and also make another request behind the scene for the favicon
    response.writeHead(200, {'Context-Type': "text/plain"});
    response.write("Here is some data");
    response.end();
    // 200 - success
    // 404 - can't find what you requested
}

// the only param to pass this function is requestHandler: it is the code you wanna run whenever user tries to connect to your server
// also when users trying to connect to your server, your server has to be listening for a request
http.createServer(onRequest).listen(8888);
console.log("Server is now running....");