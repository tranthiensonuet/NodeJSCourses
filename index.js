const http = require ('http');
const url = require ('url');

const port = process.env.PORT;
const host = process.env.HOST;

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
server.listen(port, host, function (err) {
   if (!err) console.log(`Server started ${host} on ${port}`);
   else console.log(err);
});