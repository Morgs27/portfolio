import { ProjectProps } from "../assets/components/Project/Project";

const projects: ProjectProps[] = [
  {
    name: "Mythelix",
    description:
      "Modern website built for users to create custom AI generated cards. Involves multiple components including an admin panel for managing cards and a python api for generating card images using an open source image generation model.",
    websiteLink: "https://mythelix.com/Guest",
    githubLink: "https://github.com/Morgs27/mythelix",
    image: "./mythelix.png",
    techStack: ["NextJS", "MongoDB", "Express", "Python", "TypeScript", "Vercel"],
    featured: true,
    color: "rgb(235, 164, 219)",
  },
  {
    name: "TSP Visualizer",
    description:
      "An interactive visualisation of a group of the algorithms that can be used to solve 'The Traveling Salesman Problem'. The TSP problem is a well known mathematical optimization problem where the aim is to find the shortest distance between a set of points.",
    websiteLink: "https://tspvisualiser.dev",
    githubLink: "https://github.com/Morgs27/pathfinding-visualizer",
    image: "./tsp.png",
    techStack: ["React", "TypeScript", "Vite", "Jest"],
    featured: true,
    color: "rgb(192, 218, 116)",
  },
  {
    name: "SWGOH Team Manager",
    description:
      "Companion tool for the mobile game 'Star Wars Galaxy of Heroes'. Use the guest mode to try out the website's features. The back-end is built using PHP with a MySQL database, with the front-end being comprised of vanilla HTML, CSS and JS. The SWGOH.gg API is used to retrieve player data along with a stat calculation API to process the values.",
    websiteLink: "https://swgohteammanager.com/use_as_guest.php",
    githubLink: "https://github.com/Morgs27/swgoh-website",
    image: "./home.PNG",
    techStack: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
    featured: true,
    color: "rgb(145, 164, 230)",
  },
  {
    name: "Outfit of Tomorrow",
    description:
      "Freelance website built for the company 'Outfit-of-Tomorrow'. Contains an interactive design desk allowing users to build their possible outfits with a selection of sustainable products. Uses the Sanity CMS to store product and blog data, making it easy to maintain. The frontend is built using vanilla HTML, CSS and JS.",
    websiteLink: "https://outfit-of-tomorrow.com",
    image: "./desk.PNG",
    techStack: ["HTML", "CSS", "JavaScript", "Firebase", "Sanity"],
    featured: true,
    color: "rgb(106, 179, 134)",
  },
  {
    name: "Hack X Burgh",
    description:
      "A website built for the Hack X Burgh hackathon. Involves a clone of the famous google dinosaur game and a 3d computer welcome screen. Built in collaboration another developer.",
    websiteLink: "https://hacktheburgh.com/",
    githubLink: "https://github.com/HTB-X/website-frontend",
    image: "./hackxburgh-home.png",
    techStack: ["React", "TypeScript", "Vite", "ThreeJS"],
    featured: false,
    color: "brown",
  },
  {
    name: "Boids Simulation",
    description:
      "Interactive visualisation of a group of boids simulated to behave like animals in flocks or swarms. Play around with the boids's settings to create some stunning visuals.",
    websiteLink: "https://boids.dev",
    githubLink: "https://github.com/Morgs27/boid-simulations",
    image: "./boids.png",
    techStack: ["React", "TypeScript", "Vite"],
    featured: false,
    color: "rgb(167, 216, 231)",
  },
  //   {
  //     name: "Slime Mould Simulation",
  //     description:
  //       "A web based simulation of the fungus-like growth pattern known as slime mould algorithims.",
  //     websiteLink: "https://slime.studio/",
  //     githubLink: "https://github.com/Morgs27/slime-simulations",
  //     image: "./slime.png",
  //     techStack: ["React", "TypeScript", "Vite"],
  //     featured: false,
  //     color: "rgb(167, 216, 231)",
  //   },
//   {
//     name: "Spiral Visualisation",
//     description:
//       "A simple visualisation of a logarithmic spiral. The logarithmic spiral is a type of spiral that is found in nature and is often used in art and design. The spiral is created by rotating the points around the origin and scaling the distance from the origin by a constant factor.",
//     websiteLink: "https://spiral.dev",
//     githubLink: "https://github.com/Morgs27/spiral-visualizer",
//     image: "./spiral.png",
//     techStack: ["React", "TypeScript", "Vite"],
//     featured: false,
//     color: "rgb(167, 216, 231)",
//   },
];

export default projects;
