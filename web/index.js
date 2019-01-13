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

app.use('', express.static(path.join(__dirname, 'website')));

app.listen(8080, function () {
    console.log('ascii-register is available on http://localhost:8080!');
});
