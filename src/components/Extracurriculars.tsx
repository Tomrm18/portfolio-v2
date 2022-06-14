import React from 'react';

type ExtracurricularsProps = {
  clubs?: any;
}

export const Extracurriculars = ({ clubs }: ExtracurricularsProps) => {

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

  return (
    <section
      className="resume-section p-3 p-lg-5 d-flex align-items-center"
      id="extracurriculars"
    >
      <div className="w-100">
        <h2 className="mb-5">Extracurriculars</h2>
          {renderClubs(clubs)}

          <br></br>

          <h3>Personal Projects</h3>
      </div>
    </section>
  )
}