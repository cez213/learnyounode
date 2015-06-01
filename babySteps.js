var num = process.argv.slice(2);
var sum = 0;
for(var i = 0; i < num.length; i++){
	sum += Number(num[i]);
}
console.log(sum);