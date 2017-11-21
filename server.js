var express = require("express");
var bodyParser = require("body-parser");
var mongodb = require("mongodb");
var ObjectID = mongodb.ObjectID;

var DOCUMENTS_COLLECTION = "documents";

var child_proc = require("child_process");
var circJSON = require("circular-json");

var app = express();
app.use(bodyParser.json());

// Create link to Angular build directory
var distDir = __dirname + "/dist/";
app.use(express.static(distDir));

// Create a database variable outside of the database connection callback to reuse the connection pool in your app.
var db;

// Connect to the database before starting the application server.
mongodb.MongoClient.connect(process.env.MONGODB_URI, function (err, database) {
  if (err) {
    console.log(err);
    process.exit(1);
  }

  // Save database object from the callback for reuse.
  db = database;
  console.log("Database connection ready");

  // Initialize the app.
  var server = app.listen(process.env.PORT || 8080, function () {
    var port = server.address().port;
    console.log("App now running on port", port);
  });
});

// DOCUMENTS API ROUTES BELOW

// Generic error handler used by all endpoints.
function handleError(res, reason, message, code) {
  console.log("ERROR: " + reason);
  res.status(code || 500).json({"error": message});
}

/*  "/api/documents"
 *    GET: finds all documents
 *    POST: creates a new document
 */

app.get("/api/documents", function(req, res) {
  db.collection(DOCUMENTS_COLLECTION).find({}).toArray(function(err, docs) {
    if (err) {
      handleError(res, err.message, "Failed to get documents.");
    } else {
      res.status(200).json(docs);
    }
  });
});

app.post("/api/documents", function(req, res) {
  var newDocument = req.body;
  newDocument.createDate = new Date();

  if (!req.body.name) {
    handleError(res, "Invalid user input", "Must provide a name.", 400);
  }

  db.collection(DOCUMENTS_COLLECTION).insertOne(newDocument, function(err, doc) {
    if (err) {
      handleError(res, err.message, "Failed to create new document.");
    } else {
      res.status(201).json(doc.ops[0]);
    }
  });
});

/*  "/api/documents/:id"
 *    GET: find document by id
 *    PUT: update document by id
 *    DELETE: deletes document by id
 */

app.get("/api/documents/:id", function(req, res) {
  db.collection(DOCUMENTS_COLLECTION).findOne({ _id: new ObjectID(req.params.id) }, function(err, doc) {
    if (err) {
      handleError(res, err.message, "Failed to get document");
    } else {
      res.status(200).json(doc);
    }
  });
});

app.put("/api/documents/:id", function(req, res) {
  var updateDoc = req.body;
  delete updateDoc._id;

  db.collection(DOCUMENTS_COLLECTION).updateOne({_id: new ObjectID(req.params.id)}, updateDoc, function(err, doc) {
    if (err) {
      handleError(res, err.message, "Failed to update document");
    } else {
      updateDoc._id = req.params.id;
      res.status(200).json(updateDoc);
    }
  });
});

app.delete("/api/documents/:id", function(req, res) {
  db.collection(DOCUMENTS_COLLECTION).deleteOne({_id: new ObjectID(req.params.id)}, function(err, result) {
    if (err) {
      handleError(res, err.message, "Failed to delete document");
    } else {
      res.status(200).json(req.params.id);
    }
  });
});




/*
    /api/uploads/
    
    - receives the file string from the upload component
      to be converted into vector
*/

/*
    /api/uploads/
    - receives the file string from the upload component
      to be converted into vector
*/

app.post("/api/uploads/", function(req, res) {

  var fileText = req.body.text;
  var finalOutput = '';
  
  // to convert input into array for testing
  // remove later when needed
  var arr = [];
  var temp = '';
  var num = 0;
    
  for(var i = 0; i <= fileText.length; i++)
  {
      if(fileText[i] != ' ' && i != fileText.length)
      {
        temp += fileText[i];
      }
      else
      {
        arr[num] = temp;
        num++;
        temp = '';
      }
  }
  // end block


  // python communication

  var spawn = child_proc.spawn;
  var py    = spawn('python', ['email2vector.py']);

  py.stdout.on('data', function(data){
    finalOutput += data.toString();
  });

  py.stdout.on('end', function(){
    // console.log("Output ", finalOutput);
    res.send(circJSON.stringify(finalOutput));
  });

  py.stdin.write(JSON.stringify(arr));
  py.stdin.end();


  py.on('exit', function (code, signal) {
    console.log("child process exited with code " + code + " and signal " + signal);
  });
});


// for updating all unconverted documents
// slightly modified from uploads
app.post("/api/updateAll/", function(req, res) {

  var fileText = req.body.text;
  var finalOutput = '';
  
  // to convert input into array for testing
  // remove later when needed
  var arr = [];
  var temp = '';
  var num = 0;
    
  for(var i = 0; i <= fileText.length; i++)
  {
      if(fileText[i] != ' ' && i != fileText.length)
      {
        temp += fileText[i];
      }
      else
      {
        arr[num] = temp;
        num++;
        temp = '';
      }
  }
  // end block


  // python communication

  var spawn = child_proc.spawn;
  var py    = spawn('python', ['email2vector.py']);

  py.stdout.on('data', function(data){
    finalOutput += data.toString();
  });

  py.stdout.on('end', function(){
    // console.log("Output ", finalOutput);
    var returnBody = {text: finalOutput, idx: req.body.num};
    res.send(circJSON.stringify(returnBody));
  });

  py.stdin.write(JSON.stringify(arr));
  py.stdin.end();


  py.on('exit', function (code, signal) {
    console.log("child process exited with code " + code + " and signal " + signal);
  });
});


// app.get('*', function(req, res){
//   res.send('what???', 404);
// });

// app.get('*', function(req, res){
//   res.sendFile(path.resolve('app/index.html'));
// });
// app.get('*', function (req, res, next) {
//   res.sendFile('dist/index.html', { root: __dirname });
// });

// Handle 404
// app.use(function(req, res) {
app.use(function(req, res, next) {
  // res.send('404: Page not Found', 404);
  res.sendFile('dist/index.html', { root: __dirname });
});
// Handle 500
// app.use(function(error, req, res, next) {
//   // res.send('500: Internal Server Error', 500);
//   res.sendFile('dist/index.html', { root: __dirname });
// });
