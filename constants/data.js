// ----- FOR V2.0, HANDLE PROJECTS & EXPERIENCES IN DB VIA ADMIN AUTH ----- //

const userData = {
    githubUsername: "JoLrt-Dev",
    name: "Jordane LAURENT",
    designation: "Full-Stack Developer",
    avatarUrl: "/avatar.jpg",
    email: "j.laurent1993@gmail.com",
    phone: "+33 6 21 56 60 01",
    address: "Villeurbanne, France",
    projects: [
      {
        title: "Saturday Night",
        link: "https://github.com/JoLrt-dev/Team-Hack-nov21",
        imgUrl: "/saturday.png",
      },
      {
        title: "Trip@Wilders",
        link: "https://github.com/JoLrt-dev/lyon-js-sept21-p2-g2-front",
        imgUrl: "/wilders.png",
      },
      {
        title: "MeMeowRy",
        link: "https://github.com/JoLrt-dev/wild-cats-project",
        imgUrl: "/memeowry.png",
      },
      {
        title: "Simon's Game",
        link: "https://github.com/JoLrt-dev/simonGame",
        imgUrl: "/simon.png",
      },
    ],
    about: {
      title:
        "Just say anything, George, say what ever's natural, the first thing that comes to your mind.",
      description: [
        `Your, your right. Yeah well, I saw it on a rerun. Nothing's coming to my mind. Uh, well, I gotta go. Alright, good-bye Einy. Oh, watch that re-entry, it's a little bumpy.`,
        `Leave me alone. Nothing's coming to my mind. That's a great idea. I'd love to park. And he could sleep in my room. I guarantee it.`,
        `Whoa, they really cleaned this place up, looks brand new. I think I know exactly what you mean. No, Doc. What? Right.`,
      ],
      currentProject: "",
      currentProjectUrl: "",
    },
    experience: [
      {
        title: "Junior Full-Stack Developer",
        company: "Wild Code School",
        year: "2021",
        companyLink: "https://mroads.com",
        desc: "Tap multiple randoms things on a keyboard just to see what happens",
      },
      
      {
        title: " 'Cinema & Audiovisual Master's degree",
        company: "Université Paul Valéry Montpellier III",
        year: "2016",
        companyLink: "https://www.univ-montp3.fr/",
        desc: "Let's be honest, I was mostly chilling at the beach, having longboard trips, and watching old but damn good movies.",
      },
      {
        title: "High School Graduate",
        company: "Lycée Pravaz",
        year: "2011",
        companyLink: "",
        desc: "My mom told me I won't ever graduate. I do (barely). Hi mom !",
      },
    ],
    resumeUrl:
      "https://drive.google.com/file/d/1TjAll-S7iAbUx1Fv2jhM0BaSNyGKawz4/view?usp=sharing",
    socialLinks: {
      instagram: "https://instagram.com/",
      linkedin: "https://www.linkedin.com/in/jordane-laurent-5b0b0020a/",
      github: "https://github.com/JoLrt-dev",
      facebook: "https://facebook.com/",
    },
  };
  
  export default userData;  