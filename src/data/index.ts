import type { IAchievement, IExperience, IFunFact, INavLink, IProject, ISkill, ISocials, IStat } from "@/types";
import portfolioImage from '../assets/img/projects/portfolio.png';
import inzpiriImage from '../assets/img/projects/inzpiri.png';
import wizrxImage from '../assets/img/projects/wizrx.png';
import cdnCheckerImage from '../assets/img/projects/cdn-checker.png';
import smartPricerImage from '../assets/img/projects/smart-pricer.png';
import seeyouImage from '../assets/img/projects/seeyou.png';
import envImage from '../assets/img/projects/env.png';
import { BookOpen, Gamepad, Music, Plane, Crown, Users, Film, Shuffle, Code2, Briefcase, Award } from "lucide-vue-next";

export const projects: IProject[] = [
  {
    title: 'Portfolio Website',
    description: 'My Personal Portfolio',
    technologies: [
      "Vuejs",
      "Tailwindcss",
      "Shadcn UI",
      "Vite",
      "Github",
      "Git",
      "Figma",
      "Typescript",
      "Vercel",
    ],
    github: 'https://github.com/Ali559/portfolio',
    live: 'https://alibarznji.dev',
    image: portfolioImage
  },
  {
    title: 'Inzpiri (In progress)',
    description: 'Online Education Platform for Teachers and Students.',
    technologies: [
      "Vuejs",
      "Tailwindcss",
      "Vite",
      "AWS",
      "Github",
      "Git",
      "Figma",
      "Go",
      "MongoDB",
      "Docker",
      "Redis",
      "Typescript",
    ],
    live: 'https://beta.inzpiri.com',
    image: inzpiriImage
  },
  {
    title: 'WiZRX',
    description: 'collaboration tool designed to empower businesses by streamlining communication and strengthening internal connections.',
    technologies: [
      "Reactjs",
      "PostCSS",
      "Vite",
      "AWS",
      "Github",
      "Git",
      "Figma",
      "Go",
      "Nestjs",
      "MongoDB",
      "Socket.io",
      "Typescript",
    ],
    live: 'https://masterwizr.com/wizr-x/',
    image: wizrxImage
  },
  {
    title: 'Smart Pricer',
    description: 'Ticketing and Price Analytics as well as Dynamic Pricing based on Data Science for Ski Resorts, Sports, Cinema and Entertainment.',
    technologies: [
      "Nodejs",
      "Express",
      "Typescript",
      "MongoDB",
      "Proxy",
      "JWT",
      "Redis",
      "Git",
      "Github",
      "Swagger",
    ],
    live: 'https://www.smart-pricer.com/',
    image: smartPricerImage
  },
  {
    title: 'SEEYOU',
    description: 'A Modern All in one Communication Platform for Teams and Individuals.',
    technologies: [
      "Nodejs",
      "Express",
      "Typescript",
      "MongoDB",
      "Proxy",
      "JWT",
      "Redis",
      "Git",
      "Github",
      "Swagger",
    ],
    live: 'https://seeyou.eu', // Backend service
    image: seeyouImage
  },
  {
    title: 'Strongly typed Env',
    description: 'A powerful, type-safe environment configuration library for Node.js applications that automatically generates TypeScript types from your environment files.',
    github: 'https://github.com/ali559/strongly-typed-env',
    technologies: [
      'Nodejs',
      'CI/CD',
      'Semver',
      'Typescript',
      'NPM',
      'Git',
      'Github',
    ],
    live: 'https://www.npmjs.com/package/strongly-typed-env',
    image: envImage

  },
  {
    title: 'CDN Checker',
    description: 'A Visual Studio Code extension that helps you identify broken, redirecting, or oversized external links in your project files. Perfect for maintaining healthy CDN references, image links, video embeds, and other external resources.',
    github: 'https://github.com/Ali559/cdn-checker',
    technologies: [
      'Nodejs',
      'Typescript',
      'VSCE',
      'Git',
      'Github',
    ],
    live: 'https://marketplace.visualstudio.com/items?itemName=AliBarznji.cdn-checker',
    image: cdnCheckerImage
  },
  {
    title: 'SEEYOU Chat',
    description: 'An API based integration with Slack and Telegram for the SEEYOU platform',
    technologies: [
      'React',
      'Nodejs',
      'Typescript',
      'Git',
      'Github',
      'Swagger',
      'Nestjs',
      'Websocket',
      'Redis',
      'Slac API',
      'Telegram API',
    ],
  },
  {
    title: 'Wizr Chat',
    description: 'A Chat System for the WiZRX platform',
    technologies: [
      'React',
      'Nodejs',
      'Typescript',
      'Zustand',
      'Git',
      'Github',
      'Express',
      'Websocket',
      'Socket.io',
      'MongoDB',
    ],
  },
  {
    title: 'Gym Management System',
    description: 'A Modern Gym Management System',
    technologies: [
      '.NET',
      'C#',
      'SQL Server',
      'SQL',
      'OOP'
    ],
  },
  {
    title: 'Grades App',
    description: 'A Grades platform for highschool graduates to easily pick the best university for them based on their grades and preferences',
    technologies: [
      '.NET',
      'C#',
      'SQL Server',
      'SQL',
      'OOP',
      'SQLITE',
    ],
  }
];

