import client1 from "./assets/client-1.png";
import client2 from "./assets/client-2.jpeg";
import client3 from "./assets/client-3.png";
import client4 from "./assets/client-4.png";
import client5 from "./assets/client-5.png";
import { IoLogoCss3, IoLogoJavascript, IoMdAnalytics} from "react-icons/io";
import { IoCallOutline ,IoLocationOutline } from "react-icons/io5";
import { GrUserExpert } from "react-icons/gr";
import { MdOutlineSupportAgent,MdOutlineAlternateEmail } from "react-icons/md";
import { RiExchange2Fill } from "react-icons/ri";
import { TfiEmail} from "react-icons/tfi";
import { FaBootstrap, FaDocker, FaGithub,FaHtml5,FaJava,FaLinkedin,FaPaintBrush } from "react-icons/fa";
import { CiMobile3 } from "react-icons/ci";
import { TfiWrite } from 'react-icons/tfi'
import { FaLaptopCode } from "react-icons/fa";
import {SiJquery, SiMysql, SiPostgresql, SiSpringboot} from "react-icons/si";
import { PiAngularLogo } from "react-icons/pi";

export const tabs = [
    {name:"About Me",id:'about'},
    {name:"Skill",id:'skill'},
    {name:"Projects",id:'projects'},
    {name:"Services",id:'services'}
]

export const whyChooseMe = [
  {
    title:"Unmatched Local Expertise",
    icon:<GrUserExpert />,
    link:"",
  },
  {
    title:"Comprehensive Market Analysise",
    icon:<IoMdAnalytics/>,
    link:"",
  },
  {
    title:"Dedicated Client Support",
    icon:<MdOutlineSupportAgent/>,
    link:"",
  },
  {
    title:"Innovative Marketing Strategies",
    icon:<RiExchange2Fill/>,
    link:"",
  },
]
export const services = [
  {
    name:"UI/UX Design",
    icon:<FaPaintBrush/>,
    description:`Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione 
    voluptatum earum quam tempore, repellat aut vero ut eum, provident accusamus recusandae 
    eligendi, adipisci sequi reiciendis quisquam? Sapiente optio rerum sequi!`,
  },
  {
    name:"Web Development",
    icon:<FaLaptopCode/>,
    description:`Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione 
    voluptatum earum quam tempore, repellat aut vero ut eum, provident accusamus recusandae 
    eligendi, adipisci sequi reiciendis quisquam? Sapiente optio rerum sequi!`,
  },
  {
    name:"Content Creation",
    icon:<TfiWrite/>,
    description:`Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione 
    voluptatum earum quam tempore, repellat aut vero ut eum, provident accusamus recusandae 
    eligendi, adipisci sequi reiciendis quisquam? Sapiente optio rerum sequi!`,
  },
  
]


export const skills = [
  {
      title:"Frontend Development",
      data:[
          {
              skill:"HTML",
              level:"Experienced",
          },
          {
              skill:"CSS",
              level:"Experienced",
          },
          {
              skill:"JavaScript",
              level:"Experienced",
          },
          {
              skill:"TypeScript",
              level:"Experienced",
          },
          {
              skill:"Angular",
              level:"Experienced",
          },
          {
              skill:"React",
              level:"Experienced",
          },
          {
              skill:"Tailwind",
              level:"Experienced",
          },
          {
              skill:"Bootstrap",
              level:"Experienced",
          },
          
      ]
  },
  {
      title:"Backend Development",
      data:[
          {
              skill:"Java",
              level:"Experienced",
          },
          {
              skill:"Spring Boot",
              level:"Intermediate",
          },
          {
              skill:"Jakartha EE",
              level:"Experienced",
          },
          {
              skill:"MySQL",
              level:"Intermediate",
          },
          {
              skill:"PostgreSQL",
              level:"Experienced",
          },
          {
              skill:"MongoDB",
              level:"Experienced",
          },
          {
              skill:"Firebase Firestore",
              level:"Experienced",
          },
          {
              skill:"MariaDB",
              level:"Experienced",
          },
      ]
  },
]


