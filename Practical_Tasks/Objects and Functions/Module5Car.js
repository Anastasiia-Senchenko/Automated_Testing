//Create a car object, add a color property to it with the value equals 'black'
const car = {
  color: "black",
  power: 200,
};

car.color = "green";//Change the color property of the car object to 'green'

console.log(car.color);

//Add the power property to the car object, which is a function and displays the engine power to the console
car.power = function(){
console.log(200);
}
car.power();
