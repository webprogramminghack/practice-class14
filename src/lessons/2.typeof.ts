// this is what we usually do in javascript
console.log(typeof 1);

const person = {
  name: 'John',
  age: 30,
};

type People = typeof person;

const people: (typeof person)[] = [];
const people2: People[] = [];

function greet(name: string) {
  return `Hello, ${name}`;
}

type FuncType = typeof greet;

// you can't do this
type FuncType2 = typeof greet('John');