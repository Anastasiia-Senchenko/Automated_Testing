// In a try catch construction, wrap the code: console.log (a), let a = 3. And display an error - ‘let must be declared’ before use. When running 1/0, the error 'cannot be divided by zero'j

try {
  //const a = 3;
  console.log(a);
  let a = 3;
  let b = 5;
  let c = 0;
  if (c === 0) {
throw new Error('Cannot be divided by zero')
  }
  } catch(error) {
      console.log("Let must be declared");
  }



