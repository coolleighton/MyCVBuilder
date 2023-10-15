import styles from "../styles/CVPreview.css";

function CVPreview({ skills, personalInfo, education }) {
  return (
    <>
      <div className="CVPreview">
        <h1>{personalInfo.fullName}</h1>
        <h1>{personalInfo.email}</h1>
        <h1>{personalInfo.phoneNumber}</h1>
        <h1>{personalInfo.homeAddress}</h1>
        <h1>{personalInfo.personalDescription}</h1>

        {skills.map((skillItem) => {
          return <h1 key={skillItem.skill}>{skillItem.skill}</h1>;
        })}

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
    </>
  );
}

export default CVPreview;
