var x= 'Hello';
var y= 'Timeout';
var z= 'js'
setTimeout(function () {
	console.log(y);
},1000);
console.log('your time starts '+x);


setInterval(function(){
	console.log(z);
}, 2000);
console.log(x);