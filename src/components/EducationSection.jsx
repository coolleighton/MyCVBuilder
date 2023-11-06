import styles from "../styles/EducationSection.css";
import DeleteBtn from "./deleteBtn";
import { v4 as uuidv4 } from "uuid";
import { useState } from "react";
import CVdata from "../Data/CVdata";

function EducationSection({ education, handleChange, handleColapseForm, handleDelete }) {
  const activeDisplay = "block";
  const inActiveDisplay = "none";
  const activeRotation = "rotate(180deg)";
  const inActiveRotation = "rotate(0deg)";

  const [EducationActive, setEducationActive] = useState(false);

  const handleHeaderClick = () => {
    if (EducationActive) {
      setEducationActive(false);
    } else {
      setEducationActive(true);
    }
  };

  return (
    <>
      <div className="EducationSection">
        <div onClick={handleHeaderClick} className="EducationHeader">
          <div className="HeaderTitle">
            <img src="./src/assets/education-img.png"></img>
            <h1>Education</h1>
          </div>
          <img
            style={{
              transform: EducationActive ? activeRotation : inActiveRotation,
            }}
            className="DropDownImg"
            src="./src/assets/down-img.png"
          ></img>
        </div>

        <ul
          style={{ display: EducationActive ? activeDisplay : inActiveDisplay }}
          className="UniversityList"
        >
          {education.map((educationItem) => {

            
            const buttonDisplay = () => {
              if (educationItem.isActivee) {
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
              if (education.isActivee) {
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
              <li key={educationItem.id}>
                <hr className="Seperator"></hr>

                <div
                  id={educationItem.id}
                  className="UniversityListItem"
                  onClick={handleColapseForm}
                >
                  <h2 id={educationItem.id} className="UniversityListItemName">
                    {educationItem.school}
                  </h2>
                  <img
                    id={educationItem.id}
                    className="UniversityListItemImg"
                    src="src/assets/down-img.png"
                    style={
                      buttonRotation()
                    }
                  ></img>
                </div>

                <div style={ buttonDisplay() } className="EducationForm">
                  <form>
                    <label htmlFor="school">School</label>
                    <input
                      onChange={(e) =>
                        handleChange(
                          e.target.value,
                          educationItem.id,
                          e.target.id
                        )
                      }
                      defaultValue={educationItem.school}
                      id="school"
                      type="text"
                      placeholder="Enter your school / university"
                    ></input>
                    <label htmlFor="degree">Degree</label>
                    <input
                      onChange={(e) =>
                        handleChange(
                          e.target.value,
                          educationItem.id,
                          e.target.id
                        )
                      }
                      defaultValue={educationItem.degree}
                      id="degree"
                      type="text"
                      placeholder="Enter your degree"
                    ></input>
                    <div className="educationDates">
                      <div className="startDateDiv">
                        <label htmlFor="startDate">Start date</label>
                        <input
                          onChange={(e) =>
                            handleChange(
                              e.target.value,
                              educationItem.id,
                              e.target.id
                            )
                          }
                          defaultValue={educationItem.startDate}
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
                              educationItem.id,
                              e.target.id
                            )
                          }
                          defaultValue={educationItem.endDate}
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
                          educationItem.id,
                          e.target.id
                        )
                      }
                      defaultValue={educationItem.location}
                      id="location"
                      type="text"
                      placeholder="Enter the school location"
                    ></input>
                  </form>
                  <DeleteBtn section={education} handleDelete={handleDelete}  index={educationItem.id}></DeleteBtn>
                </div>
              </li>
            );
          })}

          <hr className="Seperator"></hr>

          <button className="addEducation">
            <img src="src/assets/plus-img.png"></img>
            <p>Education</p>
          </button>
        </ul>
      </div>
    </>
  );
}

export default EducationSection;
