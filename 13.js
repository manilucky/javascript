 //Create example for truthy and falsy with if statements
 //false: false,0, null, nan,"", undefined. reaming all are true

 var a =0;
 var b= 'truthy';
 var c = "";
 var d=1;
 var e = 15;
 if (a){
 	console.log(a); // nothing output becuse its falsy
 }
 if (b){
 	console.log(b);
 }
 if (c){
 	console.log(c); //falsy
 }
 if (d){
 	console.log(d);
 }
 if(e){
 	console.log(e);
 }