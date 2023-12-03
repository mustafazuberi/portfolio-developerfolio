/* Change this file to get your personal Portfolio */
// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import {FaHtml5, FaCss3Alt} from "react-icons/fa";
import {SiTailwindcss} from "react-icons/si";
import {IoLogoJavascript} from "react-icons/io5";
import {IoLogoFirebase} from "react-icons/io5";
import {FaReact} from "react-icons/fa6";
import {TbBrandNextjs} from "react-icons/tb";
import {SiNpm} from "react-icons/si";
import {DiNodejs} from "react-icons/di";
import {DiMongodb} from "react-icons/di";

import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Mustafa Zuberi",
  title: "Hi all, I'm Mustafa",
  subTitle: emoji(
    " A passionate Software Developer 🚀 with experience in building web applications using JavaScript, React.js, Next.js, Firebase, and some other cool libraries and frameworks."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1BPBBfT634oDIQUSJXrllEXSMG8722prY/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/MustafaRazaZuberi",
  linkedin: "https://www.linkedin.com/in/mustafa-zuberi-475334231/",
  gmail: "mustafazuberi986@gmail.com",
  // gitlab: "https://gitlab.com/saadpasta",
  facebook: "https://www.facebook.com/mustafa.zuberi.716",
  // medium: "https://medium.com/@saadpasta",
  stackoverflow: "https://stackoverflow.com/users/20854534/mustafa-zuberi",
  instagram: "https://www.instagram.com/mustafa.raza.zuberi._/",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications"
    ),
    emoji("⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks")
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      reactIconsIcon: <FaHtml5 />
    },
    {
      skillName: "css3",
      reactIconsIcon: <FaCss3Alt />
    },
    {
      skillName: "tailwind",
      reactIconsIcon: <SiTailwindcss />
    },
    {
      skillName: "JavaScript",
      reactIconsIcon: <IoLogoJavascript />
    },
    {
      skillName: "reactjs",
      reactIconsIcon: <FaReact />
    },
    {
      skillName: "nextjs",
      reactIconsIcon: <TbBrandNextjs />
    },
    {
      skillName: "firebase",
      reactIconsIcon: <IoLogoFirebase />
    },
    {
      skillName: "nodejs",
      reactIconsIcon: <DiNodejs />
    },
    {
      skillName: "npm",
      reactIconsIcon: <SiNpm />
    },
    {
      skillName: "mongodb",
      reactIconsIcon: <DiMongodb />
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Education Trust Nasra School",
      logo: require("./assets/images/nasra school.png"),
      subHeader: "Matriculation in Computer Science",
      duration: "September 2008 - April 2020"
    },
    {
      schoolName: "Government Superior Science College",
      logo: require("./assets/images/superior collge.jpg"),
      subHeader: "Intermediate in Computer Science",
      duration: "September 2020 - September 2022"
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Web Application Developer (React.js)",
      company: "Smash Code",
      companylogo: require("./assets/images/smashcode.png"),
      date: "March 2023 – August 2023",
      desc: "I've actively contributed to the development of React Web Applications, spanning CMS panels and a mix of static and dynamic websites, playing a significant role in enhancing their functionality and user appeal."
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Projects",
  projects: [
    {
      image: require("./assets/images/M.png"),
      projectName: "Messenger Clone",
      projectDesc:
        "Developed a feature-rich chat app using Next.js, Firebase, TypeScript, and Tailwind CSS designed with Shadcn UI. Implemented seamless authentication, including signup, login, and social logins. Users can engage in diverse conversations with text, voice, and images. The UI, facilitates easy blocking, real-time status tracking, and last seen timestamps. Additionally, users can establish connections by sending and accepting friend requests, enhancing the overall user experience.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://messenger-clone-by-mustafazuberi.vercel.app/auth/signin"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/smidiscountstore.png"),
      projectName: "SMIT Discount Store",
      projectDesc:
        "This web application on React.js allows users to order products and view their orders in the profile section. Users can also update their full name, as well as view the status of their orders (pending, delivered, rejected) in their profile. Admins can add categories, products, and change the status of orders.      ",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://smit-discount-store-mrz.netlify.app/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/darazclone.png"),
      projectName: "Daraz Clone",
      projectDesc:
        "Utilizing the latest technologies such as MongoDB, React.js, Express.js, and Node.js, this platform provides an intuitive and user-friendly interface that simplifies the process of setting up an online store, creating product listings, and managing orders. With Daraz Clone, users can easily create their own virtual store and start selling products in no time.      ",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://www.linkedin.com/feed/update/urn:li:activity:7031321133127806976/"
        }
      ]
    },
    {
      image: require("./assets/images/foodpanda.png"),
      projectName: "Foodpanda Clone",
      projectDesc:
        "This is web-app on React.js ,As a user, you can order food from any restaurant and view your order status in the cart. To place an order, your current location must be accessible. As a restaurant, you can update your restaurant info and add/edit/delete items. You can also view available orders in the cart and accept/reject orders.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://foodpanda-clone-mrzuberi.netlify.app/"
        }
      ]
    },
    {
      image: require("./assets/images/whatsapp.png"),
      projectName: "Whatsapp Clone",
      projectDesc:
        "Chat App developed using HTML, CSS, JavaScript, and Firebase, creating a WhatsApp-like interface with responsive design, Firebase-based chat functionality, image sending, and Emoji support.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://chatapp-whatsapp-mustafa.netlify.app/"
        }
      ]
    },
    {
      image: require("./assets/images/turoclone.png"),
      projectName: "Turo Clone",
      projectDesc:
        "I developed this landing page using REACTJS functional components with a responsive design, utilizing UI libraries such as Ant Design and Material UI.This project allowed me to further develop my skills in web design and development.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://turo-mrzuberi-clone.netlify.app/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle:
        "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        },
        {
          name: "Award Letter",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        },
        {
          name: "Google Code-in Blog",
          url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        }
      ]
    },
    {
      title: "Google Assistant Action",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "View Google Assistant Action",
          url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        }
      ]
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      imageAlt: "PWA Logo",
      footerLink: [
        {name: "Certification", url: ""},
        {
          name: "Final Project",
          url: "https://pakistan-olx-1.firebaseapp.com/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+92-3142516701",
  email_address: "mustafazuberi986@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable
};
