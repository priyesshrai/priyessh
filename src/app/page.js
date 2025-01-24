import About from "@/components/About";
import Education from "@/components/Education";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import WorkExperience from "@/components/WorkExperience";
import React from "react";

export default function Home() {
  return (
    <>
      <Hero />
      <About/>
      <WorkExperience/>
      <Education/>
      <Skills/>
      <Projects/>
    </>
  );
}
