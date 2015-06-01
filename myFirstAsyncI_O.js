//Asynchronous file system to read file and print number of new lines it contains.
fs = require('fs');

fs.readFile(process.argv[2], function(err, data){
	console.log(data.toString().split('\n').length-1);
});