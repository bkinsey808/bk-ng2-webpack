/// <reference path="../../typings/express/express.d.ts"/>
/// <reference path="../../typings/browser-sync/browser-sync.d.ts"/>

import express = require('express');
import path    = require('path');
import browserSync = require('browser-sync');

var app : express.Express = express();

app.use(express.static(__dirname + '/public'));

app.get('/api/nav', (req, res) => {
    res.send({
        data: [
            'Home',
            'About'
        ]
    });
});

var port: number = process.env.PORT || 3000;
var server = app.listen(port, () => {
    var listeningPort: number = server.address().port;
    browserSync({
      proxy: 'localhost:' + port,
      files: [__dirname + '/public/**/*.{js,css,html}']
    });
    console.log(`Yo!! The server is listening on port: ${listeningPort}`);
});
