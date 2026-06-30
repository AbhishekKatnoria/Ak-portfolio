// Resume data structure - centralized source of truth
export const resumeData = {
  personal: {
    name: "Abhishek Katnoria",
    title: "Software Engineer",
    email: "abhishekkatnoria993@gmail.com",
    location: "Rajpura, Punjab, India",
    phone: "+91 8894066726",
    website: "",
    linkedin: "https://linkedin.com/in/abhishek-katnoria-2221581b2",
    github: "https://github.com/AbhishekKatnoria"
  },

  summary: "Software Engineer skilled in building cross-platform applications using React, TypeScript, Next.js, and Redux. Experienced in creating responsive, consistent UIs with Tailwind CSS, SCSS, and MUI, integrating REST APIs, and optimizing app performance across mobile and web platforms. Strong understanding of frontend architecture, component design, and clean code practices, with experience mentoring junior developers and collaborating closely with backend teams.",

  experience: [
    {
      company: "Rw Infotech",
      role: "Software Engineer",
      period: "02/2024 – 04/2025",
      location: "Mohali, India",
      description: [
        "Built and maintained cross-platform applications using React with TypeScript.",
        "Designed responsive and consistent UIs using Tailwind CSS, SCSS, and MUI.",
        "Integrated REST APIs and optimized app performance for smooth user experiences on both mobile and web platforms.",
        "Developed key features like mobile authentication flows, job listings UI, admin dashboards, and dynamic forms.",
        "Implemented mobile-friendly search, filter, and responsive UI components in React.",
        "Collaborated with backend teams to integrate APIs for real-time data handling.",
        "Participated in code reviews, managed pull requests, and ensured clean code practices.",
        "Mentored junior developers in React, offering support and feedback through code reviews."
      ]
    },
    {
      company: "Extech Digital",
      role: "Software Engineer - Intern",
      period: "02/2023 – 07/2023",
      location: "Mohali, India",
      description: [
        "Assisted in developing user-friendly web applications using HTML, CSS, and JavaScript.",
        "Collaborated with designers to implement responsive and visually appealing layouts.",
        "Utilized version control tools (e.g., Git) to manage project changes and collaborate effectively with the development team."
      ]
    }
  ],

  education: [
    {
      institution: "Chitkara University, Rajpura, Punjab",
      degree: "B.E in Computer Science Engineering",
      period: "2023",
      description: "Graduated with a 9.2 CGPA, building a strong foundation in computer science fundamentals."
    }
  ],

  skills: {
    frontend: ["HTML", "CSS", "Sass", "Tailwind CSS", "Styled Components", "MUI", "JavaScript", "TypeScript", "React.js", "Next.js", "Redux", "RTK Query"],
    backend: [],
    database: [],
    infrastructure: ["Git & GitHub"],
    other: ["C++"]
  },

  projects: [
    {
      name: "HireTechies",
      description: "Developed dashboards and recruitment workflows using Next.js, MUI, and RTK Query. Built candidate management, resume screening, and interview scheduling features. Integrated REST APIs with RTK Query for efficient data fetching and state management.",
      tech: ["Next.js", "MUI", "RTK Query"],
      link: "#"
    },
    {
      name: "ShopBix",
      description: "Developed business listing and category-based marketplace modules with detailed business profile pages. Built Create Business, My Business, Business Profile, Business Approval, and KYC Verification workflows. Integrated REST APIs and developed responsive forms for business onboarding, profile management, and inquiry handling.",
      tech: ["React.js", "JavaScript", "REST APIs"],
      link: "#"
    },
    {
      name: "NFT Marketplace",
      description: "Developed the user interface for a dynamic NFT marketplace with responsive design and interactive features. Built a responsive UI using React, Tailwind CSS, and TypeScript for seamless experiences across devices. Implemented like/dislike functionality to increase user engagement and focused on performance optimization for smooth interaction and fast load times.",
      tech: ["React", "Tailwind CSS", "TypeScript"],
      link: "#"
    }
  ],

  portfolioLinks: [],

  strengths: [
    "Cross-Platform Frontend Development",
    "Responsive UI/UX Design",
    "REST API Integration",
    "Clean Code & Code Review Practices",
    "Mentoring & Team Collaboration",
    "Performance Optimization",
    "Component-Based Architecture"
  ]
};
