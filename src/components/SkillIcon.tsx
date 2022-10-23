import React from "react"

type SkillIconProps = {
  skill: () => JSX.Element;
  name: string;
}

export const SkillIcon = ({ skill, name }: SkillIconProps) => {
  const icon = skill();

  return (
    <li className="list-inline-item">
      <i>{icon}</i>
      <h4>{name}</h4>
    </li>
  )
}