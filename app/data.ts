import { filmfiesta, buzznet, nivaas } from "@/public/assets";

const projects = [
  {
    id: 1,
    name: "FilmFiesta",
    description:
      "A movie review web application that allows users to sign up/sign in and save movies to their favorite list and remove items from it. They can also write reviews for movies and delete them.",
    image: filmfiesta,
    link: "https://film-fiesta.vercel.app/",
    github: "https://github.com/noobmaster432/FilmFiesta",
    tech: ["React", "Redux", "Material UI", "Node.js", "TMDB API"],
  },
  {
    id: 2,
    name: "BuzzNet",
    description:
      "A Twitter clone which offers features like authentication, notifications, image upload, and responsive layout. It also provides comments/replies, and likes system to engage with posts.",
    image: buzznet,
    link: "https://buzznet-tweet.vercel.app/",
    github: "https://github.com/noobmaster432/buzznet",
    tech: ["Next.JS", "Zustand", "Tailwind CSS", "Prisma", "MongoDB"],
  },
  {
    id: 3,
    name: "Nivaas",
    description:
      "A fully functional MERN dashboard real estate application that provides complete CRUD functionalities, authentication, pagination, sorting, filtering, and more. ",
    image: nivaas,
    link: "https://nivaas.vercel.app/",
    github: "https://github.com/noobmaster432/nivaas",
    tech: ["React", "Material UI", "Cloudinary","TypeScript", "MongoDB"],
  },
];

const archives = [
  {
    id: 1,
    name: "Project Pilot",
    description:
      "A project management system that provides effective project management tools. It includes Kanban features for monitoring progress, a Calendar for scheduling, and Conversations as a discussion forum for effective project management.",
    link: "https://project-pilot-ten.vercel.app/",
    github: "https://github.com/noobmaster432/ProjectPilot",
    tech: ["React", "Tailwind CSS", "Node.js", "MongoDB", "Zustand"],
  },
  {
    id: 2,
    name: "Yaatra",
    description:
      "An Airbnb clone featuring a date and calendar booking functionality, a fast search functionality, UI/UX design with Tailwind CSS and Chakra UI, Mapbox integration for listing locations, and a backend with data relationships managed using Sanity Studio.",
    link: "https://yaatra.vercel.app/",
    github: "https://github.com/noobmaster432/yaatra",
    tech: ["Next.JS", "Tailwind CSS", "Mapbox", "Sanity Studio"],
  },
  {
    id: 3,
    name: "BaatChit",
    description:
      "A Realtime private chat web application built using React and Firebase which provides users with a seamless chatting experience, secure authentication, and real-time updates of chat messages.",
    link: "https://baatchit-nb.vercel.app/",
    github: "https://github.com/noobmaster432/BaatChit",
    tech: ["React", "Firebase", "SaSS"],
  },
  {
    id: 4,
    name: "The Illuminate",
    description:
      "A Real-Time News Application featuring dynamic and static data handling, dark mode, searching capabilities, dynamic page routing, pulling data from MediaStack News API, using Stepzen to launch a GraphQL interface and using TypeScript for fewer bugs and errors",
    link: "https://the-illuminate.vercel.app/",
    github: "https://github.com/noobmaster432/the-illuminate",
    tech: [
      "Next.JS",
      "Tailwind CSS",
      "TypeScript",
      "MediaStack API",
      "Stepzen",
    ],
  },
  {
    id: 5,
    name: "Blog Avenue",
    description:
      "A fully responsive headless CMS blog application built using Next.js, Tailwind CSS, Graph QL, and HyGraph that features featured and recent posts, categories, full markdown articles, author information, comments and more.",
    link: "https://blog-avenue.vercel.app/",
    github: "https://github.com/noobmaster432/Blog-Avenue",
    tech: ["Next.JS", "Tailwind CSS", "Graph QL", "HyGraph"],
  },
  {
    id: 6,
    name: "KhabrAI",
    description:
      "An Artificial Intelligence React News Application that utilizes Alan AI for speech recognition, pulling data from News API and Material-UI for the user interface. The application enables users to control every aspect of the app using just their voice.",
    link: "https://khabr-ai.netlify.app/",
    github: "https://github.com/noobmaster432/khabrAI",
    tech: ["React", "Material UI", "Alan AI", "News API"],
  },
];

const experience = [
  {
    id: 1,
    name: "Full Stack Developer Intern",
    company: "Coforge",
    duration: "May 2023 - Present",
    points: [
      "Developed and enhanced a Dashboarding and Reporting Tool using Ruby on Rails and MySQL.",
      "Integrated data visualization components to present data in visually appealing and informative ways.",
      "Collaborated with a team of developers to implement new features, including data visualization components and interactive dashboards, resulting in improved data analysis and decision-making capabilities.",
    ],
  },
  {
    id: 2,
    name: "GDSC Core Member",
    company: "GDSC IIITR",
    duration: "Dec 2022 - Present",
    points: [
        "Organized and conducted workshops and training sessions on Javascript, React.js and GitHub.",
        "Developed and delivered high-quality web applications utilizing modern technologies.",
        "Provided guidance and support to club members on web development projects, troubleshooting code issues and offering coding best practices.",
    ],
  },
];

export { projects, archives, experience };