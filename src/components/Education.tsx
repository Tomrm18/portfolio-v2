import React from "react"

import SectionItem from './SectionItem';
import { useLogoImages } from '../hooks';

type EducationProps = {
  education: any
}

export const Education = ({ education }: EducationProps) => {


  const logoImages = useLogoImages();

  const renderEducation = (education) => {

    return education.map((job, index) => {

      return (
        <SectionItem 
        key={index}
        title={job.school}
        subtitle={job.degree}
        rightTitle={`${job.startDate} - ${job.endDate} | ${job.priority}`}
        imageRenderer={<img width={50} src={logoImages[job.imageName].publicURL}  alt={job.imageName} />}
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