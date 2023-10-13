import styles from "../styles/SkillsSection.css";
import { v4 as uuidv4 } from "uuid";
import { useState } from "react";

let SkillsArray = [
  {
    skill: "Python",
    key: uuidv4(),
  },
  {
    skill: "HTML",
    key: uuidv4(),
  },
  {
    skill: "CSS",
    key: uuidv4(),
  },
  {
    skill: "Javascript",
    key: uuidv4(),
  },
  {
    skill: "React",
    key: uuidv4(),
  },
];

function SkillsSection() {
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
          {SkillsArray.map((SkillsItem) => {
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
              <li key={SkillsItem.key}>
                <hr className="Seperator"></hr>

                <div className="skillListItem" onClick={handleItemClick}>
                  <h2 className="skillListItemName">{SkillsItem.skill}</h2>
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
                      onChange={console.log("inputChanged")}
                      value={SkillsItem.Skill}
                      id="Skill"
                      type="text"
                      placeholder="Enter your skill name"
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