export const experience: IExperience[] = [
  {
    title: 'Software Engineer',
    company: 'Learnio AS',
    period: 'March 2023 - Present',
    description: 'Promoted to Team Lead within 8 months for exceptional technical and leadership skills. Lead cross-functional projects, ensuring timely, high-quality delivery. Oversee frontend and backend development, collaborating with designers, developers, and stakeholders. Build intuitive UIs using React.js, Vue.js, JavaScript, HTML, and CSS. Develop scalable systems with Node.js, Go, REST APIs, and microservices. Maintain code quality, Git versioning, and CI best practices.',
  },
  {
    title: 'Software Engineer',
    company: 'Dev Centre House',
    period: 'June 2021 - March 2023',
    description: 'Developed and maintained the backend of the SEEYOU chat platform using RabbitMQ, Redis, and scalable messaging architecture. Built Slack and Telegram integration demos for real-time messaging. Led backend proxy development for Smart Pricer, enhancing API performance. Recognized twice as Employee of the Month and selected for DCH’s elite "Navy SEAL" team for top-tier performance, innovation, and work ethic. Integrated real-time communication with Node.js and third-party APIs.',
  },
];

export const achievements: IAchievement[] = [
  {
    title: 'Critical Thinking and Creative Problem Solving',
    issuer: 'Global Solutions',
    year: '2019',
    description: 'Recognized for exceptional critical thinking and creative problem-solving skills.'
  },
  {
    title: 'Adaptability',
    issuer: 'Global Solutions',
    year: '2019',
    description: 'Recognized for exceptional adaptability and ability to learn quickly.'
  },
  {
    title: 'Virtual Collaboration',
    issuer: 'Global Solutions',
    year: '2019',
    description: 'Recognized for exceptional virtual collaboration skills.'
  },
];


export const navLinks: INavLink[] = [
  {
    name: 'Home',
    href: '#home',
  },
  {
    name: 'About',
    href: '#about',
  },
  {
    name: 'Projects',
    href: '#projects',
  },
  {
    name: 'Experience',
    href: '#experience',
  },
  {
    name: 'Contact',
    href: '#contact',
  }
]



export const introText = `I craft beautiful, scalable web applications with modern technologies and best practices`;

export const aboutText = ` I'm a passionate full stack developer with over 5 years of experience building scalable
          web applications. I love working with modern technologies and creating solutions that make
          a real impact.`


export const contactText = ` I'm always open to discussing new opportunities, interesting projects, or potential collaborations. Feel free to reach out if you have any questions or just want to say hello! `;






