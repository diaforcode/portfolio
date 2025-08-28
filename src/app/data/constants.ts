export interface Skill {
  name: string;
}

export interface SkillGroup {
  title: string;
  skills: Skill[];
}

export interface Education {
  id: number;
  school: string;
  date: string;
  desc: string;
  degree: string;
}

export interface Project {
  id: number;
  title: string;
  date: string;
  description: string;
  image: string;
  tags: string[];
  category: string;
  github: string;
  webapp: string;
}

// Then reuse your same content but with type safety
export const skills: SkillGroup[] = [
  {
    title: "Other abilities",
    skills: [
      {
        name: "Redux",
      },
      {
        name: "Next Js",
      },

      {
        name: "Bootstrap",
      },
      {
        name: "Tailwind CSS",
      },
      {
        name: "Material UI",
      },
      {
        name: "MySQL",
      },

      {
        name: "Firebase",
      },
      {
        name: "XML",
      },
      {
        name: "Android Studio",
      },

      {
        name: "Git",
      },
      {
        name: "GitHub",
      },

      {
        name: "VS Code",
      },
      {
        name: "Postman",
      },

      {
        name: "JSON",
      },
      {
        name: "LATEX",
      },
      {
        name: "Microsoft Office",
      },
      {
        name: "strapi",
      },
    ],
  },
];
export const education = [
  {
    id: 0,
    school: "University Mohamed Khider Biskra",
    date: "Sep 2017 - Aug 2020",
    desc: "He earned a Bachelor's degree in Computer Science and Information Systems from University Mohamed Khider Biskra in 2020. The program provided him with a strong foundation in computer science, including programming, algorithms, and software development. His academic journey cultivated technical skills, a problem-solving mindset, and a passion for innovation, preparing him to excel in software development and IT. His degree serves as the cornerstone of his career, enabling him to tackle complex challenges and make impactful contributions to the field.",
    degree: "Bachelor’s Degree - Computer Science",
  },
  {
    id: 1,
    school: "University Mohamed Khider Biskra",
    date: "Sep 2020 - Aug 2022",
    desc: "He earned a Master's degree in Computer Science with a focus on Information Systems, Optimization, and Decision Making from Mohamed Khedr University in Biskra in 2022. This program deepened his expertise in computer science and information systems, enhancing his skills in decision-making processes through advanced coursework, research, and practical applications. His degree expanded his technical proficiency, fostered critical thinking, and enabled him to address complex challenges in technology and information systems with data-driven solutions, highlighting his dedication to ongoing learning and leadership in the field.",
    degree: "Master’s Degree - Optimization & Decision",
  },
];
export const projects: Project[] = [
  {
    id: 1,
    title: "cronos shop",
    date: "Jan 2023 - may 2023",
    description:
      "I am thrilled to showcase my full-stack development expertise through the creation of the 'Cronos' store, a project I single-handedly conceived and developed. On the client side, I utilized JavaScript, HTML5, and CSS to craft the website's engaging user interface. React JS, Material UI, and Redux were integral in creating a seamless and visually appealing front-end experience. For the server-side functionality, I turned to Node.js and Express.js, ensuring robust and efficient handling of requests and responses. On the database front, I implemented MongoDB to manage data, ensuring data integrity and reliability. The 'Cronos' store project is a testament to my end-to-end web development skills, from front-end design to back-end implementation, showcasing my ability to deliver a fully functional and responsive web application.",
    image:
      "https://firebasestorage.googleapis.com/v0/b/zehana-diyaa.appspot.com/o/Screenshot%202023-09-21%20203823.png?alt=media&token=084255e9-da0b-45d3-a587-5fa65bbc6870",
    tags: ["React Js", "Redux", "MongoDb", "Node Js", "Express Js"],
    category: "web app",
    github: "https://github.com/Dayou23/CRONOS",
    webapp: "https://cronos-market.web.app",
  },
  {
    id: 2,
    title: "cronos dashboard",
    date: "Jan 2023 - may 2023",
    description:
      "I take immense pride in my work on the Cronos Dashboard, a full-stack web application that I meticulously developed from start to finish. On the client side, I leveraged my expertise in JavaScript, HTML5, and CSS to create an elegant and user-friendly interface. The implementation of the React JS library, in conjunction with Material UI and Redux, ensured a seamless and responsive front-end experience. On the server side, I turned to Node.js and Express.js to build a robust and efficient server infrastructure capable of handling complex administrative tasks. For data management, I seamlessly integrated MongoDB on the back end, guaranteeing data integrity and accessibility. The Cronos Dashboard project exemplifies my prowess as a full-stack developer, showcasing my ability to craft sophisticated, end-to-end web applications that elevate user experiences and streamline administrative processes. note: cronos dashboard is considered an admin for cronos store",
    image:
      "https://firebasestorage.googleapis.com/v0/b/zehana-diyaa.appspot.com/o/Screenshot%202023-09-21%20212022.png?alt=media&token=e2533609-c67a-4f15-a548-3748d9de136c",
    tags: ["React Js", "Redux", "MongoDb", "Node Js", "Express Js"],
    category: "web app",
    github: "https://github.com/Dayou23/cronos-dashboard",
    webapp: "https://cronos-dashboard.web.app",
    // member: [
    //   {
    //     name: "Zehana diyaa",
    //     img: "",
    //     linkedin: "",
    //     github: "",
    //   },
    //   {
    //     name: "",
    //     img: "",
    //     linkedin: "",
    //     github: "",
    //   },
    // ],
  },
  {
    id: 3,
    title: "prayer timing",
    date: "oct 2023 - nov 2023",
    description:
      "The Islamic faith involves five fundamental prayers, and the scheduling of these prayers is associated with the sun's cycle from sunrise to sunset. The Aladhan API was utilized to ascertain the timings of each prayer session. A website was created using the React JS library, and the design incorporated the Material user interface.",
    image:
      "https://firebasestorage.googleapis.com/v0/b/zehana-diyaa.appspot.com/o/prayer-timing-2023-11-17%20183959.png?alt=media&token=687a6677-d840-4af1-98b8-2dcb733a5145",
    tags: ["React Js", "Material UI"],
    category: "web app",
    github: "https://github.com/Dayou23/prayer-time",
    webapp: "https://zippy-cucurucho-9945ac.netlify.app/",
  },
  {
    id: 4,
    title: "Deifel Gypse",
    date: "Jan 2024 - feb 2024",
    description:
      "Deifel-Gypse, a full-stack website project that highlights my proficiency in both frontend and backend programming, is something I'm glad to present. Utilizing the client-side capabilities of HTML5, Tailwind CSS, and TypeScript, I created a dynamic and captivating user interface with the Next.js framework. To effectively manage and distribute information, I incorporated the Strapi information Management System on the server side in the meantime. This project showcases my expertise in cutting-edge web development technologies as well as my ability to combine frontend and backend elements in a smooth manner to produce a well-thought-out and useful online solution.",
    image:
      "https://firebasestorage.googleapis.com/v0/b/zehana-diyaa.appspot.com/o/deifel-gypse.png?alt=media&token=eab4014e-5972-4e4b-b81f-395c25ef6497",
    tags: ["next Js", "strapi", "Tailwind CSS"],
    category: "web app",
    github: "https://github.com/Dayou23/gypsum_company",
    webapp: "https://deifel-gypse.vercel.app/",
  },
  {
    id: 5,
    title: "kuro mobile",
    date: " may 2024 - july 2024",
    description:
      "Kuro is an innovative mobile application designed for publishing technical events. Developed with the React Native framework, it harnesses the power of Tailwind CSS for creating intuitive user interfaces. On the backend, Kuro leverages the robust capabilities of the Appwrite platform, ensuring seamless integration and efficient performance.",
    image:
      "https://firebasestorage.googleapis.com/v0/b/zehana-diyaa.appspot.com/o/kuroMobile.jpg?alt=media&token=58734331-9acc-4023-9971-0a9c5b2f792d",
    tags: ["React Native", "Tailwind CSS", "Appwrite"],
    category: "mobile app",
    github: "https://github.com/Dayou23/kuro_mobile",
    webapp:
      "https://expo.dev/accounts/diyaa_code/projects/kuro/builds/3f724f7f-306f-42cd-8522-d95f5424aff8",
  },
  {
    id: 6,
    title: "kuro web",
    date: " may 2024 - july 2024",
    description:
      "Kuro is a cutting-edge platform dedicated to publishing tech events. Developed with the Next.js framework and TypeScript, it utilizes MongoDB for robust database management. For secure authentication and streamlined user management, Kuro integrates Clerk, ensuring a seamless and efficient user experience.",
    image:
      "https://firebasestorage.googleapis.com/v0/b/zehana-diyaa.appspot.com/o/kuro_web.PNG?alt=media&token=07667460-6399-4b51-9da0-7d8cafd04fbe",
    tags: ["next Js", "Tailwind CSS", "TypeScript", "mongoDB"],
    category: "web app",
    github: "https://github.com/Dayou23/kuro",
    webapp: "https://kuro-ochre.vercel.app/",
  },
  {
    id: 7,
    title: "Accessory Shop",
    date: "sep 2024",
    description:
      "Kuro is a cutting-edge platform dedicated to publishing tech events. Developed with the Next.js framework and TypeScript, it utilizes MongoDB for robust database management. For secure authentication and streamlined user management, Kuro integrates Clerk, ensuring a seamless and efficient user experience.",
    image:
      "https://firebasestorage.googleapis.com/v0/b/zehana-diyaa.appspot.com/o/Accessory-Shop.PNG?alt=media&token=ace52c24-4a8b-4819-85be-cd9a8be6e169",
    tags: ["next Js", "Tailwind CSS", "TypeScript"],
    category: "web app",
    github: "https://github.com/Dayou23/Accessory-Shop",
    webapp: "https://accessory-shop-two.vercel.app/",
  },
];

export const experience = [
  {
    title: "Freelancer",
    company: "Self-employed",
    duration: "2020 – Present",
    description:
      "Worked on a variety of freelance projects using React, Node.js, and modern web technologies. Collaborated with international clients and delivered responsive, accessible solutions.",
  },
  {
    title: "Computer Science Engineer",
    company: "Department of Promotion and Real Estate Management",
    duration: "2023 – Present",
    description:
      "Developing internal applications, maintaining systems, and supporting digital transformation initiatives within the department.",
  },
];
