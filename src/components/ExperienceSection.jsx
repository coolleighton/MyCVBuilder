import styles from "../styles/ExperienceSection.css";
import { v4 as uuidv4 } from "uuid";
import { useState } from "react";
import CVdata from "../Data/CVdata";

function ExperienceSection({ experience, handleChange, handleColapseForm }) {
  const activeDisplay = "block";
  const inActiveDisplay = "none";
  const activeRotation = "rotate(180deg)";
  const inActiveRotation = "rotate(0deg)";

  const [ExperienceActive, setExperienceActive] = useState(false);

  const handleHeaderClick = () => {
    if (ExperienceActive) {
      setExperienceActive(false);
    } else {
      setExperienceActive(true);
    }
  };

  return (
    <>
      <div className="ExperienceSection">
        <div onClick={handleHeaderClick} className="ExperienceHeader">
          <div className="HeaderTitle">
            <img src="./src/assets/experience-img.png"></img>
            <h1>Experience</h1>
          </div>
          <img
            style={{
              transform: ExperienceActive ? activeRotation : inActiveRotation,
            }}
            className="DropDownImg"
            src="./src/assets/down-img.png"
          ></img>
        </div>

        <ul
          style={{
            display: ExperienceActive ? activeDisplay : inActiveDisplay,
          }}
          className="JobList"
        >
          {experience.map((experienceItem) => {
            const buttonDisplay = () => {
              if (experienceItem.isActivee) {
                let activeDisplayStyle = {
                  display: "block",
                };
                return activeDisplayStyle;
              } else {
                let activeDisplayStyle = {
                  display: "none",
                };
                return activeDisplayStyle;
              }
            };

            const buttonRotation = () => {
              if (experienceItem.isActivee) {
                let activeRotationStyle = {
                  transform: "rotate(180deg)",
                };
                return activeRotationStyle;
              } else {
                let activeRotationStyle = {
                  transform: "rotate(0deg)",
                };
                return activeRotationStyle;
              }
            };

            return (
              <li key={experienceItem.id}>
                <hr className="Seperator"></hr>

                <div id={experienceItem.id} className="JobListItem" onClick={handleColapseForm}>
                  <h2 id={experienceItem.id} className="JobListItemName">{experienceItem.company}</h2>
                  <img
                    id={experienceItem.id}
                    className="JobListItemImg"
                    src="src/assets/down-img.png"
                    style={buttonRotation()}
                  ></img>
                </div>

                <div style={buttonDisplay()} className="ExperienceForm">
                  <form>
                    <label htmlFor="company">Company Name</label>
                    <input
                      onChange={(e) =>
                        handleChange(
                          e.target.value,
                          experienceItem.id,
                          e.target.id
                        )
                      }
                      defaultValue={experienceItem.company}
                      id="company"
                      type="text"
                      placeholder="Enter your company name"
                    ></input>
                    <label htmlFor="position">Position title</label>
                    <input
                      onChange={(e) =>
                        handleChange(
                          e.target.value,
                          experienceItem.id,
                          e.target.id
                        )
                      }
                      defaultValue={experienceItem.position}
                      id="position"
                      type="text"
                      placeholder="Enter your position title"
                    ></input>
                    <div className="ExperienceDates">
                      <div className="startDateDiv">
                        <label htmlFor="startDate">Start date</label>
                        <input
                          onChange={(e) =>
                            handleChange(
                              e.target.value,
                              experienceItem.id,
                              e.target.id
                            )
                          }
                          defaultValue={experienceItem.startDate}
                          id="startDate"
                          type="text"
                          placeholder="Enter your start date"
                        ></input>
                      </div>
                      <div>
                        <label htmlFor="endDate">End date</label>
                        <input
                          onChange={(e) =>
                            handleChange(
                              e.target.value,
                              experienceItem.id,
                              e.target.id
                            )
                          }
                          defaultValue={experienceItem.endDate}
                          id="endDate"
                          type="text"
                          placeholder="Enter your end date"
                        ></input>
                      </div>
                    </div>
                    <label htmlFor="location">Location</label>
                    <input
                      onChange={(e) =>
                        handleChange(
                          e.target.value,
                          experienceItem.id,
                          e.target.id
                        )
                      }
                      defaultValue={experienceItem.location}
                      id="location"
                      type="text"
                      placeholder="Enter the school location"
                    ></input>
                    <label htmlFor="description">Description</label>
                    <textarea
                      onChange={(e) =>
                        handleChange(
                          e.target.value,
                          experienceItem.id,
                          e.target.id
                        )
                      }
                      defaultValue={experienceItem.description}
                      id="description"
                      rows="4"
                      cols="50"
                      placeholder="Enter the school location"
                    ></textarea>
                  </form>
                </div>
              </li>
            );
          })}

          <hr className="Seperator"></hr>

          <button className="addExperience">
            <img src="src/assets/plus-img.png"></img>
            <p>Experience</p>
          </button>
        </ul>
      </div>
    </>
  );
}

export default ExperienceSection;
