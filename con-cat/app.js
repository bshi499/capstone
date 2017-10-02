var express    = require("express"),
    app        = express(),
    mongoose   = require("mongoose"),
    bodyParser = require("body-parser");
    
mongoose.connect("mongodb://localhost/con_cat_test");
app.use(bodyParser.urlencoded({extended: true}));
//app.use(express.static("public"));
app.set("view engine", "ejs");

//SCHEMA Setup
var testdataSchema = new mongoose.Schema({
    name: String,
    //category: Boolean
});

var Testdata = mongoose.model("Testdata", testdataSchema);

app.get("/", function(req, res){
    //Get all data from DB
    Testdata.find({}, function(err, allData){
        if(err) {
            console.log(err);
        } else {
            res.render("landing", {testData: allData});
        }
    });
});

app.get("/new", function(req, res){
    res.render("new");
});

app.post("/", function(req, res){
    var bodyData = req.body.testdata;
    var testData = {name: bodyData};
    
    Testdata.create(testData, function(err, newItem){
        if(err) {
            console.log(err);
        } else {
            res.redirect("/");
        }
    })
})

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Server has started!");
})
