import React from "react"

type SkillIconProps = {
  skill: string;
}

export const SkillIcon = ({ skill }: SkillIconProps) => {
  return (
    <li className="list-inline-item">
      <i className={`fab ${skill}`}></i>
    </li>
  )
}