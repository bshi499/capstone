var fs = require('fs');
var readMe = fs.readFileSync('Pre-processing example-Re_Board_of_Directors_Conference_Call_logistics.txt', 'utf8');
//console.log(readMe);
var string = readMe;

// get rid of the fluff and any headers
var newString = string.replace(/.+:+.{0,100}/g,"");

// result = true if string contains phone numbers
var result = /\d{3}-\d{3}-\d{4}/.test(string);
console.log("result: " + result);

if(result == true)
{    // replace phone number with another string
	newString = newString.replace(/\d{3}-\d{3}-\d{4}/g,'[[Phone number]]');
}
console.log('\n');
console.log(newString);

// bool = true if string contains url(s)
var bool = /www.\w+.com|\w+.com/.test(newString);
console.log("bool: " + bool);
console.log('\n');

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

var nonWord = "____________________";
newString = newString.replace(nonWord,'');


newString = newString.replace(/\n|\r{1,3}/g,"");
console.log("Final newString: " + newString);
