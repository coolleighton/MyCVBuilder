import styles from "../styles/CVPreview.css";
import { v4 as uuidv4 } from "uuid";

function CVPreview({
  skills,
  personalInfo,
  education,
  experience,
  font,
  layout,
  colour,
  colourMode,
}) {
  // Change layout

  const CVPreviewLayout = () => {
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

  const headerRowLayout = () => {
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

  // Change font

  const elFontFamily = () => {
    let fontfamily = {
      fontFamily: font,
    };
    return fontfamily;
  };

  // Change colours + font

  const CVColours = () => {
    let colours = {
      color: colour,
      backgroundColor: colourMode[1],
      fontFamily: font,
    };
    return colours;
  };

  const CVHeaderColours = () => {
    let colours = {
      backgroundColor: colour,
    };
    return colours;
  };

  const CVHeaderTextColour = () => {
    let colours = {
      color: colourMode[0],
      fontFamily: font,
    };
    return colours;
  };

  // CV Preview

  return (
    <>
      <div className="container">
        <div
          id="CVPreview"
          className="CVPreview"
          key={1}
          style={CVPreviewLayout()}
        >
          <div style={CVHeaderColours()} className="header">
            <h1 style={CVHeaderTextColour()}>{personalInfo.fullName}</h1>
            <div id="headerRow" className="headerRow" style={headerRowLayout()}>
              <div>
                <img src={colourMode[2]}></img>
                <p style={CVHeaderTextColour()}>{personalInfo.email}</p>
              </div>
              <div>
                <img src={colourMode[4]}></img>
                <p style={CVHeaderTextColour()}>{personalInfo.phoneNumber}</p>
              </div>
              <div>
                <img src={colourMode[3]}></img>
                <p style={CVHeaderTextColour()}>{personalInfo.homeAddress}</p>
              </div>
            </div>
          </div>

          <div>
            <div className="profile">
              <h2 style={CVColours()}>Profile</h2>
              <p style={elFontFamily()}>{personalInfo.personalDescription}</p>
            </div>

            <div className="skills">
              <h2 style={CVColours()}>Skills</h2>
              <ul>
                {skills.map((skillItem) => {
                  return (
                    <li style={elFontFamily()} key={skillItem.id}>
                      {skillItem.skill}
                    </li>
                  );
                })}
              </ul>
            </div>

            <div className="education">
              <h2 style={CVColours()}>Education</h2>
              {education.map((educationItem) => {
                return (
                  <div key={educationItem.id} className="educationItem">
                    <div className="infoLeft">
                      <div className="dates">
                        <p style={elFontFamily()} key={educationItem.startDate}>
                          {educationItem.startDate}
                        </p>
                        <p style={elFontFamily()}> - </p>
                        <p style={elFontFamily()} key={educationItem.endDate}>
                          {educationItem.endDate}
                        </p>
                      </div>
                      <p style={elFontFamily()} key={educationItem.location}>
                        {educationItem.location}
                      </p>
                    </div>
                    <div className="infoRight">
                      <p
                        style={elFontFamily()}
                        className="bold"
                        key={educationItem.school}
                      >
                        {educationItem.school}
                      </p>
                      <p style={elFontFamily()} key={educationItem.degree}>
                        {educationItem.degree}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="experience">
              <h2 style={CVColours()}>Experience</h2>
              {experience.map((experienceItem) => {
                return (
                  <div key={experienceItem.id} className="experienceItem">
                    <div className="infoLeft">
                      <div className="dates">
                        <p style={elFontFamily()} key={experienceItem.startDate}>
                          {experienceItem.startDate}
                        </p>
                        <p style={elFontFamily()}> - </p>
                        <p style={elFontFamily()} key={experienceItem.endDate}>
                          {experienceItem.endDate}
                        </p>
                      </div>
                      <p style={elFontFamily()} key={experienceItem.position}>
                        {experienceItem.position}
                      </p>
                    </div>
                    <div className="infoRight">
                      <p
                        style={elFontFamily()}
                        className="bold"
                        key={experienceItem.company}
                      >
                        {experienceItem.company}
                      </p>
                      <p style={elFontFamily()} key={experienceItem.description}>
                        {experienceItem.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CVPreview;
