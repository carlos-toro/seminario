var http = require('http');
function createServ (req, resp){
    resp.writeHead(200, {"content-type":"text/html"});
    resp.write("<h1>hola muuuuuuuundo<h1/>")
    resp.end;
}
let server = http.createServer(createServ);
server.listen(200, "localhost");