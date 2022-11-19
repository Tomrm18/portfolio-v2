import React from "react";
import { SkillIcon } from "./";

export const SkillCategory = ({ category }) => {

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
    <div className="d-flex flex-column">
      <div className="subheading mb-3">
        {category.category}
      </div>  

      <div className="d-flex">
        {renderSkills(category.skills)}
      </div>
    </div>
  )
}

