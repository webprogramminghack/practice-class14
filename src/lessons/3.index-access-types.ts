type Person = {
  name: string;
  skillLevel: 'Beginner' | 'Intermediate' | 'Expert';
};

const person: Person = {
  name: 'John',
  skillLevel: 'Expert',
};

function printSkillLevel(skillLevel: Person['skillLevel']) {
  console.log(skillLevel);
}

printSkillLevel(person.skillLevel);

type PeopleGroupedBySkillLevel = {
  [index: string]: Person[];
};

// this is the wrong approach
const groupSkills: PeopleGroupedBySkillLevel = {
  Beginner: [person],
  Intermediate: [person],
  Expert: [person],
  Master: [person],
  asdasdasd: [person],
  123123123: [person],
};

// solution
type PeopleGroupedBySkillLevel2 = {
  [index in Person['skillLevel']]: Person[];
};

const groupBySkills2: PeopleGroupedBySkillLevel2 = {
  Beginner: [person],
  Intermediate: [person],
  Expert: [person],
  Master: [person],
};

type Car = {
  brand: string;
  model: string;
  year: number;
};

type CarArray = Car[];
type CarType = CarArray[number];

const a = ['hello', 'world', true];
type A = (typeof a)[number];

type B = (string | string | boolean)[][number];
type C = (string | boolean)[][number];

const myArray = [
  { name: 'Alice', age: 15 },
  { name: 'Bob', age: 23 },
  { name: 'Eve', age: 38 },
];

type MyArrayType = (typeof myArray)[number];

type Employee = {
  name: string;
  age: number;
  salary: number;
};

type EmployeeValues = Employee['name' | 'age' | 'salary'];
``;

type EmployeeValues2 = Employee[keyof Employee];

const personArray = [
  { name: 'Alice', age: 15 },
  { name: 'Bob', age: 23 },
  { name: 'Eve', age: 38 },
];

// string | number
type MyArrayValuesType =
  (typeof personArray)[number][keyof (typeof personArray)[number]];

type ItemInsideArray = (typeof personArray)[number];
type ValuesOfProperty = ItemInsideArray[keyof ItemInsideArray];

// const key = 'age';
// type Age = Employee[key];

type key = 'age'; // literal string
type Age2 = Employee[key];
