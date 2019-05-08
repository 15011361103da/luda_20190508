let http = require("http");
let server = http.createServer(function (req,res) {
  console.log(req);
  res.end("edn");
})
server.listen(8088,"127.0.0.1");
console.log("server is running at 127.0.0.1:8088");
