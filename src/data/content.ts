// ─── Site Copy ──────────────────────────────────────────────────────────────
//
// Every string on the home page, in English and Sorani Kurdish. Both locales
// share one shape (`SiteContent`), so a missing translation is a type error
// rather than a blank spot on the page. Product names, technologies and
// URLs stay in Latin script in both languages.

export type Locale = 'en' | 'ckb'

export const localeDirection: Record<Locale, 'ltr' | 'rtl'> = {
  en: 'ltr',
  ckb: 'rtl',
}

export interface CaseStudy {
  id: string
  name: string
  summary: string
  story: string
  stack: string[]
  image?: { src: string; width: number; height: number }
  /** A phone screen of the app, shown behind the diagram. */
  phone?: { src: string; width: number; height: number }
  diagram?: 'lalengi' | 'codex' | 'qasa' | 'inzpiri' | 'seeyou' | 'smart-pricer'
  links: { label: string; href: string }[]
}

export interface SmallThing {
  name: string
  text: string
  href: string
}

export interface Job {
  company: string
  href?: string
  role: string
  period: string
  text: string
}

export interface SiteContent {
  name: string
  nav: { work: string; experience: string; contact: string; devlog: string }
  switchLanguage: { label: string; aria: string }
  theme: { toDark: string; toLight: string }
  menu: { open: string; close: string }
  hero: { lede: string; emailMe: string; seeWork: string }
  work: { title: string; builtLegend: string; items: CaseStudy[] }
  small: { title: string; items: SmallThing[] }
  experience: { title: string; items: Job[] }
  outside: { title: string; text: string }
  contact: { title: string; text: string; resume: string }
  footer: string
}

const email = 'biz@alibarznji.dev'

export const contactLinks = {
  email,
  github: 'https://github.com/ali559',
  linkedin: 'https://www.linkedin.com/in/ali-barznji-36b664325',
  resume: '/resume.pdf',
}

