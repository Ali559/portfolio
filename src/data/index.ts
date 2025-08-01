import type { IAchievement, IExperience, INavLink, IProject, ISkill, ISocials } from "@/types";



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
    image: '/src/assets/img/projects/portfolio.png'
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
    image: 'src/assets/img/projects/inzpiri.png'
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
    image: 'src/assets/img/projects/wizrx.png'
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
    image: 'src/assets/img/projects/smart-pricer.png'
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
    image: 'src/assets/img/projects/seeyou.png'
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
    image: '/src/assets/img/projects/env.png'

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
    image: 'src/assets/img/projects/cdn-checker.png'
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
    title: 'Senior Full Stack Developer',
    company: 'Tech Innovations Inc.',
    period: '2022 - Present',
    description: 'Led development of scalable web applications, mentored junior developers, and implemented CI/CD pipelines.',
  },
  {
    title: 'Full Stack Developer',
    company: 'StartupXYZ',
    period: '2020 - 2022',
    description: 'Built and maintained multiple client projects, collaborated with design team, and optimized application performance.',
  },
  {
    title: 'Frontend Developer',
    company: 'Digital Agency',
    period: '2019 - 2020',
    description: 'Developed responsive websites and web applications, worked with modern JavaScript frameworks.',
  },
];

export const achievements: IAchievement[] = [
  {
    title: 'AWS Certified Solutions Architect',
    issuer: 'Amazon Web Services',
    year: '2023',
    description: 'Professional certification in designing and deploying scalable systems on AWS.'
  },
  {
    title: 'React Advanced Certification',
    issuer: 'Meta',
    year: '2022',
    description: 'Advanced certification covering React patterns, performance optimization, and testing.'
  },
  {
    title: 'Best Innovation Award',
    issuer: 'Tech Innovations Inc.',
    year: '2023',
    description: 'Recognized for developing an innovative solution that increased system efficiency by 40%.'
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
