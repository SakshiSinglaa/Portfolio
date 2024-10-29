import React from 'react';
import './MyWork.css';
import educationData from '../../Assets/education_data';
import workExperienceData from '../../Assets/workExperienceData';
import arrow_icon from '../../Assets/arrow_icon.svg';

const MyWork = () => {
  return (
    <div id="work" className="mywork">
      <div className="mywork-content">

        {/* Education Section */}
        <div className="mywork-section">
          <h1>Education</h1>
          <div className="mywork-container">
            {educationData.map((edu, index) => (
              <div key={index} className="work-card">
                <div className="work-info">
                  <h2>{edu.degree}</h2>
                  <p>{edu.institution}</p>
                  <p>{edu.duration}</p>
                  <p>{edu.grade}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Work Experience Section */}
        <div className="mywork-section">
          <h1>Work Experience</h1>
          <div className="mywork-container">
            {workExperienceData.map((work, index) => (
              <div key={index} className="work-card">
                <div className="work-info">
                  <h2>{work.role}</h2>
                  <p>{work.company}</p>
                  <p>{work.duration}</p>
                  <p>{work.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

    </div>
  );
};

export default MyWork;
