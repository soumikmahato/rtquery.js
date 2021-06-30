var express = require('express');
var app = express();

var port = 7777;

app.use(express.static("./public"));

// Our first route
app.get('/', function (req, res) {
    res.sendFile('./index.html');
});

// Listen to port 5000
app.listen(port, function () {
    console.log(`Server is started on ${port}!`);
});