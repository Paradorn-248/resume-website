export const fullVersionLink = "https://info-paradorn.vercel.app"
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
  website: "info-paradorn.vercel.app",
}

export const technologies = [
  {
    section: "Languages:",
    details:
      "Go, C, C++, Python, Javascript, SQL, Kotlin, Shell script",
  },
  {
    section: "Frameworks:",
    details:
      "Gin, Fiber, Express.js, FastAPI, Docusaurus 2",
  },
  {
    section: "Tools:",
    details:
      "Argo CD, Git, Postman, Jenkins, Docker, Rancher, Arduino, Markdown, RabbitMQ, Kibana, Elastic Search, Grafana, Redis, Sentry, Unleash",
  },
  {
    section: "Other:",
    details:
      "gRPC, Vercel, MongoDB Atlas, Heroku, Koyeb, Jira",
  },
]

export const educations = [
  {
    head: "B.Eng. Computer Engineering",
    details: "Kasetsart University, TH. 2020-Current (GPA 3.75 - 7 Semesters)",
  },
]

export const workExperiences = [
  {
    position: "Training",
    company: "Do your own DevOps with GitHub actions",
    url: "https://www.facebook.com/techatagoda/posts/pfbid0373BV1qQroTQiaBMKFmBMwYWjyKzmiPnHgLPW4qJJGSowFbFG1YRv7YvgTGWz5W81l",
    years: ["23 Nov 2022"],
    details: [
      "Participated in Agoda Tech Workshop on DevOps with GitHub Actions. Learned CI/CD workflow automation from commits to production.",
    ],
  },
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
    position: "Training",
    company: "Introduction to AI and Machine Learning course",
    url: "https://web.facebook.com/DAT.KUSRC",
    years: ["7", "8 May 2022"],
    details: [
      "Participated the AI and Machine Learning course that was provided by Digital Academy Thailand. In this course, I have used scikit-learn and TensorFlow."
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
    position: "Cooperative student",
    company: "Cooperative student at LINE MAN Wongnai",
    url: "https://lmwn.com/",
    years: ["April 2023", "September 2023"],
    details: [
      "Was cooperative student in position software engineer, Backend(Golang) at LINE MAN Wongnai. I have learned a lot of tools such as Rancher, RabbitMQ, Kibana, Elastic Search, Grafana, Redis, Sentry, Unleash. In LINE MAN Wongnai we use scrum process to develop product.",
    ],
  },
  {
    position: "Part Time",
    company: "Part Time at LINE MAN Wongnai",
    url: "https://lmwn.com/",
    years: ["April 2023", "Current"],
    details: [
      "Part time in position software engineer, Backend(Golang) at LINE MAN Wongnai. I have done on-call during this period.",
    ],
  },
]

export const projects = [
  {
    name: "School Club Register Website",
    details: [
      "This project is a website for registering clubs that is used by many schools and those schools must pay an annual fee. This project includes significant APIs such as annual payments, email identity verification, subscriptions, registration clubs, and review clubs.",
      "Express.js was used as a framework for backend where React and Next.js were used as frameworks for frontend."
    ],
    url: "github.com/Barinstrom",
  },
  {
    name: "Safe-Home",
    details: [
      "This project is designed to keep homes safe from accidents such as floods, gas leaks, fires, earthquakes so that homeowners can deal with them in time.",
      "FastAPI was used as a framework for backend, React was used as a framework for frontend, and Arduino was used to control sensors and motors."
    ],
    url: "github.com/Exceed-Safe-Home"
  },
  {
    name: "The Pet Specific Feeder by Arduino RGB Color Sensor",
    details: [
      "The goal of this project was to help the pet owners people who own multiple type of pets or do not have time to feed thier pets. This machine recognizes each pet by the color of the shirt it is wearing and feeds him when he enters the designated area with a number of feeding times that can be set by the pet owner.",
      "Arduino was used to control sensors and motors."
    ],
    url: "github.com/Paradorn-248/Pet_feeder-Project"
  },
  {
    name: "Predicting the Chance of Lung Disease Using Patient Data and Identifying the Type of Lung Disease by CT Scans",
    details: [
      "This project is about lung cancer. It was created to save the cost of CT scans for patients and help the doctors to diagnose the disease correctly. Initially, the Decision Tree Classifier model was used to predict from a patient's personal data whether they were likely to develop lung cancer. If the result comes out that there is a risk, we will use deep learning to predict type of lung cancer with CT scans picture.",
      "Scikit-learn and TensorFlow were used in this project."
    ],
    url: "github.com/Paradorn-248/MIKELab-Project"
  },
  {
    name: "Tetris Upgrade",
    details: [
      "This project is an upgraded tetris game. It has more difficult than normal tetris with more obstacle to play. While you are playing, the screen will be brighter at a random time, so you can not see any block. Then, you must use your hand to cover the light sensor to get rid of this obstacle.",
      "Pygame was used to build the tetris game while Raspberry Pi was used to connect between game and the controllers."
    ],
    url: "github.com/Paradorn-248/PracticumProject-TetrisGame"
  },
  {
    name: "Senior Project - Access Control Terminal with Real-Face Recognition",
    details: [
      "This project is android application that detect human face and recognize that face to open the door. In the future we will use this terminal in Kasetsart University.",
      "Kotlin and ML Kit was used to create application and for face detection respectively. For hardware, Arduino was used to control the door."
    ],
    url: "github.com/ku-final-project"
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