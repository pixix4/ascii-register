var express = require('express');
var path = require('path');
var fs = require('fs');

var app = express();

app.use(require('node-sass-middleware')({
    src: path.join(__dirname, '../src/main/resources/stylesheets'),
    dest: path.join(__dirname, "website/stylesheets"),
    prefix: "/stylesheets",
    indentedSyntax: false,
    sourceMap: false
}));

app.get('/', function (req, res) {
    fs.readFile(path.join(__dirname, 'website/index.html'), 'utf8', function (err, data) {
        if (err) {
            res.status(404);
            res.send("Not found!")
        } else {

            var theme = "style";

            if (req.headers.cookie && req.headers.cookie.indexOf("dark") >= 0) {
                theme = "dark";
            }

            res.status(200);
            res.send(data.replace(
                "/stylesheets/style.css",
                "/stylesheets/" + theme + ".css"
            ))
        }
    });
    //res.sendFile(path.join(__dirname, 'website/index.html'));
});

app.use('', express.static(path.join(__dirname, 'website')));

app.listen(8080, function () {
    console.log('ascii-register is available on http://localhost:8080!');
});