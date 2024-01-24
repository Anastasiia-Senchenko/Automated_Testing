//Get the day, month and year of the current date and output it to the console separately

const currentDate = new Date;

const day = currentDate.getDate();
const month = currentDate.getMonth() + 1;
const year = currentDate.getFullYear();

console.log("Day: " + day);
console.log("Month: " + month);
console.log("Year: "+ year);

