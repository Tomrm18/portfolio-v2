import React from "react"

type InterestsProps = {
  interests: any
}

export const Interests = ({ interests }: InterestsProps) => {

  const renderInterests = (interests) => {
    return interests.map((interest, index) => {
      return (
        <>
          {interest}
        </>
      )
    })
  }

  return (
    <section
    className="resume-section p-3 p-lg-5 d-flex align-items-center"
    id="interests"
  >
    <div className="w-100">
      <h2 className="mb-5">Interests</h2>
      <p>
        {renderInterests(interests)}
      </p>
    </div>
  </section>
  )
}