const en: SiteContent = {
  name: 'Ali Barznji',
  nav: { work: 'Work', experience: 'Experience', contact: 'Contact', devlog: 'Devlog' },
  switchLanguage: { label: 'کوردی', aria: 'Read this site in Sorani Kurdish' },
  theme: { toDark: 'Switch to dark theme', toLight: 'Switch to light theme' },
  menu: { open: 'Open menu', close: 'Close menu' },
  hero: {
    lede: "I'm a software engineer, mostly on the backend. I designed and built the backend of Lalengi, a super app for food, rides and deliveries, and I work on client projects at Codex Solutions. In my own time I'm building Qasa, a password manager for Iraq, and tools for students in Kurdistan, where I'm from.",
    emailMe: 'Email me',
    seeWork: 'See selected work',
  },
  work: {
    title: 'Selected work',
    builtLegend: 'The parts I built',
    items: [
      {
        id: 'lalengi',
        diagram: 'lalengi',
        image: { src: '/img/projects/lalengi.png', width: 2976, height: 1854 },
        name: 'Lalengi',
        summary: 'The backend of a super app for food, groceries, rides and parcels.',
        story:
          'I built it end to end, remotely: the architecture, a PostgreSQL schema of 297 tables, the infrastructure and the DevOps. A NestJS API handles every write. A separate WebSocket gateway pushes live events, like a driver moving on the map, to six client apps, and background workers run the queues and scheduled jobs.',
        stack: ['NestJS', 'PostgreSQL', 'Redis', 'BullMQ'],
        links: [{ label: 'Visit Lalengi', href: 'https://lalengi.com/en' }],
      },
      {
        id: 'codex',
        diagram: 'codex',
        name: 'Codex Solutions',
        summary: 'Splitting a client backend into services that scale on their own.',
        story:
          "On one of Codex's client projects I took the backend from a single app to four processes: the REST API, a Socket.IO gateway, a push notification service and a cron service, all talking through Redis queues. Along the way I added Redis caching and dependency injection throughout, so each part can be deployed and scaled separately.",
        stack: ['NestJS', 'Redis', 'BullMQ', 'Socket.IO'],
        links: [{ label: 'Visit Codex', href: 'https://codexsolutions.io/' }],
      },
      {
        id: 'qasa',
        diagram: 'qasa',
        phone: { src: '/img/projects/qasa-en.webp', width: 600, height: 1304 },
        name: 'Qasa',
        summary: 'A password manager for iOS and Android whose vault never leaves the phone.',
        story:
          "Qasa is my own product, paid for through Iraqi wallets. Every password is encrypted on the device and stays there. The Rust server never sees the vault: it only meters devices and sells Premium, which adds a WireGuard VPN, more devices and a breached-password check. I built all of it: the Axum API and its worker, the agent that keeps each VPN node's peers in sync, the native iOS and Android apps and a Vue admin dashboard.",
        stack: ['Rust', 'PostgreSQL', 'SwiftUI', 'Kotlin', 'WireGuard'],
        links: [
          { label: 'Visit Qasa', href: 'https://qasa-app.com' },
          { label: 'Source', href: 'https://github.com/Ali559/Qasa' },
        ],
      },
      {
        id: 'zankoline',
        name: 'Zankoline',
        summary: 'A university admission guide for students in Kurdistan.',
        story:
          'Students enter their grade and see which programs they can realistically get into, then drag their choices into priority order and print the admission form. It runs fully offline as a PWA, in English and Sorani, with no backend and no account. Keeping everything on the device shaped almost every other decision.',
        stack: ['React', 'TypeScript', 'Dexie', 'PWA'],
        image: { src: '/img/projects/zankoline-crop.png', width: 1500, height: 1200 },
        links: [
          { label: 'Read how I built it', href: '/devlog/zankoline' },
          { label: 'Open the app', href: 'https://zankoline-pwa.vercel.app' },
          { label: 'Source', href: 'https://github.com/Ali559/zankoline-pwa' },
        ],
      },
      {
        id: 'inzpiri',
        diagram: 'inzpiri',
        name: 'Inzpiri',
        summary: 'An online education platform for teachers and students.',
        story:
          'This is the product I led at Learnio. I ran a cross-functional team and worked across the stack, from the Vue front end to Go services backed by MongoDB and Redis, deployed on AWS. I was made team lead eight months after joining.',
        stack: ['Vue', 'Go', 'MongoDB', 'AWS'],
        links: [{ label: 'Visit the beta', href: 'https://beta.inzpiri.com' }],
      },
      {
        id: 'seeyou',
        diagram: 'seeyou',
        image: { src: '/img/projects/seeyou.png', width: 2976, height: 1854 },
        name: 'SEEYOU',
        summary: 'The messaging backend for a team communication platform.',
        story:
          "At Dev Centre House I built and maintained the backend of SEEYOU's chat: a messaging architecture on RabbitMQ and Redis, designed to scale. I also built the Slack and Telegram integrations that carried messages between SEEYOU and those platforms in real time.",
        stack: ['Node.js', 'RabbitMQ', 'Redis', 'NestJS'],
        links: [{ label: 'Visit SEEYOU', href: 'https://seeyou.eu' }],
      },
      {
        id: 'smart-pricer',
        diagram: 'smart-pricer',
        image: { src: '/img/projects/smart-pricer.png', width: 2980, height: 1564 },
        name: 'Smart Pricer',
        summary: 'Dynamic pricing for ski resorts, sports and cinemas.',
        story:
          "I led development of the backend proxy that sits in front of Smart Pricer's ticketing and pricing APIs, and improved their performance.",
        stack: ['Node.js', 'Express', 'Redis'],
        links: [{ label: 'Visit Smart Pricer', href: 'https://www.smart-pricer.com/' }],
      },
    ],
  },
  small: {
    title: 'Smaller things',
    items: [
      {
        name: 'strongly-typed-env',
        text: 'Generates TypeScript types from your .env files. Published on npm.',
        href: 'https://www.npmjs.com/package/strongly-typed-env',
      },
      {
        name: 'CDN Checker',
        text: 'A VS Code extension that finds broken, redirecting or oversized external links in a project.',
        href: 'https://marketplace.visualstudio.com/items?itemName=AliBarznji.cdn-checker',
      },
      {
        name: 'WiZRX chat',
        text: 'Real-time chat for a business collaboration tool.',
        href: 'https://masterwizr.com/wizr-x/',
      },
      {
        name: 'This site',
        text: 'Bilingual, built with Next.js.',
        href: 'https://github.com/Ali559/portfolio',
      },
    ],
  },
  experience: {
    title: "Where I've worked",
    items: [
      {
        company: 'Codex Solutions',
        href: 'https://codexsolutions.io/',
        role: 'Backend engineer',
        period: 'Oct 2026 – now',
        text: 'Codex builds custom web and mobile software for its clients. On one of their projects I moved the entire backend to a microservice architecture, with message queues, Redis caching and dependency injection throughout, and separate services for notifications, real-time sockets and scheduled jobs.',
      },
      {
        company: 'Lalengi',
        href: 'https://lalengi.com/en',
        role: 'Backend engineer, remote',
        period: 'Jul 2026 – now',
        text: 'Lalengi is a super app for food, groceries, shopping, taxi rides and parcels. I built its backend from the ground up: the architecture, the PostgreSQL database design across 297 tables, the infrastructure and DevOps, and the WebSocket service and background workers that run beside the API.',
      },
      {
        company: 'Learnio',
        role: 'Team lead, software engineer',
        period: '2023 – Mar 2026',
        text: 'I joined as a software engineer and became team lead eight months later. I led cross-functional projects and oversaw front-end and back-end work in Vue, React, Node.js and Go.',
      },
      {
        company: 'Dev Centre House',
        role: 'Software engineer',
        period: '2021 – 2023',
        text: 'I built messaging backends and API proxies for client products, including SEEYOU and Smart Pricer. I was named employee of the month twice and picked for the company\'s "Navy SEAL" team of top engineers.',
      },
    ],
  },
  outside: {
    title: 'Away from the keyboard',
    text: "I read a lot, mostly philosophy and novels, and I keep going back to Dostoevsky. While I work, Chopin's nocturnes are usually playing in the background. I play games for their stories, the kind that feel like a novel you get to step into. I travel at least once a year, and since I have friends in many countries, most trips feel like visiting family. For someone who loves stories this much, it's a little strange that I've only been to the cinema once.",
  },
  contact: {
    title: 'Write to me',
    text: "Email is the best way to reach me. I'm open to new roles, interesting projects and conversations about building software.",
    resume: 'Résumé (PDF)',
  },
  footer: '© 2026 Ali Barznji',
}

