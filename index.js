const http = require('http');

// Create server
const server = http.createServer((request, response) => {
    // request - from client (browser) to server
    console.log(request.url);

    // response - from server to client
    response.end('Hello browser!');
});

server.listen(3000);
