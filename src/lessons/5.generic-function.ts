function getSecondItem(arr: number[]): number {
  return arr[1];
}

const result = getSecondItem([1, 2, 3]);

// but what if we want to get the second item of an array of strings
function getSecondItem2(arr: string[]): string {
  return arr[1];
}

const result2 = getSecondItem2(['a', 'b', 'c']);

function getSecondItem3(arr: (string | number)[]): string | number {
  return arr[1];
}

const result3 = getSecondItem3(['a', 'b', 'c']);
const result4 = getSecondItem3([1, 2, 3]);
const result5 = getSecondItem3([true, false, true]);

// that's where generic function comes to rescue
function getSecondItem4<Type>(arr: Type[]): Type {
  return arr[1];
}

const result6 = getSecondItem4(['a', 'b', 'c']);
const result7 = getSecondItem4([1, 2, 3]);
const result8 = getSecondItem4([true, false, true]);

function getSecondItem5<T>(arr: T[]): T {
  return arr[1];
}

// favorit1
function identity1<Type>(arg: Type) {
  return arg;
}

// favorit2
const identity2 = <Type>(arg: Type) => arg;

// favorit3
type IdentityFunction = <Type>(arg: Type) => Type;

const identity3: IdentityFunction = (arg) => arg;

let output = identity1('myString'); // auto infer
let anotherOutput = identity1<number>(3);

type IdentityFunction2 = {
  <Type>(arg: Type): Type;
};

let identity4: IdentityFunction2 = (arg) => arg;

interface IdentityFunction3 {
  <Type>(arg: Type): Type;
}

let identity5: IdentityFunction3 = (arg) => arg;

interface IdentityFunction4<Type> {
  (arg: Type): Type;
}

let identity6: IdentityFunction4<number> = (arg) => arg;

// another example
function loggingIdentity<Type>(arg: Type): Type {
  // unknown
  // length is an array property
  console.log(arg.length);
  return arg;
}

function loggingIdentity2<Type>(arg: Type[]): Type[] {
  // unknown
  // length is an array property
  console.log(arg.length);
  return arg;
}

const input = document.querySelector<HTMLInputElement>('.input')!;
console.log(input.value);

// this is why I prefer to use querySelector
const app = document.getElementById<HTMLDivElement>('app')!;
