import React, { useState } from "react"
import { SkillIcon } from "./SkillIcon"
import { FaHtml5, FaCss3Alt, FaGitAlt, FaJsSquare, FaReact, FaPython, FaJava, FaSass } from 'react-icons/fa';
import { SiTypescript, SiCplusplus } from 'react-icons/si';

export const Skills = () => {

  const skills = [
    { name: "html", logo: FaHtml5 },
    { name: "css", logo: FaCss3Alt},
    { name: "sass", logo: FaSass},
    { name: "javascript", logo: FaJsSquare },
    { name: "python", logo: FaPython },
    { name: "react", logo: FaReact },
    { name: "git", logo: FaGitAlt },
    { name: "java", logo: FaJava },
    { name: "c++", logo: SiCplusplus },
  ]


  const renderSkills = (skills) => {
    return skills.map((Skill, index) => {

      return (
        <SkillIcon 
          key={index}
          skill={() => <Skill.logo />}
          name={Skill.name}
        />
      )
    })
  }

  return (
    <section
    className="resume-section p-3 p-lg-5 d-flex align-items-center"
    id="skills"
  >
    <div className="w-100">
      <h2 className="mb-5">Skills</h2>

      <div className="subheading mb-3">
        Programming Languages &amp; Tools
      </div>
      <ul className="list-inline dev-icons">

        <li className="list-inline-item skill-items">
          {renderSkills(skills)}
        </li>

      </ul>
    </div>
  </section>
  )
}