export const skills: ISkill[] = [
  // Languages (Top 5)
  {
    name: 'TypeScript',
    level: 90,
    category: 'Languages'
  },
  {
    name: 'JavaScript',
    level: 90,
    category: 'Languages'
  },
  {
    name: 'Go',
    level: 60,
    category: 'Languages'
  },
  {
    name: 'C#',
    level: 60,
    category: 'Languages'
  },
  {
    name: 'Elixir',
    level: 40,
    category: 'Languages'
  },

  // Frameworks (Top 5)
  {
    name: 'React',
    level: 90,
    category: 'Frameworks'
  },
  {
    name: 'Vue',
    level: 90,
    category: 'Frameworks'
  },
  {
    name: 'Next',
    level: 80,
    category: 'Frameworks'
  },
  {
    name: 'Nestjs',
    level: 90,
    category: 'Frameworks'
  },
  {
    name: 'Express',
    level: 95,
    category: 'Frameworks'
  },

  // Tools (Top 5)
  {
    name: 'NPM',
    level: 95,
    category: 'Tools'
  },
  {
    name: 'VSCode',
    level: 90,
    category: 'Tools'
  },
  {
    name: 'Postman',
    level: 80,
    category: 'Tools'
  },
  {
    name: 'Swagger',
    level: 80,
    category: 'Tools'
  },
  {
    name: 'Git',
    level: 70,
    category: 'Tools'
  },

  // Databases (Top 5)
  {
    name: 'MongoDB',
    level: 90,
    category: 'Databases'
  },
  {
    name: 'MySQL',
    level: 90,
    category: 'Databases'
  },
  {
    name: 'Redis',
    level: 80,
    category: 'Databases'
  },
  {
    name: 'PostgreSQL',
    level: 60,
    category: 'Databases'
  },
  {
    name: 'RabbitMQ',
    level: 60,
    category: 'Databases'
  },
];




export const allSocials: Record<'github' | 'linkedin' | 'email', ISocials> = {
  github: {
    name: "Github",
    link: "github.com/ali559",
  },
  linkedin: {

    name: "Linkedin",
    link: "linkedin.com/in/ali-barznji-36b664325",
  },
  email: {
    name: "Email",
    link: "biz@alibarznji.dev",
  },

}




export const funFacts: IFunFact[] = [
  {
    icon: Crown,
    title: 'Early Leader',
    description: 'Became a team leader at 22, guiding projects and people before most even finished grad school.',
    color: 'from-yellow-500/20 to-amber-500/20'
  },
  {
    icon: Music,
    title: 'Classical Soul',
    description: 'Deeply moved by classical music—especially Chopin’s nocturnes, which never fail to inspire focus and calm.',
    color: 'from-purple-500/20 to-pink-500/20'
  },
  {
    icon: Plane,
    title: 'Frequent Explorer',
    description: 'Travels at least once every year to experience new cultures, cuisines, and perspectives.',
    color: 'from-blue-500/20 to-cyan-500/20'
  },
  {
    icon: Users,
    title: 'Global Circle',
    description: 'Has friends scattered across many countries, making every trip feel like visiting family.',
    color: 'from-green-500/20 to-emerald-500/20'
  },
  {
    icon: Film,
    title: 'Rare Moviegoer',
    description: 'Has only been to the cinema once—a quirky fun fact that surprises most people.',
    color: 'from-red-500/20 to-rose-500/20'
  },
  {
    icon: BookOpen,
    title: 'Literary Thinker',
    description: 'Avid reader of philosophy and literature, with Dostoevsky being a constant source of reflection.',
    color: 'from-indigo-500/20 to-blue-500/20'
  },
  {
    icon: Gamepad,
    title: 'Story-Driven Gamer',
    description: 'Prefers games with rich narratives that feel like interactive novels rather than just challenges.',
    color: 'from-purple-500/20 to-violet-500/20'
  },
  {
    icon: Shuffle,
    title: 'Project Juggler',
    description: 'Comfortably works across multiple projects without being tied to a single tech stack.',
    color: 'from-teal-500/20 to-green-500/20'
  },
];


export const stats: IStat[] = [
  { number: '5+', label: 'Years Coding', icon: Code2 },
  { number: '15+', label: 'Projects Built', icon: Briefcase },
  { number: '4', label: 'Teams Led', icon: Users },
  { number: '5–10', label: 'Honors Received', icon: Award },
];
