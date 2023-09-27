import {
  FaHome,
  FaUser,
  FaFolderOpen,
  FaEnvelopeOpen,
  FaBriefcase,
  FaGraduationCap,
  FaCode,
} from 'react-icons/fa';
import { FiFileText, FiUser, FiExternalLink } from 'react-icons/fi';

import Work1 from './assets/project-1.jpeg';
import Work2 from './assets/project-2.jpg';
import Work3 from './assets/project-3.jpeg';
import Work4 from './assets/project-4.jpg';
import Work5 from './assets/project-5.jpg';
import Work6 from './assets/project-6.jpg';

import Theme1 from './assets/purple.png';
import Theme2 from './assets/red.png';
import Theme3 from './assets/blueviolet.png';
import Theme4 from './assets/blue.png';
import Theme5 from './assets/goldenrod.png';
import Theme6 from './assets/magenta.png';
import Theme7 from './assets/yellowgreen.png';
import Theme8 from './assets/orange.png';
import Theme9 from './assets/green.png';
import Theme10 from './assets/yellow.png';

export const links = [
  {
    id: 1,
    name: 'Home',
    icon: <FaHome className='nav__icon' />,
    path: '/',
  },

  {
    id: 2,
    name: 'About',
    icon: <FaUser className='nav__icon' />,
    path: '/about',
  },

  {
    id: 3,
    name: 'Portfolio',
    icon: <FaFolderOpen className='nav__icon' />,
    path: '/portfolio',
  },

  {
    id: 4,
    name: 'Contact',
    icon: <FaEnvelopeOpen className='nav__icon' />,
    path: '/contact',
  },
];

export const personalInfo = [
  {
    id: 1,
    title: 'First Name : ',
    description: 'Biruk',
  },

  {
    id: 2,
    title: 'Last Name : ',
    description: 'Tadesse',
  },

  {
    id: 3,
    title: 'Age : ',
    description: '23 Years',
  },

  {
    id: 4,
    title: 'Nationality : ',
    description: 'Ethiopian',
  },

  {
    id: 5,
    title: 'Freelance : ',
    description: 'Available',
  },

  {
    id: 6,
    title: 'Address : ',
    description: 'Addis Ababa',
  },

  {
    id: 7,
    title: 'Phone : ',
    description: '+251953266119',
  },

  {
    id: 8,
    title: 'Email : ',
    description: 'se.biruk.ayalew@gmail.com',
  },

  {
    id: 10,
    title: 'Languages : ',
    description: 'English, Amharic',
  },
];

export const stats = [
  {
    id: 1,
    no: '4+',
    title: 'Years of <br /> Experience',
  },

  {
    id: 2,
    no: '10+',
    title: 'Completed <br /> Projects',
  },

  {
    id: 3,
    no: '10+',
    title: 'Happy <br /> Customers',
  },

  {
    id: 4,
    no: '5+',
    title: ' Awards <br /> Won',
  },
];

export const resume = [ 
  {
    id: 1,
    category: 'experience',
    icon: <FaBriefcase />,
    year: '2023 - PRESENT',
    title: 'Freelancer <span> Upwork </span>',
    desc: 'I am currently a freelance professional on Upwork, and \
    my ongoing project involves developing a comprehensive system \
    designed to empower job seekers in their quest to secure employment.\
    Within this project, my primary focus revolves around enhancing the personalized recommendation \
    system.This system utilizes advanced data scraping techniques to analyze resumes, generate \
    customized cover letters, and offer valuable suggestions based on the latest trends in the job market.',
  },

  {
    id: 2,
    category: 'experience',
    icon: <FaBriefcase />,
    year: '07/2022 - 09/2022,',
    title: 'Software Engineering Intern <span> Google </span>',
    desc: 'Worked on internal feature of Google Family Link Application. Besides, \
    I Wrote a design document outlining changes and design considerations we need for the project.\
    I worked on both frontend and backend parts of the project using Flutter and Java',
  },

  {
    id: 3,
    category: 'experience',
    icon: <FaBriefcase />,
    year: '03/2022 - 06/2022,',
    title: 'Full Stack Developer <span> AAIT </span>',
    desc: "I contributed to prototype design, testing, and backend development, \
    focusing on user friendly interfaces and seamless user experiences.The PMRS(Project Management and Report System) \
    digitized and automated project workflows, eliminating paper-based processes and improving efficiency and \
    collaboration. It has transformed the Addis Ababa Institute of Technology University's project management \
    processes, making PMRS the primary system for planning and management.",
  },

  {
    id: 4,
    category: 'experience',
    icon: <FaBriefcase />,
    year: '07/2021 - 12/2021, ,',
    title: 'Backend Developer <span> A2SV(Eskalate) </span>',
    desc: "I worked as a backend engineer with a team of 14 students to design and develop HakimHub with NodeJS \
    and MongoDB. HakimHub is an app that provides information about the nearby healthcare facilities and \
    healthcare professionals for young and educated people in Ethiopia.",
  },

  {
    id: 5,
    category: 'education',
    icon: <FaGraduationCap />,
    year: '2023',
    title: 'Bachelor Degree <span> Addis Ababa Institute of Technology </span>',
    desc: "I earned my bachelor's degree with a very great distinction from one of the top 10 universities in Africa.",
  },

  {
    id: 6,
    category: 'education',
    icon: <FaGraduationCap />,
    year: '2018',
    title: 'High School Diploma <span> Dessie Catholic School </span>',
    desc: 'I have proudly earned my high school diploma with the highest honors from my school.',
  },
];

