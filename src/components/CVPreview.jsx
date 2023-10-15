import styles from "../styles/CVPreview.css";
import { v4 as uuidv4 } from "uuid";

function CVPreview({ skills, personalInfo, education, experience }) {
  return (
    <>
      <div className="CVPreview" key={uuidv4()}>
        <div className="header">
          <h1>{personalInfo.fullName}</h1>
          <div>
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

        <div className="profile">
          <h2>Profile</h2>
          <h1>{personalInfo.personalDescription}</h1>
        </div>

        <div className="skills">
          {skills.map((skillItem) => {
            return <h1 key={skillItem.skill}>{skillItem.skill}</h1>;
          })}
        </div>

        <div className="education">
          {education.map((educationItem) => {
            return (
              <div>
                <h1 key={educationItem.school}>{educationItem.school}</h1>
                <h1 key={educationItem.degree}>{educationItem.degree}</h1>
                <h1 key={educationItem.startDate}>{educationItem.startDate}</h1>
                <h1 key={educationItem.endDate}>{educationItem.endDate}</h1>
                <h1 key={educationItem.location}>{educationItem.location}</h1>
              </div>
            );
          })}
        </div>

        <div className="experience">
          {experience.map((experienceItem) => {
            return (
              <div>
                <h1 key={experienceItem.company}>{experienceItem.company}</h1>
                <h1 key={experienceItem.position}>{experienceItem.position}</h1>
                <h1 key={experienceItem.startDate}>
                  {experienceItem.startDate}
                </h1>
                <h1 key={experienceItem.endDate}>{experienceItem.endDate}</h1>
                <h1 key={experienceItem.description}>
                  {experienceItem.description}
                </h1>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default CVPreview;
