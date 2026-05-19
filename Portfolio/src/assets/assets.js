import { color } from "framer-motion";
import { FaLightbulb, FaPaintBrush,FaCode, FaServer, FaDatabase, FaTools, FaReact,FaUserGraduate,
    FaUsers,FaChartLine, FaBrain, FaChartBar,FaMusic, FaCompactDisc, FaLock, FaStickyNote, FaShieldAlt,
    FaHandsHelping, FaAmbulance, FaPhoneAlt}from "react-icons/fa";
import projectImg1 from './projectImg1.png';
import projectImg2 from './projectImg2.jpg';
import projectImg3 from './projectImg3.jpg';
import projectImg4 from './projectImg4.jpg';
import projectImg5 from './projectImg5.webp';

export const aboutInfo=[{
    icon:FaLightbulb,
    title:'Innovative',
    description:"I love creating unique solutions to complex problems with cutting-edge technologies.",
    color:'text-blue',
},
{
    icon:FaPaintBrush,
    title:'Design Oriented',
    description:"Beautiful design and user experience are at the heart of everything I create.",
    color:'text-blue'
},
  {
    icon: FaCode,
    title: "Clean Code",
    description: "I write maintainable efficient code following best practices and modern patterns.",
    color: "text-blue"
  }
];
export const skills=[
    {
        title:'Frontend Development',
        icon:FaReact,
        description:'Building responsive and interactive user interfaces with modern frameworks.',
        tags:['React','CSS','JavaScript','TailwindCss']
    },
    {
        title:'Backend Development',
        icon:FaServer,
        description:'Creating robust server-side applications and RESTful APIs.',
        tags:['Node.js','Express','JavaScript','Django']
    },
    {
        title:'Database Management',
        icon:FaDatabase,
        description:'Designing and optimizing databases for performance and scalability',
        tags:['MongoDB','MySQL','Firebase']
    },
    {
        title:'Tools and Technologies',
        icon:FaTools,
        description:'Essential tools and technologies I use in my development workflow.',
        tags:['Git & GitHub','Claude','Figma','CodeX']
    },
]
export const projects=[
{
    title:'Student Management System',
    description:"A full-stack web application designed to manage student records efficiently. It allows users to add, update, delete, and search student details such as name, contact information, and academic data.",
    image:projectImg1,
    tech:["React", "Tailwind CSS","Node.js","Express","MongoDB","Axios"],
    icons:[FaReact,FaUserGraduate,FaDatabase,FaUsers],
    demo:"https://student-management-system-five-flax.vercel.app/",
    code:"https://github.com/wadhwaniprakriti962-cmyk/student-management-system"
},
{
    title:'Student Performance Predictor',
    description:"A machine learning-based web application that predicts student performance based on inputs like study hours, attendance, and previous scores.",
    image:projectImg2,
    tech:["Python", "NumPy","Pandas","SciKit Model","Linear Regression"],
    icons:[FaChartLine, FaBrain, FaChartBar],
    demo:"https://github.com/wadhwaniprakriti962-cmyk/student-performance-predictor",
    code:"https://github.com/wadhwaniprakriti962-cmyk/student-performance-predictor"
},

{
    title:'Dance Website',
    description:"A visually engaging and responsive website designed for a dance platform. The project focuses on user experience and responsive layouts.",
    image:projectImg3,
    tech:["HTML", "CSS","JavaScript"],
    icons:[FaMusic, FaCompactDisc],
    demo:"https://github.com/wadhwaniprakriti962-cmyk/dance-website",
    code:"https://github.com/wadhwaniprakriti962-cmyk/dance-website"
},
{
    title:'Secure Notes API',
    description:"A backend API that allows users to securely create, store, and manage personal notes. It includes authentication and authorization features to ensure that only authorized users can access their data.",
    image:projectImg4,
    tech:["Node.js","Express.js","MongoDB","JWT","Postman"],
    icons:[ FaLock, FaStickyNote, FaShieldAlt ],
    demo:"https://secure-notes-api-8uy0.onrender.com/",
    code:"https://github.com/wadhwaniprakriti962-cmyk/secure-notes-api"
},
{
    title:'RescueNet',
    description:"A platform designed to assist in emergency or rescue situations by connecting users with nearby help resources.The project focuses on real-world problem-solving and usability.",
    image:projectImg5,
    tech:["Node.js","Express.js","MongoDB","React","TailwindCSS","TypeScript"],
    icons:[FaHandsHelping, FaAmbulance, FaPhoneAlt],
    demo:"https://smart-emergency-prioritization-system-5cxq-ol6kbfb90.vercel.app/",
    code:"https://github.com/SpRinG-1303/smart-emergency-prioritization-system"
},
]
export const workData = [
  {
    title: "Web Development Intern — Coding Samurai",
    date: "2026 – Present",
    description: "Building responsive web apps using React & Tailwind CSS, working with APIs and animations."
  },
  {
    title: "Self-Driven Developer",
    date: "2025 – Present",
    description: "Developing full-stack and ML projects while learning modern technologies."
  }
];