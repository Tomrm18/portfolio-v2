import React from 'react';

type ExtracurricularsProps = {
  clubs?: any;
  personalProjects?: any;
}

export const Extracurriculars = ({ clubs, personalProjects }: ExtracurricularsProps) => {

  const renderClubs = (clubs) => {

    if (!clubs || !clubs.length) return <> </>
 
    const clubList = clubs.map((club, index) => {
      return (
        <div key={index}>
          <div className="d-flex justify-content-between">
            <h4 className="mb-0">{club.name}</h4>
            <div className="text-right">
              <span className="text-primary">
                {club.date.start + ' - ' + club.date.end}
              </span>
            </div>
          </div>
          <p>{club.title}</p>
        </div>
      )
    })

    return (
      <>
        <h3>Student Clubs</h3>
        {clubList}
      </>
    )
  }

  const renderPersonalProjects = (personalProjects) => {
    if (!personalProjects || !personalProjects.length) return <> </>

    const projectsList = personalProjects.map((project, index) => {
      return (
        <div key={index}>
          <div className="d-flex justify-content-between">
            <h4 className="mb-0">{project.name}</h4>
            <div className="text-right">
              <span className="text-primary">
                {project.date.start + ' - ' + project.date.end}
              </span>
            </div>
          </div>
        </div>
      )
    })

    return (
      <>
        <h3>Personal Projects</h3>
        {projectsList}
      </>
    )
  }

  return (
    <section
      className="resume-section p-3 p-lg-5 d-flex align-items-center"
      id="extracurriculars"
    >
      <div className="w-100">
        <h2 className="mb-5">Extracurriculars</h2>
          {renderClubs(clubs)}

          <br></br>

          {renderPersonalProjects(personalProjects)}
      </div>
    </section>
  )
}