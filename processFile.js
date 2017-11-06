var fs        = require('fs');
var readline  = require('readline');
var logger    = fs.createWriteStream('log.txt', { 
                  flags: 'a' // 'a' means appending (old data will be preserved)
                });

var spawn     = require('child_process').spawn;
var py        = spawn('python', ['compute_input.py']);

module.exports = {


  tester: function(){

    py.stdin.write(JSON.stringify(data));
    
    py.stdout.on('data', function(data){
        dataString += data.toString();
    });

    py.stdout.on('end', function(){
        console.log('Sum of numbers = ', dataString);
    });

    py.stdin.end();
  }

/*
  processFile: function(inputFile) {
  
	 console.log('Running function');

      var instream    = fs.createReadStream(inputFile);
      var outstream   = new ( require('stream') )();
      var rl          = readline.createInterface(instream, outstream);
      var fluff       = [ "Message-ID:", 
                          "Date:", 
                          "From:", 
                          "To:", 
                          "Subject:", 
                          "Cc: ", 
                          "Mime-Version: 1.0", 
                          "Content-Type:", 
                          "Content-Transfer-Encoding:", 
                          "Bcc:", 
                          "X-"  ];
      var input;
      var found   = false;
      var arrayString = [];
      var num = 0;

      rl.on('line', function (line) {
  
      input = line;
  
      if(input.length >= 5) {

        for(var i = 0; i < fluff.length; i++) {
            if(input.indexOf(fluff[i]) === 0) {
              found = true;
              break;
            }
        }
          
      }
  
      //Long comment by Eric. The bug was that when you check the line against the array on for example element 0
      //the line would properly be skipped once, but once you checked it on element 1 it would pass the test
      //so it got printed. My solution is is to check the line against the entire array and
      //have a variable keep track if it ever was found. And if it was never found then you print it.

      // for lines 36-46(second if statement) 
      // the code above breaks each line of the message into words.
      // it put each word into an array called arrayString; 


      if(!found && input !== "") 
      {
          var splitter = input.split(" "); //split(/[ .:;?!~,`"&|()<>{}\[\]\r\n/\\]+/);
        
          for(var counter = 0; counter < splitter.length; counter++) 
          {
            arrayString[num] = splitter[counter];
            num++;
          }
      }

      // for adding stuff into the array
      // use the if else and maybe a counter.
      found = false;

    });
    // end of r1 open
    
    rl.on('close', function (line) {

      var dataString 	= '';
      var newArray = [];

  	  py.stdout.on('data', function(arrayString){    	
    		dataString += arrayString;
  	 });

  	py.stdout.on('end', function(){
    		console.log(dataString);
  	});

  	py.stdin.write(JSON.stringify(arrayString));

  	py.stdin.end();


    });
  }

  */
}