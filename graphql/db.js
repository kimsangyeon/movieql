export const people = [
  {
    id: 1,
    name: 'sangyeon',
    age: 10,
    gender: 'male',
  },
  {
    id: 2,
    name: 'dandy',
    age: 14,
    gender: 'male',
  },
  {
    id: 3,
    name: 'candy',
    age: 12,
    gender: 'female',
  },
  {
    id: 4,
    name: 'tom',
    age: 9,
    gender: 'male',
  },
  {
    id: 5,
    name: 'janny',
    age: 16,
    gender: 'female',
  },
];

export const getById = (id) => {
  const filterPeople = people.filter((person) => person.id === id);
  return filterPeople[0];
};
