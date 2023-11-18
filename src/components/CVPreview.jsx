import styles from "../styles/CVPreview.css";
import { v4 as uuidv4 } from "uuid";

function CVPreview({
  skills,
  personalInfo,
  education,
  experience,
  fontFamily,
  layout,
}) {
  const CVPreviewClass = () => {
    if (layout === "top") {
      let styles = {
        flexDirection: "column",
      };
      return styles;
    } else if (layout === "left") {
      let styles = {
        flexDirection: "row",
      };
      return styles;
    } else if (layout === "right") {
      let styles = {
        flexDirection: "row-reverse",
      };
      return styles;
    }
  };

  const headerRowClass = () => {
    if (layout === "top") {
      let styles = {
        flexDirection: "row",
      };
      return styles;
    } else if (layout === "left") {
      let styles = {
        flexDirection: "column",
      };
      return styles;
    } else if (layout === "right") {
      let styles = {
        flexDirection: "column",
      };
      return styles;
    }
  };

  return (
    <>
      <div
        id="CVPreview"
        className="CVPreview"
        key={1}
        style={CVPreviewClass()}
      >
        <div className="header">
          <h1 style={fontFamily}>{personalInfo.fullName}</h1>
          <div id="headerRow" className="headerRow" style={headerRowClass()}>
            <div>
              <img src="src/assets/email-white-img.png"></img>
              <p>{personalInfo.email}</p>
            </div>
            <div>
              <img src="src/assets/phone-white-img.png"></img>
              <p>{personalInfo.phoneNumber}</p>
            </div>
            <div>
              <img src="src/assets/location-white-img.png"></img>
              <p>{personalInfo.homeAddress}</p>
            </div>
          </div>
        </div>

        <div>
          <div className="profile">
            <h2>Profile</h2>
            <p>{personalInfo.personalDescription}</p>
          </div>

          <div className="skills">
            <h2>Skills</h2>
            <ul>
              {skills.map((skillItem) => {
                return <li key={skillItem.id}>{skillItem.skill}</li>;
              })}
            </ul>
          </div>

          <div className="education">
            <h2>Education</h2>
            {education.map((educationItem) => {
              return (
                <div key={educationItem.id} className="educationItem">
                  <div className="infoLeft">
                    <div className="dates">
                      <p key={educationItem.startDate}>
                        {educationItem.startDate}
                      </p>
                      <p> - </p>
                      <p key={educationItem.endDate}>{educationItem.endDate}</p>
                    </div>
                    <p key={educationItem.location}>{educationItem.location}</p>
                  </div>
                  <div className="infoRight">
                    <p className="bold" key={educationItem.school}>
                      {educationItem.school}
                    </p>
                    <p key={educationItem.degree}>{educationItem.degree}</p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="experience">
            <h2>Experience</h2>
            {experience.map((experienceItem) => {
              return (
                <div key={experienceItem.id} className="experienceItem">
                  <div className="infoLeft">
                    <div className="dates">
                      <p key={experienceItem.startDate}>
                        {experienceItem.startDate}
                      </p>
                      <p> - </p>
                      <p key={experienceItem.endDate}>
                        {experienceItem.endDate}
                      </p>
                    </div>
                    <p key={experienceItem.position}>
                      {experienceItem.position}
                    </p>
                  </div>
                  <div className="infoRight">
                    <p className="bold" key={experienceItem.company}>
                      {experienceItem.company}
                    </p>
                    <p key={experienceItem.description}>
                      {experienceItem.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default CVPreview;