export const projects = [
  { 
    id:1,
    title: 'Income Expense Organizer Application',
    category: "Web",
    image: './src/assets/Project-img/i&e.png',
    description: `Transforming education with AI, our School UI Design project revolutionizes the 
                     learning experience. Seamlessly integrating intelligent features, personalized interfaces, 
                     and intuitive navigation, our design empowers educators and students alike. Experience 
                     innovation at its finest as we pave the way for a smarter, more efficient educational 
                     journey.`,
    demoLink: "https://github.com/SachithRangana1/Income-Expense-Organizer-Application",
    stack:[
      {
        name:" Java",
        icon: <FaJava/>,
        iconColor:"brown",
      },
      {
        name:"Spring boot",
        icon: <SiSpringboot/>,
        iconColor:"green",
      },
      {
        name:" Angular",
        icon: <PiAngularLogo/>,
        iconColor:"red",
      },
      {
        name:" PostgreSQL",
        icon: <SiPostgresql />,
        iconColor:"blue",
      },
    ]
  },
  {
    id:2,
    title: 'Breaking News Website Backend',
    category: "Backend",
    image: './src/assets/Project-img/brn.png',
    description:`Enhance your online shopping experience with our E-Commerce Application 
      UI design project. Seamlessly blending aesthetics with functionality, our intuitive 
      interface offers easy navigation, personalized recommendations, and secure 
      transactions. Elevate your digital storefront and captivate customers with a visually 
      stunning design tailored to your brand`,
    demoLink: "https://github.com/SachithRangana1/Breaking-News-Website-Backend.git",
    stack:[
      {
        name:" Java",
        icon: <FaJava/>,
        iconColor:"brown",
      },
      {
        name:"Spring boot",
        icon: <SiSpringboot/>,
        iconColor:"green",
      },
      {
        name:"Docker",
        icon: <FaDocker />,
        iconColor:"blue",
      },
      {
        name:"MySQL",
        icon: <SiMysql />,
        iconColor:"blue",
      },
    ]
  },
  {
    id:3,
    title: 'Employee Management Application Frontend',
    category: "Frontend",
    image: './src/assets/Project-img/emm.png',
    description: `Unlock the future of robotics with our Robotic Engineering Web Application
      project. Seamlessly integrating cutting-edge technology, data analytics, 
      and collaborative tools, our platform empowers engineers to design, simulate, 
      and optimize robotic systems. Experience innovation at its peak as we redefine the 
      boundaries of robotic engineering.`,
    demoLink: "https://github.com/SachithRangana1/Employee-Management-Application-Frontend.git",
    stack:[
      {
        name:"JavaScript",
        icon: <IoLogoJavascript />,
        iconColor:"yellow",
      },
      {
        name:"HTML",
        icon: <FaHtml5 />,
        iconColor:"orange",
      },
      {
        name:"CSS",
        icon: <IoLogoCss3 />,
        iconColor:"blue",
      },
      {
        name:"Bootstrap",
        icon: <FaBootstrap />,
        iconColor:"purple",
      },
    ]
  },
  {
    id:4,
    title: 'To-Do List Application Frontend ',
    category: "Frontend",
    image: './src/assets/Project-img/tda.png',
    description: `Simplify project coordination with our intuitive Project Management application. Track tasks, collaborate in real-time, and streamline workflows effortlessly. With customizable features and robust reporting, stay organized and efficient.
                     Elevate your project management experience and achieve success with ease.`,
    demoLink: "https://github.com/SachithRangana1/To-Do-List-Application-Frontend.git",
    stack:[
      {
        name:"jQuery",
        icon: <SiJquery />,
        iconColor:"blue",
      },
      {
        name:"HTML",
        icon: <FaHtml5 />,
        iconColor:"orange",
      },
      {
        name:"CSS",
        icon: <IoLogoCss3 />,
        iconColor:"blue",
      },
      {
        name:"Bootstrap",
        icon: <FaBootstrap />,
        iconColor:"purple",
      },
    ]
  },
  {
    id:5,
    title: 'E-Commerce Platform Application Backend',
    category: "Backend",
    image: './src/assets/Project-img/eca.png',
    description: `Experience banking at your fingertips with our sleek Mobile Bank app design. Seamlessly manage your finances on-the-go with intuitive navigation, secure transactions, and personalized insights. Enjoy a modern interface that prioritizes convenience and accessibility, revolutionizing your banking experience.`,
    demoLink: "https://github.com/SachithRangana1/E-Commerce-Platform-Application-Backend.git",
    stack:[
      {
        name:" Java",
        icon: <FaJava/>,
        iconColor:"brown",
      },
      {
        name:"Spring boot",
        icon: <SiSpringboot/>,
        iconColor:"green",
      },
      {
        name:"Docker",
        icon: <FaDocker />,
        iconColor:"blue",
      },
      {
        name:"MySQL",
        icon: <SiMysql />,
        iconColor:"blue",
      },
    ]
  },
  {
    id:6,
    title: 'Online Learning Platform Backend',
    category: "Backend",
    image: './src/assets/Project-img/olf.png',
    description: `Elevate engagement and knowledge retention with our Quiz App 
                    Development project. Seamlessly crafted for interactive learning 
                    experiences, our app offers customizable quizzes, real-time feedback, 
                    and captivating visuals. Empower users to test their knowledge anytime,
                     anywhere, fostering a dynamic learning environment tailored to their 
                     needs.`,
      demoLink: "https://github.com/SachithRangana1/Online-Learning-Platform-Backend.git",
    stack:[
      {
        name:" Java",
        icon: <FaJava/>,
        iconColor:"brown",
      },
      {
        name:"Spring boot",
        icon: <SiSpringboot/>,
        iconColor:"green",
      },
      {
        name:"MySQL",
        icon: <SiMysql />,
        iconColor:"blue",
      },
    ]
  },
]


