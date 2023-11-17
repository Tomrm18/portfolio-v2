import React, { useState } from "react"
import { SkillCategory } from "../components"
import { FaHtml5, FaCss3Alt, FaGitAlt, FaJsSquare, FaReact, FaPython, FaJava, FaSass, FaDocker  } from 'react-icons/fa';
import { FaGolang } from "react-icons/fa6";
import { SiCplusplus, SiMongodb, SiKubernetes } from 'react-icons/si';
import { AiOutlineConsoleSql } from 'react-icons/ai';

export const Skills = () => {

  const skills = [
    { category: "Web Technologies", skills: [
      { name: "html", logo: FaHtml5 },
      { name: "css", logo: FaCss3Alt },
      { name: "sass", logo: FaSass},
      { name: "react", logo: FaReact },
    ]},
    { category: "Programming Languages", skills: [
      { name: "javascript", logo: FaJsSquare },
      { name: "python", logo: FaPython },
      { name: "golang", logo: FaGolang },
      { name: "java", logo: FaJava },
      { name: "c++", logo: SiCplusplus },
    ]},
    { category: "Tools", skills: [
      { name: "git", logo: FaGitAlt },
      { name: "docker", logo: FaDocker },
      { name: "kubernetes", logo: SiKubernetes },
      { name: "mongodb", logo: SiMongodb },
      { name: "sql", logo: AiOutlineConsoleSql },
    ]},
  ]


  const renderSkills = (skills) => {
    return skills.map((category, index) => {
      return <SkillCategory key={index} category={category} />
    })
  }

  return (
    <section
    className="resume-section p-3 p-lg-5 d-flex align-items-center"
    id="skills"
  >
    <div className="w-100">
      <h2 className="mb-5">Skills</h2>

      <ul className="list-inline dev-icons">

        <li className="list-inline-item skill-items d-flex flex-column">
          {renderSkills(skills)}
        </li>

      </ul>
    </div>
  </section>
  )
}