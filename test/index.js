var express = require('express');
var app = express();

var port = 7777;

app.use(express.static("./public"));
app.use(require("./router/router"));
// Our first route
app.get('/', function (req, res) {
    res.sendFile('.public/index.html');
});

// Listen to port 5000
app.listen(port, function () {
    console.log(`Server is started on ${port}!`);
});