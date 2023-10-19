import styles from "../styles/SkillsSection.css";
import { v4 as uuidv4 } from "uuid";
import { useState } from "react";
import CVdata from "../Data/CVdata";

function SkillsSection({ skills, handleChange, handleActive }) {
  const activeDisplay = "block";
  const inActiveDisplay = "none";
  const activeRotation = "rotate(180deg)";
  const inActiveRotation = "rotate(0deg)";

  const [SkillsActive, setSkillsActive] = useState(false);

  const handleHeaderClick = () => {
    if (SkillsActive) {
      setSkillsActive(false);
    } else {
      setSkillsActive(true);
    }
  };

  const active = "block";
  const inActive = "none";

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
            return (
              <li key={skillItem.id}>
                <hr className="Seperator"></hr>

                <div
                  className="skillListItem"
                  onClick={handleActive(skillItem.id)}
                >
                  <h2 className="skillListItemName">{skillItem.skill}</h2>
                  <img
                    className="skillListItemImg"
                    src="src/assets/down-img.png"
                    style={
                      {
                        /*transform: formActive ? activeRotation : inActiveRotation,
                         */
                      }
                    }
                  ></img>
                </div>

                <div
                  style={
                    {
                      /*display: formActive ? active : inActive*/
                    }
                  }
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
                      value={skillItem.skill}
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
