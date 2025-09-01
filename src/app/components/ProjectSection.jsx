"use client";
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";

const projectsData = [
  {
    id: 1,
    title: "NextJS Portfolio Website",
    description: "Personal portfolio website built with NextJS and Tailwind CSS, featuring projects, skills, and contact integration. Includes an email system powered by Resend API.",
    image: "/images/projects/joshua-portfolio-website.png",
    tag: ["All", "Full Stack"],
    gitUrl: "https://github.com/JoshCodeAligator/joshua-portfolio-website",
    previewUrl: "https://joshua-portfolio-website-nine.vercel.app/",
  },
  {
    id: 2,
    title: "Pet Adoption App",
    description: "Developed a responsive full-stack web application that connects users with adoptable pets. Built with React for the frontend, Node.js/Express for the backend, and MongoDB for data persistence. Features include search, filtering, and adoption request forms.",
    image: "/images/projects/pet-adoption.png",
    tag: ["All", "Full Stack"],
    gitUrl: "https://github.com/JoshCodeAligator/pet-adoption-401",
    previewUrl: "/",
  },  
  {
    id: 3,
    title: "Capstone Mobile App",
    description: "React Native app built with a team to connect students through shared updates, backed by APIs and PostgreSQL.",
    image: "/images/projects/capstone.png", 
    tag: ["All", "Full Stack"],
    gitUrl: "https://github.com/JoshCodeAligator/Capstone-App", 
    previewUrl: "/", 
  },
  {
    id: 4,
    title: "Pensieve-PPO",
    description: "Adapted a reinforcement learning model to boost video streaming quality over satellite and terrestrial networks.",
    image: "/images/projects/pensieve-ppo.png", 
    tag: ["All", "Machine Learning"],
    gitUrl: "https://github.com/JoshCodeAligator/Pensieve-PPO",
    previewUrl: "/",
  },
  
  {
    id: 5,
    title: "JusticeBot",
    description: "AI chatbot that explains legal information in plain language using NLP and Python.",
    image: "/images/projects/justicebot.jpg", 
    tag: ["All", "Machine Learning"],
    gitUrl: "https://github.com/JoshCodeAligator/Hackathon2024-JusticeBot", 
    previewUrl: "/",
  },
  {
    id: 6,
    title: "TIES Resume Builder",
    description: "Crafted a user-centric Resume Builder using frontend development technologies HTML, CSS, and Javascript with a focus on delivering an intuitive user experience.",
    image: "/images/projects/ties-resume-builder.png",
    tag: ["All", "Full Stack"],
    gitUrl: "https://github.com/JoshCodeAligator/TIES-Resume-Builder",
    previewUrl: "https://ties-resume-builder.vercel.app/index.html",
    
  },
  {
    id: 7,
    title: "Ticketing App",
    description: "Created a ticketing app that allows users can report a software or hardware problem they are experiencing. Built with NextJS, Tailwind CSS, and MongoDB Atlas.",
    image: "/images/projects/ticket-app.png",
    tag: ["All", "Full Stack"],
    gitUrl: "https://github.com/JoshCodeAligator/josh-ticket-app",
    previewUrl: "/",
  },
  {
    id: 8,
    title: "Wordle Game",
    description: "Designed and built an interactive mock wordle game using HTML, CSS, and Javascript.",
    image: "/images/projects/wordle-pic.png",
    tag: ["All", "Full Stack"],
    gitUrl: "https://github.com/JoshCodeAligator/joshua-debele-world",
    previewUrl: "https://joshua-debele-world.vercel.app/",
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
    <section id="#projects">
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
