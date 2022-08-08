import React, { useState } from "react"
import { SkillIcon } from "./SkillIcon"
import { FaHtml5, FaCss3Alt, FaGitAlt, FaJsSquare, FaReact, FaPython, FaJava } from 'react-icons/fa';
import { SiTypescript, SiCplusplus } from 'react-icons/si';

export const Skills = () => {

  const skills = [
    { name: "html", logo: FaHtml5 },
    { name: "css", logo: FaCss3Alt},
    { name: "git", logo: FaGitAlt },
    { name: "js", logo: FaJsSquare },
    // { name: "ts", logo: SiTypescript },
    { name: "react", logo: FaReact },
    { name: "python", logo: FaPython },
    { name: "cplusplus", logo: SiCplusplus },
    { name: "java", logo: FaJava }
  ]


  const renderSkills = (skills) => {
    return skills.map((Skill, index) => {

      return (
        <SkillIcon 
          key={index}
          skill={() => <Skill.logo />}
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

        <li className="list-inline-item">
          {renderSkills(skills)}
        </li>

      </ul>
    </div>
  </section>
  )
}