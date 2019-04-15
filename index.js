const http = require ('http');
const url = require ('url');

const server = http.createServer(function(req, res){
    if (req.method == 'GET' && req.url == '/hello'){
        res.writeHead(200, {"Content-Type": "text/plain"});
        res.write('world');
        res.end();
    }
    else if (req.method == 'POST' && req.url == '/hello'){
        res.writeHead(200, {"Content-Type": "text/plain"});
        res.write('world created');
        res.end();
    }
    else if (req.method == 'PUT' && req.url == '/hello'){
        res.writeHead(200, {"Content-Type": "text/plain"});
        res.write('world updated');
        res.end();
    }
    else if (req.method == 'DELETE' && req.url == '/hello'){
        res.writeHead(200, {"Content-Type": "text/plain"});
        res.write('world deleted');
        res.end();
    }
    else{
        res.writeHead(200, {"Content-Type": "text/plain"});
        res.write('URL not found!');
        res.end();
    }
});
const PORT = 5000;
server.listen(PORT);
console.log(`Server started on ${PORT}`);