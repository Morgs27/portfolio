import { ProjectProps } from "../assets/components/Project/Project";

const projects: ProjectProps[] = [
  {
    name: "SWGOH Team Manager",
    description:
      "Companion tool for the mobile game 'Star Wars Galaxy of Heroes'. Use the guest mode to try out the website's features. The back-end is built using PHP with a MySQL database, with the front-end being comprised of vanilla HTML, CSS and JS. The SWGOH.gg API is used to retrieve player data along with a stat calculation API to process the values.",
    websiteLink: "https://swgohteammanager.com/use_as_guest.php",
    githubLink: "https://github.com/Morgs27/swgoh-website",
    image: "./home.PNG",
    techStack: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
    featured: true,
    color: "rgb(102, 131, 228)",
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
    name: "TSP Visualizer",
    description:
      "An interactive visualisation of a group of the algorithms that can be used to solve 'The Traveling Salesman Problem'. The TSP problem is a well known mathematical optimization problem where the aim is to find the shortest distance between a set of points.",
    websiteLink: "https://tspvisualiser.dev",
    githubLink: "https://github.com/Morgs27/pathfinding-visualizer",
    image: "./map.PNG",
    techStack: ["React", "TypeScript", "Vite"],
    featured: true,
    color: "rgb(202, 167, 126)",
  },
  {
    name: "Boids Simulation",
    description:
      "Interactive visualisation of a group of boids simulated to behave like animals in flocks or swarms. Play around with the boids's settings to create some stunning visuals.",
    websiteLink: "https://boids.dev",
    githubLink: "https://github.com/Morgs27/boid-simulations",
    image: "./boids-short.gif",
    techStack: ["React", "TypeScript", "Vite"],
    featured: true,
    color: "rgb(167, 216, 231)",
  },
];

export default projects;
