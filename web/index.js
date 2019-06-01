var express = require('express');
var path = require('path');

var app = express();

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, 'website/index.html'));
});

app.use('', express.static(path.join(__dirname, 'website')));
app.use('/src/main', express.static(path.join(__dirname, '../src/main')));

app.listen(8000, function () {
    console.log('ascii-register is available on http://localhost:8000!');
});