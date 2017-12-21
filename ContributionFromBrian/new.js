var fs = require('fs');
var readMe = fs.readFileSync('Pre-processing example-Re_Board_of_Directors_Conference_Call_logistics.txt', 'utf8');
//console.log(readMe);
var string = readMe;

// dont use the code above this comment. use the code below
// I believe to merge, you need to have: "var string = myReader.result;" first 
// then use the code below. Not sure if I'm saying is correct. 


// get rid of the fluff and any headers
var newString = string.replace(/.+:+.{0,100}/g,"");

// result = true if string contains phone numbers
var result = /\d{3}-\d{3}-\d{4}/.test(string);


if(result == true)
{    // replace phone number with another string
	newString = newString.replace(/\d{3}-\d{3}-\d{4}/g,'[[Phone number]]');
}


// bool = true if string contains url(s)
var bool = /www.\w+.com|\w+.com/.test(newString);


// bool = true if the string contains any email addresses
bool = /.+\@.+\..+/.test(newString);

// removes any email addresses from the string
if(bool == true)
{
	newString = newString.replace(/.+\@.+\..+/g,'');
}

// this function replaces the url(s) in a string with 
// another string
function parse(input)
{	
	return input.replace(/www.\w+.com|\w+.com/g,'[[URL]]');
}
// if bool is true the url(s) are replaced
if(bool == true)
{
	newString = parse(newString);
}
// get rid of this long underscore if its in the string
var nonWord = "____________________";
newString = newString.replace(nonWord,'');

//newString = newString.replace(/\r\n/g,"");
//console.log("Final newString: " + newString);

// the following lines of code put the string(email) into an array
// then extracts the message of the email from the array and puts it
// into another array. Finally convert the array back to a string.

var str = newString.split("\n");
var counter = 0;
var message = "";
var array = [];
var newline = '\r'

for(var i = 0; i < str.length - 1; i++)
{
	
	if(str[i] == '\r')
	{	
		str.splice(i,1)
		i = 0;
	}
	
	//console.log(str[i]);
	
	else if (str[i] != '\r')
	{
		
		break;
	}
		
}


var counter = 0;

for (var string of str) {
	if(counter >= 2) 
	{
		break;
	} 
	
	if(string != '\r')
	{
		counter = 0;
		//console.log(string);
		array.push(string.replace('\r',""));
	}
	else {
		counter += 1;
	}
	 
}


//console.log(array.join().replace(",",""));

// removes any url(s)
// g is string that contains the message of the email.
var g = array.join().replace(",","");
g = parse(g);
console.log(g);
