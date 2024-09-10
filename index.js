class Pet {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
  
    speak() {
      return "Some sound";
    }
  }
  
  class Dog extends Pet {
    speak() {
      return "Woof!";
    }
  }
  
  class Cat extends Pet {
    speak() {
      return "Meow!";
    }
  }
  
  const myDog = new Dog('Mich', 3);
  const myCat = new Cat('Winnona', 2);
  
  console.log(`${myDog.name} says: ${myDog.speak()}`); 
  console.log(`${myCat.name} says: ${myCat.speak()}`);