const post = () => ({
  id: '1',
  title: 'loremp ipsum',
  text: 'loremp ipsum',
});

const posts = () => [
  {
    id: '1',
    title: 'loremp ipsum',
    text: 'loremp ipsum',
  },
  {
    id: '1',
    title: 'loremp ipsum',
    text: 'loremp ipsum',
  },
  {
    id: '1',
    title: 'loremp ipsum',
    text: 'loremp ipsum',
  },
];

export const postResolvers = {
  Query: {
    post,
    posts,
  },
};
