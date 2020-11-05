const message: string = "Hello World"!
let count = 0;
count +=1;
// count = "갑자기 문자열"; //error

const done : boolean = true;
const numbers : number[] = [1,2,3,4];
const messages : string[] = ["one", "two"];

// messages.push(2); //error

let mightBeUndefined : string | undefined = undefined;
let nullableNumber : number | null = 5;

nullableNumber = null;

let color : 'red'|'orange'|'yellow' = 'red';
color = "yellow";
// color = "green"; //error


function sum (x : number, y:number) : number{
    return x+y;
}

sum(1,2);

function sumArray(numbers : number[]) : number{
    return numbers.reduce((acc,currentValue)=>acc+currentValue,0);
}

const total = sumArray([1,23,5,4,5,6,7,6]);

function returnNothing() : void {
    console.log("good");
}


