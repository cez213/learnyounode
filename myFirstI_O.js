//Write a program that uses a single synchronous filesystem operation to read and print th number of newlines (\n) it contains to the console (stdout), similar to running cat file | wc -l.

//Note: synchronous (or blocking) = traditional way of handling I/O, code will only continue once the event has been fully completed.

//Require the 'fs' module from the Node core library.
var fs = require('fs');

//The full path to the file to read will be provided as the first command-line argument
//Reads file and returns an object containing the complete contents of the 
//Convert contents to string, then splits the string at the new lines, and returns the length.

console.log(fs.readFileSync(process.argv[2]).toString().split('\n').length-1);