export const skills = [
  {
    id: 1,
    title: 'HTML/CSS',
    percentage: '100',
  },

  {
    id: 2,
    title: 'Javascript',
    percentage: '100',
  },

  {
    id: 2,
    title: 'Typescript',
    percentage: '100',
  },
  

  {
    id: 3,
    title: 'React.js',
    percentage: '100',
  },

  {
    id: 4,
    title: 'Node.js',
    percentage: '100',
  },

  {
    id: 5,
    title: 'Django',
    percentage: '100',
  },

  {
    id: 6,
    title: 'Flask',
    percentage: '100',
  },

  {
    id: 7,
    title: 'Flutter',
    percentage: '100',
  },

  {
    id: 8,
    title: 'Python & Java',
    percentage: '100',
  },

  {
    id: 9,
    title: 'Tailwind CSS',
    percentage: '100',
  },

  {
    id: 10,
    title: 'Material UI',
    percentage: '100',
  },

  {
    id: 11,
    title: 'Bootstrap',
    percentage: '100',
  },

  {
    id: 12,
    title: 'Angular',
    percentage: '80',
  },

  {
    id: 13,
    title: 'Vue.js',
    percentage: '80',
  },

  {
    id: 14,
    title: 'React Native',
    percentage: '80',
  },


  {
    id: 15,
    title: 'C#',
    percentage: '80',
  },
];

export const portfolio = [
  {
    id: 1,
    img: Work1,
    title: 'Movie Center',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Movie Center',
      },
      {
        icon: <FiUser />,
        title: 'Client : ',
        desc: 'Personal',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'React.js',
      },
      {
        icon: <FiExternalLink />,
        title: '',
        desc: 'https://github.com/birukayalew/MovieCenter',
      },
    ],
  },

  {
    id: 2,
    img: Work2,
    title: 'Medical Chat App',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Medical Chat App',
      },
      {
        icon: <FiUser />,
        title: 'Client : ',
        desc: 'Personal',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'React.js + Node.js',
      },
      {
        icon: <FiExternalLink />,
        title: '',
        desc: 'https://github.com/birukayalew/Medical-Chat-App',
      },
    ],
  },

  {
    id: 3,
    img: Work3,
    title: 'E commerce',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'E commerce',
      },
      {
        icon: <FiUser />,
        title: 'Client : ',
        desc: 'Personal',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'Node.js(MVC)',
      },
      {
        icon: <FiExternalLink />,
        title: '',
        desc: 'https://github.com/birukayalew/Ecommerce',
      },
    ],
  },

  {
    id: 4,
    img: Work4,
    title: 'Fitness Tracker',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Fitness Tracker',
      },
      {
        icon: <FiUser />,
        title: 'Client : ',
        desc: 'Personal',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'Angular, ',
      },
      {
        icon: <FiExternalLink />,
        title: '',
        desc: 'https://github.com/birukayalew/FitnessTracker',
      },
    ],
  },

  {
    id: 5,
    img: Work5,
    title: 'Advertising Platform',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Advertising Platform',
      },
      {
        icon: <FiUser />,
        title: 'Client : ',
        desc: 'AAiT University',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'React JS & Django',
      },
      {
        icon: <FiExternalLink />,
        title: '',
        desc: 'https://github.com/Ethusiasts/AdvertisementPlatform-Frontend',
      },
    ],
  },

  {
    id: 6,
    img: Work6,
    title: 'Tourist Guide',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Tourist Guide',
      },
      {
        icon: <FiUser />,
        title: 'Client : ',
        desc: 'AAiT University',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'Flutter & Flask',
      },
      {
        icon: <FiExternalLink />,
        title: '',
        desc: 'https://github.com/TitansonFlutter/TouristGuide',
      },
    ],
  },
];

export const themes = [
  {
    id: 1,
    img: Theme1,
    color: 'hsl(252, 35%, 51%)',
  },

  {
    id: 2,
    img: Theme2,
    color: 'hsl(4, 93%, 54%)',
  },

  {
    id: 3,
    img: Theme3,
    color: 'hsl(271, 76%, 53%)',
  },

  {
    id: 4,
    img: Theme4,
    color: 'hsl(225, 73%, 57%)',
  },

  {
    id: 5,
    img: Theme5,
    color: 'hsl(43, 74%, 49%)',
  },

  {
    id: 6,
    img: Theme6,
    color: 'hsl(339, 81%, 66%)',
  },

  {
    id: 7,
    img: Theme7,
    color: 'hsl(80, 61%, 50%)',
  },

  {
    id: 8,
    img: Theme8,
    color: 'hsl(19, 96%, 52%)',
  },

  {
    id: 9,
    img: Theme9,
    color: 'hsl(88, 65%, 43%)',
  },

  {
    id: 10,
    img: Theme10,
    color: 'hsl(42, 100%, 50%)',
  },
];
