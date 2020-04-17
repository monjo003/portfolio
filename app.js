const express = require("express");
const bodyParser = require("body-parser");


const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: true }));


app.use(express.static("public"));


app.get("/", function(req, res) {
    res.render(__dirname+'/views/index');
});


let port = process.env.PORT;
if  (port == null || port == ""){
    port = 2000;
}

app.listen(port, function() {
  console.log("Server stated succesfully");
});
