// Create 2 objects: animal and cat, add move property to animal object, cat object must inherit move property from object animal

const animal = {
  walk : true,
  jump : true,
  fly() {
 return("I can't fly")   
  }
};


const cat = {
  run : true
};

cat.__proto__ = animal;

console.log(cat.walk);
console.log(cat.run);
console.log(cat.fly());
