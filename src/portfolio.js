/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
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
  username: "Hiteshwar Mehla",
  title: "Hi all, I'm Hiteshwar",
  subTitle: emoji(
    "A passionate Java Back End Developer having experience with building large scale, high availability Web applications. 🚀"
  ),
  resumeLink:
    "https://drive.google.com/file/d/16rrWfYDTNiXyPTiJDpLvHv-C6va388TE/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/hiteshwarmehla21",
  linkedin: "https://www.linkedin.com/in/hiteshwarmehla/",
  gmail: "hiteshwar.mehla@gmail.com",
  //gitlab: "https://gitlab.com/hiteshwarmehla",
  //facebook: "https://www.facebook.com/hiteshwarmehla",
  medium: "https://medium.com/@hiteshwar.mehla",
  //stackoverflow: "https://stackoverflow.com/users/10422806/saad-pasta",
  leetcode: "https://leetcode.com/hiteshwarmehla21/",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do well",
  //subTitle: "CURIOSITY FILLED BACK END DEVELOPER WHO WANTS TO EXPLORE EVERYTHING TECH RELATED",
  skills: [
    emoji(
        "⚡ Data Structures : In particular, how to apply them in problem solving."
    ),
    emoji(
        "⚡ Debugging : Both as a developer and a teammate."
    ),
    emoji(
        "⚡ Communication : Solving hard problems requires you to ask silly questions (& sometimes hard ones)."
    ),
    emoji(
        "⚡ Customer First Mindset : Every small details taken care of with proactive, and results-oriented mindset."
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "java",
      fontAwesomeClassname: "fab fa-java"
    },
    {
      skillName: "saas",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "git",
      fontAwesomeClassname: "fab fa-git"
    },
   /* {
      skillName: "golang",
      fontAwesomeClassname: "fab fa-golang"
    },*/
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: false, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "YMCA University of Science & Technology, Faridabad",
      logo: require("./assets/images/ymca.png"),
      subHeader: "Bachelor of Technology in Information Technology",
      duration: "July 2015 - June 2019",
      descBullets: [
        "1st Runner up at SheHacks Hackathon",
        "President, Photography & Design Club",
        "Governor Awardee - Logo Design"
      ]
    },
    {
      schoolName: "Maharana Pratap Public School, Kurukshetra",
      logo: require("./assets/images/mpps.png"),
      subHeader: "Class XII",
      duration: "April 2012 - March 2014",
      desc: "Consistently ranked top 10% in the program.",
      descBullets: ["PSA Scholar (Reasoning & Aptitude) - Among top 3000 recipients across all CBSE Schools."]
    },
    {
      schoolName: "Gita Niketan Awasiya Vidyalya, Kurukshetra",
      logo: require("./assets/images/mpps.png"),
      subHeader: "Class X",
      duration: "April 2012 - March 2014",
      desc: "National Level Finalist in Heritage India Quiz",
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Data Structures & Algorithms",
      progressPercentage: "100%"
    },
    {
      Stack: "System Design",
      progressPercentage: "80%"
    },
    {
      Stack: "OOPS", //Insert stack or technology you have experience in
      progressPercentage: "80%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Design Pattern",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: true // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software Engineer II",
      company: "SirionLabs",
      companylogo: require("./assets/images/sirion.jpg"),
      date: "July 2019 – March 2023",
      descBullets: [
        "Built a platform that quickly extracts important information from over 10 million uploaded documents, saving time and effort equivalent to 5-7 days of work in just 1 minute.",
        "Enabled users to create and customize machine learning models for data analysis and extraction.",
        "Mentored junior developers in creating a tool that monitors microservices for better performance and reliability."
        ]
    },
   /* {
      role: "Software Engineer",
      company: "SirionLabs",
      companylogo: require("./assets/images/sirion.jpg"),
      date: "April 2021 – Dec 2022",
      descBullets: [
          "Created a Micro-service to provide Annotation and Highlighting in a document for various types of contracts and agreements.",
          "Spearheaded integration with 2 OCR services (Abbyy, Aspose) and made the whole process async to reduce overload and scale."
      ]
    },
    {
      role: "Associate SE",
      company: "SirionLabs",
      companylogo: require("./assets/images/sirion.jpg"),
      date: "July 2019 – Mar 2021",
      descBullets: [
          "Developed a platform for uploading and parsing documents and extracting relevant data, reducing the man hours from 5-7 days to 1 min" +
          "Worked on system flow for Contract lifecycle from Pre-Signature Contract Creation till Post-Signature Analytics at a scale of 10 million plus documents."
          ]
    },*/
    {
      role: "Intern",
      company: "Publicis Sapient",
      companylogo: require("./assets/images/sapient.jpg"),
      date: "Jan 2019 – Jun 2019",
      descBullets: [
          "Designed a POC tool for staffing that delivers key employee supply pool data to enhance resource allocation and management.",
          "Received Excellence in Leadership Award among Interns for showing outstanding initiative, communication, and problem-solving skills."
          ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "Saayahealth",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://saayahealth.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/nextuLogo.webp"),
      projectName: "Nextu",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://nextu.se/"
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
    "I love to write about things that fascinates me.",
  displayMediumBlogs: "false", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://medium.com/@paruldhingra/unlocking-some-proven-methods-to-boost-your-sql-query-speed-d9d18260aa6b",
      title: "Unlocking some proven methods to boost your SQL Query Speed",
      description:
        "Which ones to optimise without resulting in problems users will notice."
    },
    {
      url: "https://medium.com/better-programming/recovering-from-common-git-errors-eccda7ec6180",
      title: "Recovering From Common Git Errors",
      description:
        "To get back to your development faster"
    }
  ],
  display: true // Set false to hide this section, defaults to true
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
  subtitle: "CHIT-CHATTING MY WAY WITH A CHILDHOOD FRIEND",

  // Please Provide with Your Podcast embeded Link
  podcast: [
      "https://podcasters.spotify.com/pod/show/straight-reads/embed/episodes/Ep-4---Rowlings-Harry-Potter-and-the-Philosophers-Stone--Apples-WWDC21-e134k9t/a-a5uicl3",
      "https://podcasters.spotify.com/pod/show/straight-reads/embed/episodes/Ep-3---Cliff-Kuangs-and-Robert-Fabricants-User-Friendly--Fiction-vs-Non-Fiction--Will-Shorts-take-over-YouTube-e119846/a-a5kkodf",
  ],
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
    number: "+91-9416026957",
  email_address: "hiteshwar.mehla@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "hiteshwarmehla?s=09", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
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
