import React, { useState } from "react"
import { SkillIcon } from "./SkillIcon"


export const Skills = () => {

  const skills = [
    { name: "html", logo: "fa-html5" },
    { name: "css", logo: "fa-css3-alt" },
    { name: "js", logo: "fa-js-square" },
    { name: "react", logo: "fa-react" },
    { name: "git", logo: "fa-git-alt" },
    { name: "python", logo: "fa-python" },
  ]


  const renderSkills = (skills) => {
    return skills.map((skill, index) => {

      return (
        <SkillIcon 
          key={index}
          skill={skill.logo}
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