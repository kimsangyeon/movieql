const yeon = {
  name: 'angyeon',
  age: 10,
  gender: 'male',
};

const resolvers = {
  Query: {
    person: () => yeon,
  },
};

export default resolvers;
