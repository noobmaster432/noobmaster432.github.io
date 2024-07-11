import { filmfiesta, buzznet, nivaas } from "@/public/assets";
import { html, css, js, react, ts, node, mongo, git, cpp, nextjs, tailwind, zustand, python, mysql, redux, express, vs, github, postman, ruby, linux } from "@/public/assets/skills";

const about = [
  {
    id: 1,
    description:
      "Hello there!👋 I'm a Software Engineer with a knack for Competitive Programming and a pre-final year BTech undergrad at the Indian Institute of Information Technology (IIIT) Ranchi!🎓",
  },
  {
    id: 2,
    description:
      "I love long walks with music on🎧, writing clean code, and pushing my skills to the limit. My interests include joining an exciting team of passionate people, personal growth, and making silly faces.",
  },
  {
    id: 3,
    description:
      "Beyond my technical skills, I bring humor to the table. A good laugh can create a positive work environment and foster creativity.",
  },
];

const skills = [
  {
    id: 1,
    name: "HTML",
    image: html,
    field: "languages",
  },
  {
    id: 2,
    name: "CSS",
    image: css,
    field: "languages",
  },
  {
    id: 3,
    name: "JavaScript",
    image: js,
    field: "languages",
  },
  {
    id: 4,
    name: "TypeScript",
    image: ts,
    field: "languages",
  },
  {
    id: 5,
    name: "C++",
    image: cpp,
    field: "languages",
  },
  {
    id: 6,
    name: "Python",
    image: python,
    field: "languages",
  },
  {
    id: 7,
    name: "Ruby",
    image: ruby,
    field: "languages",
  },
  {
    id: 8,
    name: "React.js",
    image: react,
    field: "frameworks",
  },
  {
    id: 9,
    name: "Node.js",
    image: node,
    field: "frameworks",
  },
  {
    id: 10,
    name: "Next.js",
    image: nextjs,
    field: "frameworks",
  },
  {
    id: 11,
    name: "Express.js",
    image: express,
    field: "frameworks",
  },
  {
    id: 12,
    name: "Tailwind CSS",
    image: tailwind,
    field: "frameworks",
  },
  {
    id: 13,
    name: "Redux",
    image: redux,
    field: "frameworks",
  },
  {
    id: 14,
    name: "Zustand",
    image: zustand,
    field: "frameworks",
  },
  {
    id: 15,
    name: "Linux",
    image: linux,
    field: "others",
  },
  {
    id: 16,
    name: "Git",
    image: git,
    field: "others",
  },
  {
    id: 17,
    name: "GitHub",
    image: github,
    field: "others",
  },
  {
    id: 18,
    name: "VS Code",
    image: vs,
    field: "others",
  },
  {
    id: 19,
    name: "Postman",
    image: postman,
    field: "others",
  },
  {
    id: 20,
    name: "MongoDB",
    image: mongo,
    field: "others",
  },
  {
    id: 21,
    name: "MySQL",
    image: mysql,
    field: "others",
  },
];

const projects = [
  {
    id: 1,
    name: "FilmFiesta",
    description:
      "A dynamic movie review web application for cinephiles that empowers users to explore, review, and interact with their favorite movies and TV series. ",
    image: filmfiesta,
    link: "https://film-fiesta.vercel.app/",
    github: "https://github.com/noobmaster432/FilmFiesta",
    tech: ["React.js", "Redux", "Material UI", "Node.js", "MongoDB", "TMDB API"],
  },
  {
    id: 2,
    name: "BuzzNet",
    description:
      "A vibrant and feature-packed Twitter clone that brings the essence of social networking to life. Built using a powerful stack including Next.js, Tailwind CSS, Prisma, Zustand, and MongoDB.",
    image: buzznet,
    link: "https://buzznet-tweet.vercel.app/",
    github: "https://github.com/noobmaster432/buzznet",
    tech: ["Next.js", "Zustand", "Tailwind CSS", "TypeScript", "Prisma", "MongoDB"],
  },
  {
    id: 3,
    name: "Nivaas",
    description:
      "A fully functional full-stack MERN dashboard application tailored with comprehensive CRUD functionalities, authentication, advanced data handling, and an elegant user interface.",
    image: nivaas,
    link: "https://nivaas.vercel.app/",
    github: "https://github.com/noobmaster432/nivaas",
    tech: ["React.js", "Material UI", "Cloudinary", "TypeScript", "MongoDB"],
  },
];

