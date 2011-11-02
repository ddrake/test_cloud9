require("http").createServer(function(req, res) {
    res.writeHead(200);
    res.end("Hello World");
}).listen(process.env.PORT);

console.log("http://test_cloud9.dowdrake.c9.io");
