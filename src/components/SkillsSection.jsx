import styles from "../styles/SkillsSection.css";
import { v4 as uuidv4 } from "uuid";
import { useState } from "react";
import CVdata from "../Data/CVdata";

function SkillsSection({ handleChange }) {
  const activeDisplay = "block";
  const inActiveDisplay = "none";
  const activeRotation = "rotate(180deg)";
  const inActiveRotation = "rotate(0deg)";

  const [SkillsActive, setSkillsActive] = useState(true);

  const handleHeaderClick = () => {
    if (SkillsActive) {
      setSkillsActive(false);
    } else {
      setSkillsActive(true);
    }
  };

  return (
    <>
      <div className="SkillsSection">
        <div onClick={handleHeaderClick} className="SkillsHeader">
          <div className="HeaderTitle">
            <img src="./src/assets/skills-img.png"></img>
            <h1>Skills</h1>
          </div>
          <img
            style={{
              transform: SkillsActive ? activeRotation : inActiveRotation,
            }}
            className="DropDownImg"
            src="./src/assets/down-img.png"
          ></img>
        </div>

        <ul
          style={{
            display: SkillsActive ? activeDisplay : inActiveDisplay,
          }}
          className="skillList"
        >
          {CVdata.skills.map((skillItem) => {
            const active = "block";
            const inActive = "none";

            const [formActive, setFormActive] = useState(false);

            const handleItemClick = () => {
              if (formActive) {
                setFormActive(false);
              } else {
                setFormActive(true);
              }
            };

            return (
              <li key={skillItem.skill}>
                <hr className="Seperator"></hr>

                <div className="skillListItem" onClick={handleItemClick}>
                  <h2 className="skillListItemName">{skillItem.skill}</h2>
                  <img
                    className="skillListItemImg"
                    src="src/assets/down-img.png"
                    style={{
                      transform: formActive ? activeRotation : inActiveRotation,
                    }}
                  ></img>
                </div>

                <div
                  style={{ display: formActive ? active : inActive }}
                  className="SkillsForm"
                >
                  <form>
                    <label htmlFor="Skill">Skill Name</label>
                    <input
                      onChange={(e) =>
                        handleChange(e.target.value, skillItem.id)
                      }
                      id={skillItem.skill}
                      type="text"
                      placeholder="Enter your skill name"
                      defaultValue={skillItem.skill}
                    ></input>
                  </form>
                </div>
              </li>
            );
          })}

          <hr className="Seperator"></hr>

          <button className="addSkills">
            <img src="src/assets/plus-img.png"></img>
            <p>Skills</p>
          </button>
        </ul>
      </div>
    </>
  );
}

export default SkillsSection;
