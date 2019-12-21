const randomString = (length) => {
  const x = 36 ** (length + 1);
  const y = 36 ** length;
  return Math.round(x - (Math.random() * y)).toString(36).slice(1);
};

const pages = [
  {
    route: '/',
    title: 'Wojciech Rak',
    heading: 'ABOUT THIS SITE',
  },
  {
    route: '/about',
    title: 'About | Wojciech Rak',
    heading: 'ABOUT ME',
  },
  {
    route: '/projects',
    title: 'Projects | Wojciech Rak',
    heading: 'PROJECTS',
  },
  {
    route: '/stats',
    title: 'Stats | Wojciech Rak',
    heading: 'STATS',
  },
  {
    route: '/contact',
    title: 'Contact | Wojciech Rak',
    heading: 'CONTACT',
  },
];

export { pages, randomString };
