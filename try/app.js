function Person(name, age, height, weight) {
  this.name = name;
  this.age = age;
  this.height = height;
  this.weight = weight;
}

let Roger = new Person("Roger", 25, 180, 100);

console.log(Roger);
