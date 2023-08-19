import { filmfiesta, buzznet, nivaas } from "@/public/assets";

const projects = [
  {
    id: 1,
    name: "FilmFiesta",
    description:
      "A dynamic movie review web application for cinephiles that empowers users to explore, review, and interact with their favorite movies and TV series. ",
    image: filmfiesta,
    link: "https://film-fiesta.vercel.app/",
    github: "https://github.com/noobmaster432/FilmFiesta",
    tech: ["Reactjs", "Redux", "Material UI", "Node.js", "MongoDB", "TMDB API"],
  },
  {
    id: 2,
    name: "BuzzNet",
    description:
      "A vibrant and feature-packed Twitter clone that brings the essence of social networking to life. Built using a powerful stack including Next.js, Tailwind CSS, Prisma, Zustand, and MongoDB.",
    image: buzznet,
    link: "https://buzznet-tweet.vercel.app/",
    github: "https://github.com/noobmaster432/buzznet",
    tech: [
      "Next.JS",
      "Zustand",
      "Tailwind CSS",
      "TypeScript",
      "Prisma",
      "MongoDB",
    ],
  },
  {
    id: 3,
    name: "Nivaas",
    description:
      "A fully functional full-stack MERN dashboard application tailored with comprehensive CRUD functionalities, authentication, advanced data handling, and an elegant user interface.",
    image: nivaas,
    link: "https://nivaas.vercel.app/",
    github: "https://github.com/noobmaster432/nivaas",
    tech: ["Reactjs", "Material UI", "Cloudinary", "TypeScript", "MongoDB"],
  },
];

const archives = [
  {
    id: 1,
    name: "Whisper",
    description:
      "A feature-rich Full Stack Chat application that brings you a seamless messaging experience. Whisper offers real-time chat functionality, voice notes, emoji support, video calls, voice calls, and a plethora of other features. ",
    link: "https://whisper-buzz.vercel.app/",
    github: "https://github.com/noobmaster432/whisper",
    tech: ["Nextjs", "Node.js", "Socket-io"],
  },
  {
    id: 2,
    name: "Project Pilot",
    description:
      "A project management system that provides streamlined and effective project management tools like Kanban features for monitoring progress, a Calendar for scheduling, and Conversations as a discussion forum.",
    link: "https://project-pilot-ten.vercel.app/",
    github: "https://github.com/noobmaster432/ProjectPilot",
    tech: ["Reactjs", "Node.js", "Zustand"],
  },
  {
    id: 3,
    name: "Yaatra",
    description:
      "An Airbnb clone featuring a date and calendar booking functionality, a fast search functionality, UI/UX design with Tailwind CSS, Mapbox integration for listing locations, and a backend with data relationships managed using Sanity Studio.",
    link: "https://yaatra.vercel.app/",
    github: "https://github.com/noobmaster432/yaatra",
    tech: ["Next.js", "Tailwind CSS", "Sanity Studio"],
  },
  {
    id: 4,
    name: "Pics Palette",
    description:
      "A full-stack social media application which allows users to share their experiences by posting pictures along with captivating stories, and other users can interact with these posts by liking and commenting on them.",
    link: "https://picture-book-iiitr.vercel.app/",
    github: "https://github.com/gdsciiitr/pics_palette",
    tech: ["Reactjs", "Node.js", "Redux"],
  },
  {
    id: 5,
    name: "The Illuminate",
    description:
      "A Real-Time News Application featuring dynamic data handling, dark mode, searching capabilities, pulling data from MediaStack News API, using Stepzen to launch a GraphQL interface and using TypeScript for fewer bugs and errors.",
    link: "https://the-illuminate.vercel.app/",
    github: "https://github.com/noobmaster432/the-illuminate",
    tech: ["Next.js", "MediaStack API", "Stepzen"],
  },
  {
    id: 6,
    name: "BaatChit",
    description:
      "A Realtime private chat web application built using React and Firebase. It provides users with a secure authentication, real-time updates of chat messages, and seamless chatting experience to communicate in real time.",
    link: "https://baatchit-nb.vercel.app/",
    github: "https://github.com/noobmaster432/BaatChit",
    tech: ["Reactjs", "Firebase", "SaSS"],
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
    tech: ["Reactjs", "Material UI", "Alan AI"],
  },
];

const experience = [
  {
    id: 1,
    name: "Software Developer Intern",
    company: "Coforge",
    duration: "May 2023 - Jul 2023",
    points: [
      "Pioneered the comprehensive development and enhancement of a modern Dashboarding and Reporting Tool using Ruby on Rails and MySQL, resulting in a significant boost in data analysis efficiency.",
      "Amplified data exploration capabilities through the implementation of interactive dashboards and dynamic data visualizations.",
      "Streamlined application performance and scalability by employing efficient code execution and caching techniques, leading to a substantial reduction in page load time.",
    ],
  },
  {
    id: 2,
    name: "GDSC Core Member",
    company: "GDSC IIITR",
    duration: "Dec 2022 - Aug 2023",
    points: [
      "Skillfully curated and led engaging workshops and training sessions on JavaScript, React.js, and GitHub.",
      "Developed and delivered high-quality web applications utilizing modern technologies.",
      "Provided valuable guidance and support to club members, offering coding best practices and troubleshooting code issues to foster a collaborative and proficient learning environment",
    ],
  },
];

export { projects, archives, experience };