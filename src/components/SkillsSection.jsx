import styles from "../styles/SkillsSection.css";
import { v4 as uuidv4 } from "uuid";
import { useState } from "react";
import CVdata from "../Data/CVdata";
import DeleteBtn from "./deleteBtn";

function SkillsSection({
  skills,
  handleChange,
  handleColapseForm,
  handleDelete,
  handleAdd,
}) {
  const activeRotation = "rotate(180deg)";
  const inActiveRotation = "rotate(0deg)";
  const activeDisplay = "block";
  const inActiveDisplay = "none";

  const [SkillsActive, setSkillsActive] = useState(false);

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
          {skills.map((skillItem) => {
            const buttonDisplay = () => {
              if (skillItem.isActivee) {
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
              if (skillItem.isActivee) {
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
              <li key={skillItem.id}>
                <hr className="Seperator"></hr>

                <div
                  className="skillListItem"
                  onClick={(e) => handleColapseForm(e)}
                  id={skillItem.id}
                >
                  <h2 id={skillItem.id} className="skillListItemName">
                    {skillItem.skill}
                  </h2>
                  <img
                    id={skillItem.id}
                    className="skillListItemImg"
                    src="src/assets/down-img.png"
                    style={buttonRotation()}
                  ></img>
                </div>

                <div style={buttonDisplay()} className="SkillsForm">
                  <form>
                    <label htmlFor="Skill">Skill Name</label>
                    <input
                      onChange={(e) =>
                        handleChange(e.target.value, skillItem.id)
                      }
                      id={skillItem.skill}
                      type="text"
                      placeholder="Enter your skill name"
                      value={skillItem.skill}
                    ></input>
                  </form>
                  <DeleteBtn
                    section={skills}
                    handleDelete={handleDelete}
                    index={skillItem.id}
                  ></DeleteBtn>
                </div>
              </li>
            );
          })}

          <hr className="Seperator"></hr>

          <button onClick={(e) => handleAdd(skills)} className="addSkills">
            <img src="src/assets/plus-img.png"></img>
            <p>Skills</p>
          </button>
        </ul>
      </div>
    </>
  );
}

export default SkillsSection;
