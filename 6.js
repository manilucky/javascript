//Add a function to the constructor function on this keyword
 function fruit(){
 	this.mango="Sweet"; 
 }
 var orange = new fruit();
 console.log(orange.mango);

 function fruit2(){
 	this.mango ="Sweet"
 	return{mango:"Sour"};
 }
 orange = new fruit2();
 console.log(orange.mango); 