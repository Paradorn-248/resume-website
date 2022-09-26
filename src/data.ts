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
      "ExpressJS, Fastapi, Docusaurus 2",
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
    details: "Kasetsart University, TH. 2020-2023 (GPA 3.84 - 4 Semester)",
  },
]

export const workExperiences = [
  {
    position: "Finalist",
    company: "ASC Student Supercomputer Challenge",
    url: "http://www.asc-events.org/ASC22/",
    years: ["4","10 Nov 2022"],
    details: [
      "I competed in the ASC Student Supercomputer Challenge as a representative of Kasetsart University",
    ],
  },
  {
    position: "Teaching assistant",
    company: "Massive Information and Knowledge Engineering Laboratory(MIKELab)",
    url: "https://mike.cpe.ku.ac.th/",
    years: ["Jun 2021","Oct 2021"],
    details: [
      "I am a teaching assistant in 01204111 Computer & Programming subject for first-year computer engineering student using python.",
    ],
  },
  {
    position: "Participant",
    company: "POSN Computer Olympiad Camp (2nd camp)",
    url: "https://web.facebook.com/ScienceSilpakornUniversity/",
    years: ["7","22 Mar 2019"],
    details: [
      "I participated in POSN camp to learn C and C++ language at Silpakorn University.",
    ],
  },
  {
    position: "Training",
    company: "Introduction to AI and Machine Learning",
    url: "https://web.facebook.com/DAT.KUSRC",
    years: ["7","8 May 2022"],
    details: [
      "I participated in Digital Academy Thailand to learn AI and Machine Learning course."
    ],
  },
  
]

export const projects = [
  {
    name: "Face recognition to unlock the door",
    details:[
      "This is the security door lock system. Users must be authorized by the system to unlock the system. The system will authorize from the user's face. and then compare it with the existingdatabase.This project used OpenCV to make face recognition system, Tkinter for frontend, and PyUSB to communicate between hardware and frontend.",
    ],
    url: "github.com/stamp465/Practicum",
  },
  {
    name: "RainDeer tutoring school’s registration system",
    details:[
      "The system was created to reduce the use of paper in registration. And makes managing a list of students more convenient. This project made me learn to use the database system with MongoDB atlas and web design.",
    ],
  },
  {
    name: "Prommanusorn school’s enrollment system",
    details:[
      "The system was created as a replacement for the existing enrollment system. There are many problems, such as the inability to accommodate large numbers of people, the inability of students to cancel their enrollment. This project made me learn to use new web frameworks such as React, firebase (Database), and Netlify (Hosting).",
    ],
  },
  {
    name: "Prommanusorn school’s recruitment system",
    details:[
      "The system was created to reduce the errors in entering the computer information system in the recruitment of students annually. By the system to read information from the applicant's ID card And bring that readable data into the database and the system will automatically arrange the examination room and exam seat number for the applicants. This project made me learn to use Tkinter libraries in Python and SQLite.",
    ],
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