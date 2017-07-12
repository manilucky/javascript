//Demonstrate the usage of == and === operators with few examples

// == Checks if the values of two operands are equal or not, if yes then condition becomes true.


var a=5;
var b= "Jnit";
var c= "5";
var d = 4;
var e = "syntech";
var B="jnit";
var f = 4;
console.log(a==b);// false
console.log(a==c);//true beacuse it compares the values not the type of data and performs the realtion.
console.log(a==d);// false
console.log(b==e);//false
console.log(b==B);// false

console.log(a===b);// false
console.log(a===c);//false
console.log(a===d);// false
console.log(b===e);//false
console.log(b===B);// false
console.log(c===b);// false
console.log(d===f);//true // both the datatypes of the operators same