export const clients = [
  {
    image:client1,
    name:'Samuel Eze',
    review:` Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
           veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea 
           veniam, quis nostrud exercitation ullamco laborisveniam, quis nostrud 
           exercitation ullamco laboris`
  },
  {
    image:client2,
    name:'Richael Linda',
    review:` Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
           veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea`
  },
  {
    image:client3,
    name:'Gloria Chiwendu',
    review:` Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
           veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea 
           veniam, quis nostrud exercitation ullamco laborisveniam, quis nostrud 
           exercitation ullamco laborisveniam, quis nostrud exercitation ullamco laboris`
  },
  {
    image:client4,
    name:'Precious Stone',
    review:` Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
           veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea`
  },
  {
    image:client5,
    name:'Ndubisi John',
    review:` Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
           veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea`
  },

];

export const contactOptions = [
  {
    title:"Email",
    value:"mradinuba@gmail.com",
    icon:<MdOutlineAlternateEmail />,
  },
  {
    title:"Phone Number",
    value:"+2348149121918",
    icon:<IoCallOutline/>,
  },
  {
    title:"Address",
    value:"Gwarinpa, Abuja, Nigeria",
    icon:<IoLocationOutline/>,
  },
]

export const socialHandles = [
    {
      name:"GitHub",
      icon:<FaGithub />,
      link:"https://github.com/SachithRangana1",
    },
    {
      name:"LinkedIn",
      icon:<FaLinkedin/>,
      link:"https://www.linkedin.com/in/sachith-rangana-302315132/",
    },
    {
      name:"Email",
      icon:<TfiEmail/>,
      link:"sachith2546@gmail.com",
    },
    {
      name:"Mobile",
      icon:<CiMobile3/>,
      link:"078 8888 633",
    },
];

export const footer = [
  {
    title:"Explore",
    routes:[
      {name:"About Me",id:'about'},
      {name:"Skill",id:'skill'},
    ]
  },
  {
      title:"Trusted",
      routes:[
        {name:"Services",id:'services'},
        {name:"Projects",id:'projects'},
        {name:"Testimonials",id:'testimonials'},
      ]
    },
  {
      title:"Others",
      routes:[
        {name:"Privacy Policy"},
        {name:"Terms and Conditions"},
        {name:"Cookie Policy"},
      ]
    },
]

