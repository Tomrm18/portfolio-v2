import React from "react"
import resume from "../assets/pdf/resume.pdf";

type AboutProps = {
  config: any
}

export const About = ({ config }: AboutProps) => {

  return (
    <section
    className="resume-section p-3 p-lg-5 d-flex align-items-center"
    id="about"
  > 
    <div className="w-100">
      <div className="text-center">
        <h1 className="mb-0">
          {config.firstName}
          <span className="text-primary"> {config.lastName}</span>
        </h1>
      </div>
      <div className="subheading mb-5 text-center">
        <a href={`mailto:${config.email}`}>{config.email}</a>
      </div>
      <p className="lead mb-5">
      {config.about}
      </p>

      <div className="social-icons text-center">
        {config.socialLinks.map((social) => {
          const { icon, name, url } = social;
          
          return (
            name == "Resume" ?

              (<a key={url} href={resume} target="_blank">
                <i className={`${icon}`}></i>
              </a>)
            :
            (<a key={url} href={url} target="_blank">
            <i className={`${icon}`}></i>
            </a>)
          )

            
        })}
      </div>
    </div>
  </section>
  )
}