//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/bind
//bind() -- creats new function and when call that new function  it gives the values of assigned aruguments of this key word

this.x=22; //this refers to global "window" object here in the browser
var module ={
	x:15,
	getx:function(){
		return this.x;
	}
};
console.log(module.getx()); // 15 
var moduleTwo = module.getx;

console.log(moduleTwo()); //22 he function gets invoked at the global scope

//create new function with the bind methid
var moduleThree = moduleTwo.bind(module);
 console.log(moduleThree()); //15



 //other example
 function list() {
  return Array.prototype.slice.call(arguments);
}

var list1 = list(1, 2, 3); // [1, 2, 3]

// Create a function with a preset leading argument
var leadingThirtysevenList = list.bind(null, 37);

var list2 = leadingThirtysevenList(); 
// [37]

var list3 = leadingThirtysevenList(1, 2, 3);
// [37, 1, 2, 3]


//call() -- method calls a function with a given this value and arguments provided individually.

var animals = [
  { species: 'Lion', name: 'King' },
  { species: 'Whale', name: 'Fail' }
];

for (var i = 0; i < animals.length; i++) {
  (function(i) {
    this.print = function() {
      console.log('#' + i + ' ' + this.species
                  + ': ' + this.name);
    }
    this.print();
  }).call(animals[i], i);
}

//other example call ()
function greet() {
  var reply = [this.person, 'Is An Awesome', this.role].join(' ');
  console.log(reply);
}

var i = {
  person: 'Douglas Crockford', role: 'Javascript Developer'
};

greet.call(i); // Douglas Crockford Is An Awesome Javascript Developer




//apply()--The apply() method calls a function with a given this value, and arguments provided as an array (or an array-like object).
function personContainer() {
  var person = {  
     name: "James Smith",
     hello: function() {
       console.log(this.name + " says hello " + arguments[1]);
     }
  }
  person.hello.apply(person, arguments);
}
personContainer("world", "mars"); // output: "James Smith says hello mars", note: arguments[0] = "world" , arguments[1] = "mars"                      