export const contentData = [
  {
    title: "Work Experience",
    items: [
      {
        title: "Senior Full Stack Developer at Nidhi Corporation",
        subTitle: "Remote",
        date: "2025 - Present",
        description:
          "Design, develop, and maintain scalable, high-performance web applications.",
      },
      {
        title: "Full Stack Developer at Freelance",
        subTitle: "Remote",
        date: "2023 - 2025",
        description: "Working for clients around the world.",
      },
    ],
  },
  {
    title: "Education",
    items: [
      {
        title: "Bachelor's Degree in Computer Science",
        subTitle: "RTU, Kota",
        date: "2019 - 2023",
        description: "Specialized in web development.",
      },
    ],
  },
  //   @NOTE: You can add more sections here
  {
    title: "Projects",
    items: [
      {
        title: "Project 1",
        subTitle: "Sub Title",
        date: "2015 - 2016",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing eli",
      },
    ],
  },
];

export type Content = {
  title: string;
  items: {
    title: string;
    subTitle: string;
    date: string;
    description: string;
  }[];
};

export type ContentData = Content[];
