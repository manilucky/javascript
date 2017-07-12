//https://rainsoft.io/how-to-iterate-easily-over-object-properties-in-javascrip

// iterate over the object properties

// own and enumatred properties: by using Object.keys()

let x = {
	fname:"mike",
	lname:"stephen"
};
let y ={
	momName:"michel",
	dadNmae:"Rathod"
};
Object.setPrototypeOf(x,y);


console.log(Object.keys(x)); // [ 'fname', 'lname' ] --- this key only prints the own properties
console.log (x['momName']); // containd the properties inherited  from the y prprtypre object


//this can be acheieved more by Object.values() and Object.entries() 

console.log(Object.values(x)); // this gives the values of the properties  ['mike', 'stephen']
console.log(Object.entries(x)); // this gives the both keys and values [[fname:"mike" ],[lname:"stephen"]]



 // we can  access all the properties means  the properties of own , enumaatred and inherited properties in for..in loop  
 let simpleColors = {  
  colorA: 'white',
  colorB: 'black'
};
let natureColors = {  
  colorC: 'green',
  colorD: 'yellow'
};
Object.setPrototypeOf(natureColors, simpleColors);  

let enumerableKeys = [];
for (let key in natureColors) {
  enumerableKeys.push(key);
}
console.log(enumerableKeys); // => ['colorC', 'colorD', 'colorA', 'colorB']