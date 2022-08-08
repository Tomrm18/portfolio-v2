import React from "react"

type SkillIconProps = {
  skill: () => JSX.Element;
}

export const SkillIcon = ({ skill }: SkillIconProps) => {
  const icon = skill();

  return (
    <li className="list-inline-item">
      <i>{icon}</i>
    </li>
  )
}