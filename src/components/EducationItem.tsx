import React from "react"

export const EducationItem = ( {title, subtitle, rightTitle, index} ) => {
  return (
      <div className="resume-content mb-3" data-testid="section-content">
        <div className="d-flex justify-content-between">
          <span className="subheading">{title}</span>
          <div
            className="resume-date text-right"
            data-testid="section-right-title"
          >
            <span className="text-primary">{subtitle}</span>
          </div>
        </div>

        {/* {description && <p className="mb-0">{description}</p>}
        {descriptionList && renderDescriptionList(descriptionList)} */}
      </div>
  );
}