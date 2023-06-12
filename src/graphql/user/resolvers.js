const user = () => ({
  id: '1',
  name: 'John Doe',
  email: 'jhon@doe.com',
  password: 'jhonjhon',
});

const users = () => [
  {
    id: '1',
    name: 'John Doe',
    email: 'jhon@doe.com',
    password: 'jhonjhon',
  },
  {
    id: '1',
    name: 'John Doe',
    email: 'jhon@doe.com',
    password: 'jhonjhon',
  },
  {
    id: '1',
    name: 'John Doe',
    email: 'jhon@doe.com',
    password: 'jhonjhon',
  },
];

export const userResolvers = {
  Query: {
    user,
    users,
  },
};