const ckb: SiteContent = {
  name: 'عەلی بەرزنجی',
  nav: { work: 'کارەکان', experience: 'ئەزموون', contact: 'پەیوەندی', devlog: 'بلۆگ' },
  switchLanguage: { label: 'English', aria: 'Read this site in English' },
  theme: { toDark: 'گۆڕین بۆ ڕووکاری تاریک', toLight: 'گۆڕین بۆ ڕووکاری ڕووناک' },
  menu: { open: 'کردنەوەی لیست', close: 'داخستنی لیست' },
  hero: {
    lede: 'من ئەندازیاری نەرمەکاڵام و زیاتر لەسەر باکئێند کار دەکەم. باکئێندی Lalengi م دیزاین کرد و دروستم کرد، سوپەر ئەپێک بۆ خواردن و تاکسی و گەیاندن، و لە Codex Solutions لەسەر پرۆژەی کڕیارەکان کار دەکەم. لە کاتی خۆمدا Qasa دروست دەکەم، بەڕێوەبەرێکی وشەی نهێنی بۆ عێراق، لەگەڵ ئامراز بۆ قوتابیانی کوردستان، کە نیشتمانی خۆمە.',
    emailMe: 'ئیمەیڵم بۆ بنێرە',
    seeWork: 'کارە هەڵبژێردراوەکان ببینە',
  },
  work: {
    title: 'کارە هەڵبژێردراوەکان',
    builtLegend: 'ئەو بەشانەی من دروستم کردوون',
    items: [
      {
        id: 'lalengi',
        diagram: 'lalengi',
        image: { src: '/img/projects/lalengi.png', width: 2976, height: 1854 },
        name: 'Lalengi',
        summary: 'باکئێندی سوپەر ئەپێک بۆ خواردن و کەلوپەلی بازاڕ و تاکسی و گەیاندنی پاکێت.',
        story:
          'لە دوورەوە لە سەرەتاوە تا کۆتایی دروستم کرد: ئەرکیتێکچەرەکە، داتابەیسێکی PostgreSQL بە ٢٩٧ خشتە، ژێرخان و DevOps. API یەکی NestJS هەموو نووسینەکان بەڕێوە دەبات. دەروازەیەکی WebSocket ی جیا ڕووداوە ڕاستەوخۆکان، وەک جووڵەی شۆفێرێک لەسەر نەخشە، بۆ شەش ئەپ دەنێرێت، و workerەکان ڕیزی کارەکان و کارە خشتەدانراوەکان جێبەجێ دەکەن.',
        stack: ['NestJS', 'PostgreSQL', 'Redis', 'BullMQ'],
        links: [{ label: 'سەردانی Lalengi بکە', href: 'https://lalengi.com/en' }],
      },
      {
        id: 'codex',
        diagram: 'codex',
        name: 'Codex Solutions',
        summary: 'دابەشکردنی باکئێندی کڕیارێک بۆ چەند سێرڤیسێک کە هەر یەکەیان بە جیا گەورە دەبێت.',
        story:
          'لە یەکێک لە پرۆژەکانی کڕیارانی Codex، باکئێندەکەم لە یەک ئەپەوە کرد بە چوار پرۆسێس: REST API، دەروازەیەکی Socket.IO، سێرڤیسی ئاگادارکردنەوە و سێرڤیسی cron، کە هەموویان لە ڕێگەی ڕیزەکانی Redis ـەوە قسە لەگەڵ یەکتر دەکەن. هاوکات کاشکردن بە Redis و dependency injection م لە هەموو بەشەکاندا زیاد کرد، بۆ ئەوەی هەر بەشێک بە جیا دابنرێت و گەورە بکرێت.',
        stack: ['NestJS', 'Redis', 'BullMQ', 'Socket.IO'],
        links: [{ label: 'سەردانی Codex بکە', href: 'https://codexsolutions.io/' }],
      },
      {
        id: 'qasa',
        diagram: 'qasa',
        phone: { src: '/img/projects/qasa-ckb.webp', width: 600, height: 1304 },
        name: 'Qasa',
        summary:
          'بەڕێوەبەرێکی وشەی نهێنی بۆ iOS و Android کە ڤۆڵتەکەی هەرگیز لە مۆبایلەکە دەرناچێت.',
        story:
          'Qasa بەرهەمی خۆمە و پارەکەی لە ڕێگەی جزدانە ئەلیکترۆنییەکانی عێراقەوە دەدرێت. هەموو وشەیەکی نهێنی لەسەر ئامێرەکە شفرە دەکرێت و هەر لەوێ دەمێنێتەوە. سێرڤەرەکەی Rust هەرگیز ڤۆڵتەکە نابینێت: تەنها ئامێرەکان دەژمێرێت و Premium دەفرۆشێت، کە VPN ی WireGuard و ئامێری زیاتر و پشکنینی وشە نهێنییە دزەکراوەکان زیاد دەکات. هەمووی خۆم دروستم کرد: API ی Axum و workerەکەی، ئەو agentـەی لیستی peerەکانی هەر سێرڤەرێکی VPN ڕێک دەخات، ئەپە ڕەسەنەکانی iOS و Android و داشبۆردێکی بەڕێوەبردن بە Vue.',
        stack: ['Rust', 'PostgreSQL', 'SwiftUI', 'Kotlin', 'WireGuard'],
        links: [
          { label: 'سەردانی Qasa بکە', href: 'https://qasa-app.com' },
          { label: 'کۆد', href: 'https://github.com/Ali559/Qasa' },
        ],
      },
      {
        id: 'zankoline',
        name: 'Zankoline',
        summary: 'ڕێبەرێکی وەرگرتن لە زانکۆ بۆ قوتابیانی کوردستان.',
        story:
          'قوتابی نمرەکەی دەنووسێت و دەبینێت بە ڕاستی دەتوانێت لە چ بەشێک وەربگیرێت، پاشان هەڵبژاردنەکانی بە پێی گرنگی ڕیز دەکات و فۆرمی وەرگرتن چاپ دەکات. بە تەواوی بێ ئینتەرنێت وەک PWA کار دەکات، بە ئینگلیزی و کوردیی سۆرانی، بێ سێرڤەر و بێ هەژمار. هێشتنەوەی هەموو شتێک لەسەر ئامێرەکە کاریگەریی لەسەر نزیکەی هەموو بڕیارەکانی تر هەبوو.',
        stack: ['React', 'TypeScript', 'Dexie', 'PWA'],
        image: { src: '/img/projects/zankoline-crop.png', width: 1500, height: 1200 },
        links: [
          { label: 'چۆنیەتیی دروستکردنی بخوێنەوە (ئینگلیزی)', href: '/devlog/zankoline' },
          { label: 'ئەپەکە بکەرەوە', href: 'https://zankoline-pwa.vercel.app' },
          { label: 'کۆد', href: 'https://github.com/Ali559/zankoline-pwa' },
        ],
      },
      {
        id: 'inzpiri',
        diagram: 'inzpiri',
        name: 'Inzpiri',
        summary: 'پلاتفۆرمێکی فێرکاریی ئۆنلاین بۆ مامۆستایان و قوتابیان.',
        story:
          'ئەمە ئەو بەرهەمەیە کە لە Learnio سەرپەرشتیم دەکرد. تیمێکی تێکەڵم بەڕێوە دەبرد و لە هەموو بەشەکانی سیستەمەکەدا کارم دەکرد، لە ڕووکاری Vue ـەوە تا خزمەتگوزارییەکانی Go لەگەڵ MongoDB و Redis، لەسەر AWS. هەشت مانگ دوای دەستپێکردنم بووم بە سەرۆکی تیم.',
        stack: ['Vue', 'Go', 'MongoDB', 'AWS'],
        links: [{ label: 'سەردانی وەشانی بێتا بکە', href: 'https://beta.inzpiri.com' }],
      },
      {
        id: 'seeyou',
        diagram: 'seeyou',
        image: { src: '/img/projects/seeyou.png', width: 2976, height: 1854 },
        name: 'SEEYOU',
        summary: 'باکئێندی نامەناردن بۆ پلاتفۆرمێکی پەیوەندیی تیمەکان.',
        story:
          'لە Dev Centre House باکئێندی چاتی SEEYOU م دروست کرد و پاراستم: سیستەمێکی نامەناردن لەسەر RabbitMQ و Redis کە بۆ گەورەبوون دیزاین کرابوو. هەروەها پەیوەستکردنی Slack و Telegram م دروست کرد کە نامەکانی لە هەمان کاتدا لە نێوان SEEYOU و ئەو پلاتفۆرمانەدا دەگواستەوە.',
        stack: ['Node.js', 'RabbitMQ', 'Redis', 'NestJS'],
        links: [{ label: 'سەردانی SEEYOU بکە', href: 'https://seeyou.eu' }],
      },
      {
        id: 'smart-pricer',
        diagram: 'smart-pricer',
        image: { src: '/img/projects/smart-pricer.png', width: 2980, height: 1564 },
        name: 'Smart Pricer',
        summary: 'نرخدانانی گۆڕاو بۆ شوێنەکانی خلیسکێنە، وەرزش و سینەما.',
        story:
          'سەرپەرشتیی دروستکردنی ئەو پرۆکسییەی باکئێندم کرد کە لە پێش API ـەکانی بلیت و نرخی Smart Pricer دادەنرێت، و خێرایی ئەو API ـیانەم باشتر کرد.',
        stack: ['Node.js', 'Express', 'Redis'],
        links: [{ label: 'سەردانی Smart Pricer بکە', href: 'https://www.smart-pricer.com/' }],
      },
    ],
  },
  small: {
    title: 'کاری بچووکتر',
    items: [
      {
        name: 'strongly-typed-env',
        text: 'جۆرەکانی TypeScript لە فایلەکانی ‎.env‎ دروست دەکات. لەسەر npm بڵاوکراوەتەوە.',
        href: 'https://www.npmjs.com/package/strongly-typed-env',
      },
      {
        name: 'CDN Checker',
        text: 'پێوەکراوێکی VS Code کە لینکی دەرەکیی شکاو، ئاڕاستەکراوە یان زۆر قورس لە پرۆژەدا دەدۆزێتەوە.',
        href: 'https://marketplace.visualstudio.com/items?itemName=AliBarznji.cdn-checker',
      },
      {
        name: 'WiZRX chat',
        text: 'چاتی ڕاستەوخۆ بۆ ئامرازێکی هاوکاریی کۆمپانیاکان.',
        href: 'https://masterwizr.com/wizr-x/',
      },
      {
        name: 'ئەم ماڵپەڕە',
        text: 'دوو زمانە، بە Next.js دروست کراوە.',
        href: 'https://github.com/Ali559/portfolio',
      },
    ],
  },
  experience: {
    title: 'شوێنەکانی کارکردنم',
    items: [
      {
        company: 'Codex Solutions',
        href: 'https://codexsolutions.io/',
        role: 'ئەندازیاری باکئێند',
        period: 'تشرینی یەکەمی ٢٠٢٦ – ئێستا',
        text: 'Codex نەرمەکاڵای وێب و مۆبایل بۆ کڕیارەکانی دروست دەکات. لە یەکێک لە پرۆژەکانیاندا تەواوی باکئێندەکەم گواستەوە بۆ ئەرکیتێکچەری مایکرۆسێرڤیس، بە ڕیزی نامە و کاشکردن بە Redis و dependency injection لە هەموو بەشەکاندا، لەگەڵ سێرڤیسی جیاواز بۆ ئاگادارکردنەوە و پەیوەندیی ڕاستەوخۆ و کارە خشتەدانراوەکان.',
      },
      {
        company: 'Lalengi',
        href: 'https://lalengi.com/en',
        role: 'ئەندازیاری باکئێند، لە دوورەوە',
        period: 'تەممووزی ٢٠٢٦ – ئێستا',
        text: 'Lalengi سوپەر ئەپێکە بۆ خواردن و کەلوپەلی بازاڕ و شۆپینگ و تاکسی و گەیاندنی پاکێت. باکئێندەکەیم لە سفرەوە دروست کرد: ئەرکیتێکچەرەکە، دیزاینی داتابەیسی PostgreSQL بە ٢٩٧ خشتە، ژێرخان و DevOps، و سێرڤیسی WebSocket و ئەو workerانەی لە تەنیشت API ـیەکەوە کار دەکەن.',
      },
      {
        company: 'Learnio',
        role: 'سەرۆکی تیم، ئەندازیاری نەرمەکاڵا',
        period: '٢٠٢٣ – ئازاری ٢٠٢٦',
        text: 'وەک ئەندازیاری نەرمەکاڵا دەستم پێکرد و هەشت مانگ دواتر بووم بە سەرۆکی تیم. سەرپەرشتیی پرۆژە تێکەڵەکان و کاری ڕووکار و باکئێندم کرد بە Vue و React و Node.js و Go.',
      },
      {
        company: 'Dev Centre House',
        role: 'ئەندازیاری نەرمەکاڵا',
        period: '٢٠٢١ – ٢٠٢٣',
        text: 'باکئێندی نامەناردن و پرۆکسیی API م بۆ بەرهەمی کڕیارەکان دروست کرد، لەوانە SEEYOU و Smart Pricer. دوو جار وەک کارمەندی مانگ هەڵبژێردرام و بۆ تیمی «Navy SEAL»ی کۆمپانیاکە هەڵبژێردرام، کە تیمی باشترین ئەندازیارەکان بوو.',
      },
    ],
  },
  outside: {
    title: 'دوور لە کیبۆرد',
    text: 'زۆر دەخوێنمەوە، زیاتر فەلسەفە و ڕۆمان، و هەر جارێک دەگەڕێمەوە بۆ دۆستۆیڤسکی. کاتێک کار دەکەم، زۆربەی کات نۆکتۆرنەکانی شۆپان لە پشتەوە لێدەدرێن. یاری بۆ چیرۆکەکانیان دەکەم، ئەو یاریانەی وەک ڕۆمانێک وان کە خۆت دەچیتە ناویەوە. لانیکەم ساڵی جارێک گەشت دەکەم، و چونکە لە زۆر وڵات هاوڕێم هەیە، زۆربەی گەشتەکانم وەک سەردانی خێزان وان. بۆ کەسێک کە ئەوەندە چیرۆکی خۆش بوێت، کەمێک سەیرە کە تەنها یەک جار چوومەتە سینەما.',
  },
  contact: {
    title: 'نامەم بۆ بنووسە',
    text: 'ئیمەیڵ باشترین ڕێگایە بۆ گەیشتن بە من. ئامادەم بۆ هەلی کاری نوێ، پرۆژەی سەرنجڕاکێش و گفتوگۆ دەربارەی دروستکردنی نەرمەکاڵا.',
    resume: 'سیڤی (PDF)',
  },
  footer: '© ٢٠٢٦ عەلی بەرزنجی',
}

export const content: Record<Locale, SiteContent> = { en, ckb }
