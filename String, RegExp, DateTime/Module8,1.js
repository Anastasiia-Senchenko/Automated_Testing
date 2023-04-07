//Given the string 'ahb acb aeb aeeb adcb axeb'. Write a regular expression that matches the strings ahb, acb, aeb by pattern: letter 'a', any character, letter 'b'

const string = "ahb acb aeb aeeb adcb axeb";

const regexp = /a.b/g;
const result = string.match(regexp);

console.log(result);
