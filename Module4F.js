//Practical task module 4
const stringValue = "5";
const booleanValue = true;
const numberValue = 7;

//Perform addition of various types
const sumValues = function(parameter1, parameter2){
  console.log(parameter1 + parameter2)
}
//Perform multiplication of various types
const multiplyValues = function(parameter1, parameter2){
  console.log(parameter1 * parameter2)
}
//Divide different types
const divideValues = function(parameter1, parameter2){
  console.log(parameter1 / parameter2)
}
//Perform explict conversion
const explicitValue = function(parameter1){
  console.log(parameter1)
}

sumValues(stringValue, booleanValue);
sumValues(stringValue, numberValue);
sumValues(numberValue, booleanValue);

multiplyValues(stringValue, booleanValue);
multiplyValues(stringValue, numberValue);
multiplyValues(numberValue, booleanValue);

divideValues(stringValue, booleanValue);
divideValues(stringValue, numberValue);
divideValues(numberValue, booleanValue);

explicitValue(Number(booleanValue));
explicitValue(String(numberValue));
explicitValue(Boolean(stringValue));