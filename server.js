var express = require("express");
var app = express();

app.use(function(req, res, next){
    if(req.headers['x-forwarded-proto'] === 'http'){
        next();
    } else {
        res.redirect('http://' + req.hostname + req.url);
    }
});

app.use(express.static('public'));

//starting the server
const PORT = process.env.PORT || 3000;

app.listen(PORT, process.env.IP, function(){
   console.log("Server started on port: " + PORT); 
});
