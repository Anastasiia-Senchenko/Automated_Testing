//Write a function for calculating the type of argument and type output to the console 

function calculatingType(myParamType) {
  if (typeof myParamType === 'number') {
    console.log("type of input is number");
  } else if (typeof myParamType === 'string') {
      console.log("type of input is string");
   } else if (typeof myParamType === 'boolean') {
    console.log("type of input is boolean");
 } else {
    console.log("other case");
   }
}

calculatingType(33);
calculatingType("It is a string");
calculatingType(true);
