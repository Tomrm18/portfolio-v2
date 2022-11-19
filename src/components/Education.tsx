import React from "react"
import { EducationSchool } from "../components";
import { useLogoImages } from '../hooks';

type EducationProps = {
  education: any
}

export const Education = ({ education }: EducationProps) => {

  const logoImages = useLogoImages();

  const renderEducation = (education) => {

    return education.map((item, index) => {
      const { school, items, imageName } = item;
      return (
        <EducationSchool
          key={index}
          school={school}
          items={items}
          imageRenderer={<img width={80} src={logoImages[imageName].publicURL}  alt={imageName} />}
        />
      )
    })
  }


  return (
    <section
    className="resume-section p-3 p-lg-5 d-flex align-items-center"
    id="education"
  >
    <div className="w-100">
      <h2 className="mb-5">Education</h2>
        {renderEducation(education)}
    </div>
  </section>
  )
}