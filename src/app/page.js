import Image from "next/image";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import AboutSection from "./components/AboutSection";
import ProjectSection from "./components/ProjectSection";
import { HashRouter as Router, Route } from "react-router-dom";

import EmailSection from "./components/EmailSection";
import Footer from "./components/Footer";
import AchievementsSection from "./components/AchievementsSection";

export default function Home() {
  const navLinks = [
    {
      title: "About",
      path: "#about",
    },
    {
      title: "Projects",
      path: "#projects",
    },
    {
      title: "Contact",
      path: "#contact",
    },
  ];
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
      <Navbar navLinks={navLinks}/>
      <div className="container mt-24 mx-auto px-12 py-4">
        <HeroSection />
        <AchievementsSection/>
        
        <AboutSection id="about"/>
        <ProjectSection id="projects" />
        <EmailSection id="contact"/>
      </div>
      <Footer/>
    </main>
  );
}
