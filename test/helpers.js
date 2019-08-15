const randomString = (length) => {
  const x = 36 ** (length + 1);
  const y = 36 ** length;
  return Math.round(x - (Math.random() * y)).toString(36).slice(1);
};

const pages = [
  {
    route: '/',
    title: 'Sai Sourabh Madur',
    heading: 'ABOUT THIS SITE',
  },
  {
    route: '/about',
    title: 'About | Sai Sourabh Madur',
    heading: 'ABOUT ME',
  },
  {
    route: '/projects',
    title: 'Projects | Sai Sourabh Madur',
    heading: 'PROJECTS',
  },
  {
    route: '/stats',
    title: 'Stats | Sai Sourabh Madur',
    heading: 'STATS',
  },
  {
    route: '/contact',
    title: 'Contact | Sai Sourabh Madur',
    heading: 'CONTACT',
  },
];

export { pages, randomString };
