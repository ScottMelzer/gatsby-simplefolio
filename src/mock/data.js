import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Scott Melzer | Web Developer', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'My Portfolio', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Hello, my name is',
  name: 'Scott Melzer',
  subtitle: 'The Web Developer you Need',
  cta: 'Learn More',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne:
    'From HTML to CSS, React to Node.Js, I have the skills you need to bring your project to life.',
  paragraphTwo:
    'Experience working in Ad Tech on the network side at companies like Brightroll and the publisher side like KBB. I have worked in Quality Assurance for SquareEnix, 2K, TellTale Games, Toys for Bob, Atlus, and more. I have a wide range of experiences that let me see problems from multiple angles and come up with novel solutions.',
  paragraphThree:
    'If you are looking for someone to hit the ground running and add real value to your team then send me a message and we can talk.',
  resume: '', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  // {
  //   id: nanoid(),
  //   img: 'project.jpg',
  //   title: '',
  //   info: '',
  //   info2: '',
  //   url: '',
  //   repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  // },
];

// CONTACT DATA
export const contactData = {
  cta: 'Looking for your next hire?',
  btn: "Let's Talk",
  email: 'scottmelzer@pm.me,
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: 'https://twitter.com/manaknights',
    },
    {
      id: nanoid(),
      name: 'codepen',
      url: 'https://codepen.io/MelzerScott',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/melzer/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/ScottMelzer',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
