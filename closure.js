// closure
//closure is the combinaation of function and  lexical environment within that the function was declared.

function makeFunc() {
  var name = 'Mozi';
  function displayName() {
    console.log(name);
  }
  return displayName();
}

var myFunc = makeFunc();
myFunc;


//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures