/*********************************************************************************
*  WEB322 – Assignment1
*  I declare that this assignment is my own work in accordance with Seneca  Academic Policy.  
*  No part of this assignment has been copied manually or electronically from any other source
*  (including web sites) or distributed to other students.
* 
*  Name: __Manav__ Student ID: _____153341219_________ Date: ____17/09/2022____________
*
*  Online (Cyclic) URL: __https://drab-erin-nematode-wig.cyclic.app/__
*
********************************************************************************/ 

var HTTP_PORT = process.env.PORT || 8080;
var express = require("express");
var app = express();

// setup a 'route' to listen on the default url path
app.get("/", (req, res) => {
    res.send("Manav-153341219");
});

// setup http server to listen on HTTP_PORT
app.listen(HTTP_PORT);