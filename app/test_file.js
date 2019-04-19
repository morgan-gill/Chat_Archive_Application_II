/*
const foo = () => {
    console.log("First declared function");
}

function foo () {
    console.log("Second declared function");
}

foo();
*/
/*
var bar = () => {
    const foo = () => {
        console.log("Here... there be constants!");
    }
    foo();
}

function foo () {
    console.log("Second attempt");
    bar();
}

foo();
*/
/*
const names = {cat: "Bob", dog: "Fred", alligator: "Benedict"};

const {cat, dog, alligator} = names;

console.log(cat);
*/
/*
const names = ["Bob", "Fred", "Benedict"];

const [cat, alligator] = names;

console.log(alligator);
*/

const piece = [1, 3];
const segment = [piece, [5, 5]];
const triangle = [...segment, [6, 1]];
console.log(triangle);