const archives = [
  {
    id: 1,
    name: "Whisper",
    description:
      "A tech-forward Chat application that offers Unified live communication features, voice and video calls, live audio waveforms for voice notes, emoji support, image sharing and seamless real-time messaging through socket.io",
    link: "https://whisper-buzz.vercel.app/",
    github: "https://github.com/noobmaster432/whisper",
    tech: ["Next.js", "Node.js", "Socket-io"],
  },
  {
    id: 2,
    name: "Project Pilot",
    description:
      "An innovative project management system accompanied by Github repository integration and incorporated with Kanban features for tracking progress, Calendar for scheduling, and Conversations as a discussion platform",
    link: "https://project-pilot-ten.vercel.app/",
    github: "https://github.com/noobmaster432/ProjectPilot",
    tech: ["React.js", "Node.js", "Zustand"],
  },
  {
    id: 3,
    name: "Yaatra",
    description:
      "An Airbnb clone featuring a date and calendar booking functionality, a fast search functionality, UI/UX design with Tailwind CSS, Mapbox integration for listing locations, and a backend with data relationships managed using Sanity Studio.",
    link: "https://yaatra.vercel.app/",
    github: "https://github.com/noobmaster432/yaatra",
    tech: ["Next.js", "Tailwind CSS", "Sanity"],
  },
  {
    id: 4,
    name: "Pics Palette",
    description:
      "A full-stack social media application which allows users to share their experiences by posting pictures along with captivating stories, and other users can interact with these posts by liking and commenting on them.",
    link: "https://picture-book-iiitr.vercel.app/",
    github: "https://github.com/gdsciiitr/pics_palette",
    tech: ["React.js", "Node.js", "Redux"],
  },
  {
    id: 5,
    name: "The Illuminate",
    description:
      "A Real-Time News Application featuring dynamic data handling, dark mode, searching capabilities, pulling data from MediaStack News API, using Stepzen to launch a GraphQL interface and using TypeScript for fewer bugs and errors.",
    link: "https://the-illuminate.vercel.app/",
    github: "https://github.com/noobmaster432/the-illuminate",
    tech: ["Next.js", "MediaStack", "Stepzen"],
  },
  {
    id: 6,
    name: "BaatChit",
    description:
      "A Realtime private chat web application built using React and Firebase. It provides users with a secure authentication, real-time updates of chat messages, and seamless chatting experience to communicate in real time.",
    link: "https://baatchit-nb.vercel.app/",
    github: "https://github.com/noobmaster432/BaatChit",
    tech: ["React.js", "Firebase", "SaSS"],
  },
  {
    id: 7,
    name: "Blog Avenue",
    description:
      "A fully responsive headless CMS blog application built using Next.js, Tailwind CSS, Graph QL, and HyGraph that features featured and recent posts, categories, full markdown articles, author information, comments and more.",
    link: "https://blog-avenue.vercel.app/",
    github: "https://github.com/noobmaster432/Blog-Avenue",
    tech: ["Next.js", "Tailwind CSS", "Graph QL"],
  },
  {
    id: 8,
    name: "KhabrAI",
    description:
      "An Artificial Intelligence News Application that utilizes Alan AI for speech recognition, pulling data from News API and Material-UI for the user interface. The application enables users to control every aspect of the app using just their voice.",
    link: "https://khabr-ai.netlify.app/",
    github: "https://github.com/noobmaster432/khabrAI",
    tech: ["React.js", "Alan AI", "Material UI"],
  },
];

const experience = [
  {
    id: 1,
    name: "Software Developement Engineer Intern",
    company: "Scaler",
    duration: "May 2024 - Jul 2024",
    points: [
      "Developed and maintained Scaler Landing Page, revamping it with Next.js and Tailwind CSS, which led to a 2.5% increase in the V2L (Visitor to Lead) conversion rate and a notable 5.4% improvement in user engagement and retention metrics.",
      "Actively participated in Agile sprints and contributed to sprint planning sessions, collaborating closely with UI/UX designers to ensure seamless design implementation and facilitating smooth staging deployments.",
      "Implemented tracking using Google Tag Manager across the landing page to monitor visitor metrics, clicks, and leads for comprehensive analytics.",
      "Continuously monitored and analyzed application performance using tools like Google Lighthouse, improved desktop performance scores from 40 to 82 and mobile performance scores from 30 to 70 by implementing browser and server-side caching, optimizing images with Sharp and Next/Image, and leveraging SSR (Server-Side Rendering) for enhanced page load times.",
    ],
  },
  {
    id: 2,
    name: "Software Developer Intern",
    company: "Coforge",
    duration: "May 2023 - Jul 2023",
    points: [
      "Contributed to the development of a comprehensive Dashboarding and Reporting Tool utilizing Ruby on Rails and MySQL.",
      "Resolved numerous UI bugs, engineered reusable and modular UI components using Tailwind CSS, integrated Chart.js for data visualization, and implemented paging and filters to ensure design consistency and enhance user interface reliability.",
      "Collaborated cross-functionally to architect clean, maintainable code while implementing authentication, authorization, and caching strategies, thereby enhancing application efficiency and stronger data security.",
    ],
  },
  // {
  //   id: 3,
  //   name: "GDSC Core Member",
  //   company: "GDSC IIITR",
  //   duration: "Dec 2022 - Aug 2023",
  //   points: [
  //     "Conducted 3+ workshops and training sessions on web development topics, including JavaScript and GitHub.",
  //     "Organized inaugural college-level hackathon leveraging Google technologies to address real-world challenges.",
  //     "Offered valuable guidance and support to club members, sharing coding best practices and resolving code-related challenges.",
  //   ],
  // },
];

export { projects, archives, experience, about, skills };