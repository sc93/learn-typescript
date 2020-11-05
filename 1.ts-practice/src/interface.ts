interface Shape {
    getArea():number;
}

class Circle implements Shape {
    constructor(public radius : number){
        this.radius = radius;
    }

    getArea(){
        return this.radius * this.radius * Math.PI;
    }
}

class Rectangle implements Shape {
    constructor(private width : number, private height : number){
        this.width = width;
        this.height = height;
    }

    getArea() {
        return this.width * this.height;
    }
}

const shape : Shape[] = [new Circle(5),new Rectangle(10,5)];

shape.forEach(shape=>{
    console.log(shape.getArea());
});
const circle = new Circle(10);
const rectangle = new Rectangle(10,10);

console.log(circle.radius);
// console.log(rectangle.width); //error

interface Person {
    name : string;
    age : number;
}

// interface Developer {
//     name : string;
//     age : number;
//     skills : string[];
// }
interface Developer extends Person {
    skills : string[];
}
const person : Person = {
    name : "김계란",
    age : 30,
};
const expert: Developer ={
    name : "김개발",
    age : 28,
    skills : ["js","react"]
};