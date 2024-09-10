type Person = {
  name: string;
  age: number;
};

type PersonKeys = keyof Person;

function getValue(person: Person, key: keyof Person) {
  return person[key];
}

const age = getValue({ name: 'John', age: 30 }, 'age');

type ArrayIsh = { [n: number]: unknown };
type A = keyof ArrayIsh;

type NumberArray = number[]; // shorthand of Array interface
type NumberArray2 = Array<number>;
type B = keyof NumberArray;
type C = keyof NumberArray2;

// index signatures
// kalau key nya memiliki tipe data selain number
// maka akan di tambah number dan dijadikan union
type Mapish = { [k: string]: boolean };
type D = keyof Mapish;
// object keys in javascript always coerced to strings (even if they are numbers)

const mapish: Mapish = { 123: true };

type Person2 = {
  name: string;
  age: number;
  isProgrammer?: boolean;
};

type Person2Keys = keyof Person2;

function getValue2(person: Person2, key: keyof Person2) {
  return person[key];
}

const age2 = getValue2({ name: 'John', age: 30 }, 'name');

console.log(age2);
