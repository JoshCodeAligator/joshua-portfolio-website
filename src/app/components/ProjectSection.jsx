"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "NextJS Portfolio Website",
    description: "A portfolio website I designed to showcase my skillset in a variety of programming languages as well as applications I've developed and knowledge and experience I've gained through the years. I've used NextJS, React, and Tailwind CSS to create this. I also used an Resend API key for sending emails",
    image: "/images/projects/joshua-portfolio-website.png",
    tag: ["All", "Full Stack"],
    gitUrl: "https://github.com/JoshCodeAligator/joshua-portfolio-website",
    previewUrl: "https://joshua-portfolio-website-nine.vercel.app/",
  },
  {
    id: 2,
    title: "BBQ Page",
    description: "Built a front-end project with static HTML/CSS from scratch. Focused on developing and honing my skill in styling websites.",
    image: "/images/projects/bbq-pic.png",
    tag: ["All", "Full Stack"],
    gitUrl: "https://github.com/JoshCodeAligator/BBQ-Page",
    previewUrl: "https://bbq-page.vercel.app/",
  },
  {
    id: 3,
    title: "Finance Budget Tracker",
    description: "Created a Finance Budgeting App from scratch using Vite.js, React, and CSS along with some articles to help with budgeting.",
    image: "/images/projects/finance-budget-tracker.png",
    tag: ["All", "Full Stack"],
    gitUrl: "https://github.com/JoshCodeAligator/Finance-budget-tracker",
    previewUrl: "https://finance-budget-tracker.vercel.app/",
  },
  {
    id: 4,
    title: "Wordle Game",
    description: "Designed and built an interactive mock wordle game using HTML, CSS, and Javascript.",
    image: "/images/projects/wordle-pic.png",
    tag: ["All", "Full Stack"],
    gitUrl: "https://github.com/JoshCodeAligator/joshua-debele-world",
    previewUrl: "https://joshua-debele-world.vercel.app/",
  },
  {
    id: 5,
    title: "TIES Resume Builder",
    description: "Crafted a user-centric Resume Builder using frontend development technologies HTML, CSS, and Javascript with a focus on delivering an intuitive user experience.",
    image: "/images/projects/ties-resume-builder.png",
    tag: ["All", "Full Stack"],
    gitUrl: "https://github.com/JoshCodeAligator/TIES-Resume-Builder",
    previewUrl: "https://ties-resume-builder.vercel.app/index.html",
    

  },{
    id: 6,
    title: "Ticketing App",
    description: "Created a ticketing app where users can report a software or hardware problem they are experiencing. Used NextJS and Tailwind CSS for frontend, and MongoDB Atlas for the backend.",
    image: "/images/projects/ticket-app.png",
    tag: ["All", "Full Stack"],
    gitUrl: "https://github.com/JoshCodeAligator/josh-ticket-app",
    previewUrl: "/",
  },
  {
    id: 7,
    title: "Obituary Project",
    description: "I created a project that lets users create an obituary card for any dead (or alive) person. I've implemented AWS Step Functions and DynamoDB for data storage and retrieval, Cloudinary for Images, and the OpenAI API for dynamic text generation. React and CSS were used for the frontend and Python for the backend.",
    image: "/images/projects/obituary.png",
    tag: ["All", "Full Stack"],
    gitUrl: "https://github.com/JoshCodeAligator/Obituary-Project",
    previewUrl: "/",
  }, {
    id: 8,
    title: "Football Match Predictor",
    description: "Created a football match predictor that can predict which team will win upcoming football matches. The machine learning models used were Random Forest Classification and Logistic Regression. The application was programmed using Python inside JupyterLab.",
    image: "/images/projects/football-match-predictor.png",
    tag: ["All", "Machine Learning"],
    gitUrl: "https://github.com/JoshCodeAligator/Predict-Matches",
    previewUrl: "/",
  },
  
];

const ProjectSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };
  return (
    <section>
      <h2 className="text-center text-4xl font-bold text-white mt-4">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Full Stack"
          isSelected={tag === "Full Stack"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Machine Learning"
          isSelected={tag === "Machine Learning"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 mg:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{duration: 0.3, delay: index * 0.4}}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectSection;
