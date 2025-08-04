import React from "react";
import { motion } from "framer-motion";
import { IoBookOutline, IoBriefcaseOutline } from "react-icons/io5";

const Resume = () => {
  const education = [
    {
      title: "Shri Rama Bharti Public School",
      period: "2016 — 2017",
      description: "CLASS-X",
    },
    {
      title: "Shri Rama Bharti Public School",
      period: "2018 — 2019",
      description: "CLASS-XII",
    },
    {
      title: "Amity University",
      period: "2020 — 2024",
      description: "B.Tech In Computer Science And Engineering",
    },
  ];

  const experience = [
    {
      title: "Zidio",
      period: "Aug, 2024 — Present",
      description: "Working as a full stack web developer",
    },
    {
      title: "Apex Biomedicals",
      period: "May, 2024 - July, 2024",
      description: "Worked as a frontend developer",
    },
    {
      title: "Academor",
      period: "Mar, 2023 - Apr, 2023",
      description: "Gained hands-on experience on basic cloud operations.",
    },
  ];

  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Node.js",
    "TypeScript",
    "MongoDB",
    "Express.js",
    "Tailwind CSS",
    "Git",
    "Netlify",
    "Vercel",
    "AWS",
    "Docker",
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-4xl mx-auto"
    >
      <header className="mb-8">
        <h2 className="text-3xl font-fw-600 text-white-1 article-title">
          Resume
        </h2>
      </header>

      {/* Education Section */}
      <section className="mb-12">
        <div className="flex items-center mb-6">
          <div className="w-12 h-12 bg-orange-yellow rounded-lg flex items-center justify-center mr-4">
            <IoBookOutline className="text-black text-xl" />
          </div>
          <h3 className="text-2xl font-fw-600 text-white-1">Education</h3>
        </div>

        <div className="space-y-6">
          {education.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="content-card relative pl-8 border-l-2 border-orange-yellow"
            >
              <h4 className="text-lg font-fw-600 text-white-1 mb-2">
                {item.title}
              </h4>
              <span className="text-fs-5 text-orange-yellow mb-2 block">
                {item.period}
              </span>
              <p className="text-fs-5 text-light-gray">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Experience Section */}
      <section className="mb-12">
        <div className="flex items-center mb-6">
          <div className="w-12 h-12 bg-orange-yellow rounded-lg flex items-center justify-center mr-4">
            <IoBriefcaseOutline className="text-black text-xl" />
          </div>
          <h3 className="text-2xl font-fw-600 text-white-1">Experience</h3>
        </div>

        <div className="space-y-6">
          {experience.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="content-card relative pl-8 border-l-2 border-orange-yellow"
            >
              <h4 className="text-lg font-fw-600 text-white-1 mb-2">
                {item.title}
              </h4>
              <span className="text-fs-5 text-orange-yellow mb-2 block">
                {item.period}
              </span>
              <p className="text-fs-5 text-light-gray">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Skills Section */}
      <section>
        <h3 className="text-2xl font-fw-600 text-white-1 mb-8">My Skills</h3>

        <div className="content-card">
          <div className="flex flex-wrap gap-4">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="skill-item bg-orange-yellow text-black px-4 py-2 rounded-lg"
              >
                <span className="text-fs-4 font-fw-500">{skill}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Resume;
