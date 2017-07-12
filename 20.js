//toString() --- will convert the array to strings and separated with commas,
var cars = ["BMW","Benz", "Audi"]
console.log(cars.toString()); //BMW,Benz,Audi

//join () -- same as toString() but we can separate with the symbol in double quotes(" @") what we like to do.

var cars = ["BMW","Benz", "Audi"]
console.log(cars.join()); //BMW,Benz,Audi
console.log(cars.join("@"));//BMW@Benz@Audi

 // poping/pop() -- it removes an element from the array, that is also the last one of the array and it gives the output is the removed element of array
var cars = ["BMW","Benz", "Audi"]
console.log(cars.pop()); // Audi
console.log(cars); //[ 'BMW', 'Benz' ]

// pushing/push() -- to add a new element to the array, by default it adds at the end of the array element. the output gives the array lenghth with including new one not shows the elements
var cars = ["BMW","Benz", "Audi"]
console.log(cars.push("Volkswagen")); // 4 (before it was 3) 


 // shifting/shift() -- same like pop(), but shift removes the starting element and gives the output removed element
 var cars = ["BMW","Benz", "Audi"]
console.log(cars.shift());//BMW

//unshifting/unshift() --same  like push(), but adds at the starting of the array and shows the output as array lenghth including new element
var cars = ["BMW","Benz", "Audi"]
console.log(cars.unshift("Volkswagen")); // 4

//deleting/delet() -- it deletes the elements based on the index value and shows the 
var cars = ["BMW","Benz", "Audi"]
console.log(delete cars[1]);// true
console.log(cars); //[ 'BMW', , 'Audi' ]

//splicing/splice() -- (joins/adds)it adds and removes the elements on secifed index 
var cars = ["BMW","Benz", "Audi"]
console.log(cars.splice(1, 0, "Opel"));// 1st index -- indicates the where schould add the element, 2nd -- indicates that how many elements has to remove from the index what mentioned in 1st place
console.log(cars.splice(2, 1, "Opel"));

// sliceing/slice() -- (cut into slices)it changes into a new array  from the index where we mentioned
var cars = ["BMW","Benz", "Audi"]
console.log(cars.slice(1));
console.log(cars);