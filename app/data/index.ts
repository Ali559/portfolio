import type { IFacts, IProject, ISkills, Link } from "~/types";
import InzpiriImage from "~/assets/img/projects/inzpiri.png";
import SmartPricerImage from "~/assets/img/projects/smart-pricer.png";
import SeeYouImage from "~/assets/img/projects/seeyou.png";
import WizRXImage from "~/assets/img/projects/wizrx.jpg";
import WiZRXPreviewImage from "~/assets/img/projects/previews/wizrx.jpg";

export const introText = `I'm a software engineer with over 5 years of experience working across
          the full-stack, from frontend frameworks like React and Vue to
          backend systems with Node.js and Golang. I've had the opportunity to
          lead cross-functional teams, and I was promoted to Team Lead just 8
          months into one of my roles. I’ve worked on everything from real-time
          messaging systems and APIs to scalable backend architectures using
          tools like RabbitMQ, Redis, and proxy servers. I’ve even built
          integrations with platforms like Slack and Telegram.`;

export const introTextAll = `I'm a software engineer with over 5 years of experience working across
          the full stack — from frontend frameworks like React and Vue to
          backend systems with Node.js and Golang. I've had the opportunity to
          lead cross-functional teams, and I was promoted to Team Lead just 8
          months into one of my roles. I’ve worked on everything from real-time
          messaging systems and APIs to scalable backend architectures using
          tools like RabbitMQ, Redis, and proxy servers. I’ve even built
          integrations with platforms like Slack and Telegram. I’m passionate
          about solving complex problems and delivering high-quality solutions,
          and I’ve been fortunate to be recognized along the way — twice as
          Employee of the Month and as one of the top students at the Computer
          Science Institute. I'm always eager to learn and grow, and I'm a big fan
          of open-source projects.`;



export const contactText = `I’m interested in freelance opportunities. However, if you have other request or question, don’t hesitate to contact me`




export const projects: IProject[] = [
    {
        name: 'Portfolio',
        image: InzpiriImage,
        description: "My Personal Portfolio",
        link: "https://alibarznji.dev",
        tags: [
            "Vuejs",
            "Nuxtjs",
            "SEO",
            "Tailwindcss",
            "Vite",
            "Github",
            "Git",
            "Figma",
            "Typescript",
            "Vercel",
        ],
    },
    {
        name: "Inzpiri (In progress)",
        image: InzpiriImage,
        description: "Online Education Platform for Teachers and Students",
        link: "https://beta.inzpiri.com",
        tags: [
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
    },
    {
        name: "WiZRX",
        image: WizRXImage,
        description:
            "collaboration tool designed to empower businesses by streamlining communication and strengthening internal connections.",
        link: "https://masterwizr.com/wizr-x/",
        tags: [
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
        previewImage: WiZRXPreviewImage,
    },
    {
        name: "Smart Pricer",
        image: SmartPricerImage,
        description:
            "Ticketing and Price Analytics as well as Dynamic Pricing based on Data Science for Ski Resorts, Sports, Cinema and Entertainment.",
        link: "https://www.smart-pricer.com/",
        tags: [
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
    },
    {
        name: "SEEYOU",
        image: SeeYouImage,
        description:
            "A Modern All in one Communication Platform for Teams and Individuals.",
        link: "https://www.smart-pricer.com/",
        tags: [
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
    },
];

export const smallProjects: IProject[] = [
    {
        name: 'Strongly typed Env',
        description: 'A powerful, type-safe environment configuration library for Node.js applications that automatically generates TypeScript types from your environment files.',
        link: 'https://github.com/ali559/strongly-typed-env',
        tags: [
            'Nodejs',
            'CI/CD',
            'Semver',
            'Typescript',
            'NPM',
            'Git',
            'Github',
        ],
        linkText: 'github <~>'
    },
    {
        name: 'CDN Checker',
        description: 'A Visual Studio Code extension that helps you identify broken, redirecting, or oversized external links in your project files. Perfect for maintaining healthy CDN references, image links, video embeds, and other external resources.',
        link: 'https://github.com/Ali559/cdn-checker',
        tags: [
            'Nodejs',
            'Typescript',
            'VSCE',
            'Git',
            'Github',
        ],
        linkText: 'github <~>',
    },
    {
        name: 'SEEYOU Chat',
        description: 'An API based integration with Slack and Telegram for the SEEYOU platform',
        tags: [
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
        name: 'Wizr Chat',
        description: 'A Chat System for the WiZRX platform',
        tags: [
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
        name: 'Gym Management System',
        description: 'A Modern Gym Management System',
        tags: [
            '.NET',
            'C#',
            'SQL Server',
            'SQL',
            'OOP'
        ],
    },
    {
        name: 'Grades App',
        description: 'A Grades platform for highschool graduates to easily pick the best university for them based on their grades and preferences',
        tags: [
            '.NET',
            'C#',
            'SQL Server',
            'SQL',
            'OOP',
            'SQLITE',
        ],
    }
]

export const links: Link[] = [
    {
        name: "home",
        path: "#home",
    },
    {
        name: "works",
        path: "#projects",
    },
    {
        name: "skills",
        path: "#skills",
    },
    {
        name: "about-me",
        path: "#about-me",
    },
    {
        path: "#contacts",
        name: "contacts",
    },
];

export const skills: ISkills[] = [
    {
        category: "Languages",
        skills: ["TypeScript", "JavaScript", "Go", "C#"],
    },
    {
        category: "Frameworks",
        skills: [
            "Vue",
            "Nuxt",
            "React",
            "Next",
            "Svelte",
            "Nestjs",
            "Fastify",
            "Express",
            "Chi",
            ".NET",
        ],
    },
    {
        category: "Tools",
        skills: [
            "Git",
            "NPM",
            "Docker",
            "Postman",
            "Swagger",
            "Figma",
            "Vercel",
            "AWS",
            "VSCode",
            "GraphQL",
        ],
    },
    {
        category: "Databases",
        skills: [
            "MongoDB",
            "Redis",
            "PostgreSQL",
            "MySQL",
            "SQLite",
            "DynamoDB",
            "MSSQL",
        ],
    },
    {
        category: "Other",
        skills: ["CSS", "HTML", "Tailwind", "Jest", "Vitest", "API Dev", "TDD"],
    },
];


export const factsAboutMe: IFacts[] = [
    {
        text: `My favourite movie is Inglorious Bastards`,
        highlightedParts: ["Inglorious Bastards"],
    },
    {
        text: `I've only been to the Cinema once (maybe not such a fun fact lol)`,
        highlightedParts: ["Cinema"],
    },
    {
        text: `I wanted to be a musician when I was a kid, but I never got the chance to do it`,
        highlightedParts: ["musician"],
    },
    {
        text: `I was born in the year 2000`,
        highlightedParts: ["2000"],
    },
    {
        text: `My favourite game is Red Dead Redemption 2`,
        highlightedParts: ["Red Dead Redemption 2"],
    },
    {
        text: `I'm a big fan of open-source projects`,
        highlightedParts: ["open-source"],
    },
    {
        text: `I can't live withou comedy`,
        highlightedParts: ["comedy"],
    }

]