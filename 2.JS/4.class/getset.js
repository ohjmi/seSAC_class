class circle {
    constructor(radius) {
        this._radius = radius;
    }
    get diameter() {
        return this._radius * 2;
    }
    set diameter(diameter) {
        this._radius = diameter / 2;
    }
}

const myCircle = new circle(5);
console.log(myCircle.diameter);
myCircle.diameter = 50;
console.log(myCircle._radius);