class Animal {
    constructor(name) {
        this.name = name;
    }
    makeSound() {
        return "some sound..."
    }
}

class Dog extends Animal {
    makeSound() {
        return "멍멍";
    }
}

const myDog = new Dog("고양이");
console.log(myDog.makeSound());