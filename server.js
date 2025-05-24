const http = require("http");
const app = require("./app");

const port = process.env.PORT || 8000;
const server = http.createServer(app);

app.listen(port)
console.log("server running on port " + port);


module.exports = server;