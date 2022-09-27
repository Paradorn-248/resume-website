export const fullVersionLink = "http://localhost:3000/"
export const sourceLink = "https://github.com/Paradorn-248/resume-website"
export const ogImageUrl =
  "https://og-image.vercel.app/Resumette.png?theme=light&md=1&fontSize=200px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fvercel-triangle-black.svg"

export const introData = {
  name: "Paradorn Watcharasemakul",
  nickname: "Erk",
  phone: "0877529585",
  email: "paradorn248@gmail.com",
  github: "Paradorn-248",
  linkedin: "paradorn-watcharasemakul-4732641a1",
  location: "Bangkok, Thailand",
  website: "",
}

export const technologies = [
  {
    section: "Languages:",
    details:
      "C, C++, Python, Javascript, SQL, Shell script",
  },
  {
    section: "Frameworks:",
    details:
      "Express.js, FastAPI, Docusaurus 2",
  },
  {
    section: "Tools:",
    details:
      "Git, Docker, Arduino, Markdown",
  },
  {
    section: "Other:",
    details:
      "Vercel, MongoDB Atlas",
  },
]

export const educations = [
  {
    head: "B.Eng. Computer Engineering",
    details: "Kasetsart University, TH. 2020-Current (GPA 3.84 - 4 Semesters)",
  },
]

export const workExperiences = [
  {
    position: "Finalist",
    company: "ASC Student Supercomputer Challenge",
    url: "http://www.asc-events.org/ASC22/",
    years: ["4", "10 Nov 2022"],
    details: [
      "Competed in the ASC Student Supercomputer Challenge 2022 as a representative of Kasetsart University.",
    ],
  },
  {
    position: "Teaching assistant",
    company: "Massive Information and Knowledge Engineering Laboratory (MIKELab)",
    url: "https://mike.cpe.ku.ac.th/",
    years: ["Jun 2021", "Oct 2021"],
    details: [
      "Was a teaching assistant in 01204111 Computer & Programming with Python for first-year computer engineering students.",
    ],
  },
  {
    position: "Participant",
    company: "POSN Computer Olympiad Camp (second camp)",
    url: "https://web.facebook.com/ScienceSilpakornUniversity/",
    years: ["7", "22 Mar 2019"],
    details: [
      "Participated in POSN Computer Olympiad Camp 2018 to learn C and C++ language at Silpakorn University.",
    ],
  },
  {
    position: "Training",
    company: "Introduction to AI and Machine Learning course",
    url: "https://web.facebook.com/DAT.KUSRC",
    years: ["7", "8 May 2022"],
    details: [
      "Participated the AI and Machine Learning course that was provided by Digital Academy Thailand. In this course, I have used scikit-learn and tensorflow."
    ],
  },

]

export const projects = [
  {
    name: "School Club Register Website",
    details: [
      "This project is a website for registering clubs that is used by many schools and those schools must pay an annual fee. This project includes significant APIs such as annual payments, email identity verification, subscriptions, registration clubs, and review clubs.",
      "Express.js was used as a framwork for backend where React and Next.js were used as frameworks for frontend."
    ],
    url: "github.com/Barinstrom",
  },
  {
    name: "Safe-Home",
    details: [
      "This project is designed to keep homes safe from accidents such as floods, gas leaks, fires, earthquakes so that homeowners can deal with them in time. This project use FastAPI as backend, use React as frontend, use Arduino to control sensor.",
    ],
    url: "github.com/Exceed-Safe-Home"
  },
  {
    name: "Pet feeder with Arduino color sensor",
    details: [
      "This project was created so that people who own dogs or cats don't have to hire someone to take care of their pets when they're not around or some people have different kinds of animals, they have to feed differently. This machine will feed the pet only when the animal is within the operating range of the machine and wears a shirt of the specific color to the machine color sensor. This project use Arduion to control sensors and motors.",
    ],
    url: "github.com/Paradorn-248/Pet_feeder-Project"
  },
  {
    name: "Predicting the Chance of Lung Disease using Patient Data and Identifying the Type of Lung Disease by CT scans",
    details: [
      "This project is about lung cancer. It was created to save people the cost of CT scans and help the doctor to diagnose the disease correctly. Initially, the Decision Tree Classifier model was used to predict from a patient's personal data whether they were likely to develop lung cancer. If the result comes out that there is a chance. We will use deep learning to help predict  type of lung cancer with CT scans picture. This project use scikit-learn and tensorflow",
    ],
    url: "github.com/Paradorn-248/MIKELab-Project"
  },
  {
    name: "Tetris Upgrade",
    details: [
      "This project is an upgraded tetris game. It has more difficult than normal tetris with more obstacle to play, screen will brighter so you can not see any block.you can use your hand cover light sensor to remove this obstacle.This project use Pygame and raspberry to connect game and controller.",
    ],
    url: "github.com/Paradorn-248/PracticumProject-TetrisGame"
  },
]

export const references = [
  {
    name: "Dr. Monchai Sopitkamon",
    details: [
      "RFID, Web Services, Service Oriented Architecture",
      "Department of Computer Engineering",
      "Kasetsart University",
      "Bangkok, Thailand",
    ],
    url: "research.ku.ac.th/forest/Person.aspx?id=480665",
  },
]