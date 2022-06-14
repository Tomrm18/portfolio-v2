import React from 'react';
import { GatsbyImage  } from 'gatsby-plugin-image';

import SectionItem from './SectionItem';
import { useLogoImages } from '../hooks';


type ExperienceProps = {
  experience: any
}

const Experience = ({ experience }: ExperienceProps) => {

  const logoImages = useLogoImages();

  console.log(logoImages)

  const renderExperiences = (experience) => {

    return experience.map((job, index) => {

      return (
        <SectionItem 
        key={index}
        title={job.role}
        subtitle={job.company}
        description={job.description}
        descriptionList={job.tasks}
        rightTitle={`${job.startDate} - ${job.endDate}`}
        imageRenderer={<img width={80} src={logoImages[job.imageName].publicURL}  alt={job.imageName} />}
        testId={'experience-content'}
        />
      )
    })
  }


  return (
    <section
      className="resume-section p-3 p-lg-5 d-flex justify-content-center"
      id="experience"
      data-testid="experience-section"
    >
      <div className="w-100">
        <h2 className="mb-5">Experience</h2>
          {renderExperiences(experience)}
      </div>
    </section>
  );
}

export default Experience;