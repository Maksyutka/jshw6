class Circle {
    constructor(r) {
        this.r = r;
    }
    get radius() {
        return this.r;
    }
    set radius(r) {
        this.r = r;
    }
    get d() {
        return this.r * 2;
    }
    area() {
        return Math.PI * this.r * this.r;
    }
    length() {
        return 2 * Math.PI * this.r;
    }
}

let circle = new Circle(5);
console.log(circle.radius);
console.log(circle.d);
console.log(circle.area());
console.log(circle.length())