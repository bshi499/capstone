//Initial setup for dependencies
var express    = require("express"),
    app        = express(),
    mongoose   = require("mongoose"),
    bodyParser = require("body-parser");

//Connect to mongoDB database
mongoose.connect("mongodb://localhost/con_cat_test");
//More setup body-parser
app.use(bodyParser.urlencoded({extended: true}));
//Tell express to look in the /public file path
app.use(express.static("public"));
//Tell express to assume all files are .ejs at default
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

//render /views/new.ejs
app.get("/new", function(req, res){
    res.render("new");
});

//Add new data to landing page
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

//Port to listen to. Requests C9's PORT and IP.
app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Server has started!");
})
