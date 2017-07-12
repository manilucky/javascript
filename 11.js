//Demonstrate variable hoisting and function hoisting with an example
//Hoistig is the behaviour of moving declaretions to the top of current scope, and js hoists only declarations, not the intializers.


//Variable hoisting

var x ="car"; // var declares with the 'x' and initilized with the 'car'
 console.log (x); // car output

 var y;  // var declares with y but not initialized 
 console.log(y); // undefined becuase of hoisting variable
 y='vbn'; // initialized but after consoleing
console.log(z); // refernce error because its not defined




// function hoisting --- 
//in functions the hoisting is different, the function declares once, it can be used when the compile time eventhough it can be intialized later.

 function animalName(name){
 	console.log('animalaName: '+name);
 }
  animalName("cow"); // here i am intialized the function after the compile but it gives result "cow"
 
  animalType("Herbivor");
 function animalType(type){
 	console.log('animalType: '+type);
 	} // here I am intialized and declares before the compile so got the result // herbivors
 
