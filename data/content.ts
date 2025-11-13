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
  //   @NOTE: You can add more sections here
  {
    title: "Projects",
    items: [
      {
        title: "Donation Collection Platform",
        subTitle: "Next.js, PostgreSQL, Prisma",
        date: "2025 - Present",
        description:
          "A platform to facilitate and manage online donations for various causes.",
      },
      {
        title: "Staff Management System",
        subTitle: "React, Node.js, MongoDB",
        date: "2023 - 2025",
        description:
          "A web application to manage staff records, attendance, and payroll.",
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
