import {
  logo,
  backend,
  creator,
  mobile,
  web,
  github,
  menu,
  close,
  css,
  gearXpert,
  project2,
  project3,
  mysql,
  express,
  uber,
  fullStack,
  lt,
  bmi,
  uiux,
  frontEnd,
  Backend,
  link,
  aws,
  mui,
  gsap,
  framer,
  figma,
  git,
  html,
  javascript,
  mongodb,
  nodejs,
  reactjs,
  redux,
  tailwind,
  threejs,
  firstTestimonial,
  secondTestimonial,
  thirdTestimonial,
  Black,
} from '../assets'


// Import Tekisky separately
import tekisky from "../assets/company/tekisky.png";


export const navLinks = [


  {
    id: "about",
    title: "About",

  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Full-Stack Developer",
    icon: fullStack,
  },
  {
    title: "Frontend Developer",
    icon: frontEnd,
  },
  {
    title: "Backend Developer",
    icon: Backend,
  },
  {
    title: "Ui UX Designer",
    icon: uiux,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  // {
  //   name: "gsap",
  //   icon: gsap,
  // },
  // {
  //   name: "framer",
  //   icon: framer,
  // },


  // {
  //   name: "Three JS",
  //   icon: threejs,
  // },
  {
    name: "figma",
    icon: figma,
  },
  // {
  //   name: "Redux Toolkit",
  //   icon: redux,
  // },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  // {
  //   name: "Material Ui",
  //   icon: mui,
  // },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Express Js",
    icon: express,
  },
  // {
  //   name: "AWS",
  //   icon: aws,
  // },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "MySql",
    icon: mysql,
  },

  {
    name: "git",
    icon: git,
  },


];

const experiences = [
  {
    title: "Web-Developer",
    company_name: "Cognifyz",
    icon: frontEnd, // Using the web icon from your assets instead of company logo
    iconBg: "#E6DEDD",
    date: "Aug 2023 - Sep 2023",
    points: [
      "Developing and maintaining web applications using MERN technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers."
    ],
  },

  {
    title: "Full-Stack Developer",
    company_name: "Bharat Intern",
    icon: fullStack, // Using the web icon from your assets instead of company logo
    iconBg: "#E6DEDD", // Light elegant background
    date: "Nov 2023 - Dec 2023",
    points: [
      "Architecting and implementing full-stack web applications using modern MERN stack technologies.",
      "Leading frontend development with React.js, incorporating responsive design patterns and modern UI/UX principles.",
      "Building robust backend systems with Node.js, Express, and MongoDB for scalable data management.",
      "Implementing CI/CD pipelines and maintaining code quality through comprehensive testing and reviews."
    ],
  }
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Huzaif proved me wrong.",
    name: "MD Mustaqeem",
    designation: "Ecommerce",
    company: "QuickMart",
    image: firstTestimonial,
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Huzaif does.",
    name: "Abdul Raheman",
    designation: "Ecommerce Business",
    company: "justbuyz",
    image: secondTestimonial,
  },
  {
    testimonial:
      "After Huzaif optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "James Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: thirdTestimonial,
  },
];

const projects = [
  {
    name: "Uber Clone",
    description:
      "Uber Clone is a web platform that seamlessly connects passengers with drivers, ensuring a smooth, reliable, and efficient ride-booking experience with minimal effort, hassle, and maximum convenience.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "white-text-gradient",
      },
      {
        name: "node",
        color: "pink-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },

    ],
    image: uber,
    source_code_link: "https://github.com/abhi-shek-86/uber_clone.git",
    live_demo_link: "https://uber-clone-fawn-chi.vercel.app/" // Add this line
  },
  {
    name: "Language Translator - Final Year proj",
    description:
      "Language Translator is a web platform that translates text between languages, ensuring accurate and efficient communication.",
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: "Machine Learning",
        color: "green-text-gradient",
      },
      {
        name: "Html , Css , Js",
        color: "pink-text-gradient",
      },
    ],
    image: lt,
    source_code_link: "https://github.com/abhi-shek-86/T20-86.git",
    // live_demo_link: "https://your-uber-clone-demo.vercel.app/",
  },
  {
    name: "BMI Calculator",
    description:
      "BMI Calculator is a web platform that computes Body Mass Index using height and weight, providing quick and accurate health insights. It helps users assess their fitness levels effectively.",
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: "Html",
        color: "white-text-gradient",
      },
      {
        name: "Css",
        color: "green-text-gradient",
      },
      {
        name: "Javascript",
        color: "green-text-gradient",
      },
    ],
    image: bmi,
    source_code_link: "https://github.com/",
    live_demo_link: "https://bmi-calculator-eight-psi.vercel.app/",
  },
];

export { services, technologies, experiences, testimonials, projects };
