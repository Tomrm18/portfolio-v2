import React from "react"
import { EducationItem } from "./";

export const EducationSchool = ( {school, items, imageRenderer} ) => {
  return (
    <div className="resume-item d-flex mb-5 w-100">
        {imageRenderer && (
          <div className="resume-image d-none d-sm-block mr-4 pt-2">
            {imageRenderer}
          </div>
        )}
      <div className="resume-content w-100">
      <h3>{school}</h3>
      {items.map((item, index) => {
        return (
          <EducationItem 
          index={index}
          title={item.title}
          rightTitle={item.title}
          subtitle={`${item.startDate} - ${item.endDate}`}
          />
        )
      })}
      </div>
    </div>
  )
}