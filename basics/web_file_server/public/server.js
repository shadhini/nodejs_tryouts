var http = require('http');
var fs = require('fs');

// 404 response
function send404Respose(response) {
    response.writeHead(404, {'Content-Type': "text/plain"});
    response.write("Error 404: Page not found");
    response.end();
}

// handle a user request
function onRequest(request, response) {

    if ( request.method == 'GET' && request.url == '/' ){ // request for ome page
        response.writeHead(200, {'Content-Type': "text/html"});
        // we wanna send back the index.html in a stream
        // that's just for better performance and to ensure that we don't have any errors
        fs.createReadStream("./index.html").pipe(response); // create readable stream and pipe/write/feed it out (the stream) to the response object
    }else {
        send404Respose(response)
    }
}

http.createServer(onRequest).listen(8888);
console.log("Server is now running ....");