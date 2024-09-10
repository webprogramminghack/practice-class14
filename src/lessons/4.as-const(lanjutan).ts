let a = 1; // non literal number -> range of number
const b = 1; // literal number -> a single number

let c = 1 as const; // literal number
c = 2;
c = 1;

const nums1 = ['1', '2', '3'];
const nums2 = ['1', '2', '3'] as const; // literal

const SKILL_LEVELS = ['Beginner', 'Intermediate', 'Expert'] as const;

type Person = {
  skillLevel: (typeof SKILL_LEVELS)[number];
};

SKILL_LEVELS.forEach((skillLevel) => console.log(skillLevel));

const person = {
  name: 'John',
  age: 28,
  address: {
    street: '123 Main St',
  },
} as const;

person.name = 'Jane';
person.address.street = 'adasdasd';
