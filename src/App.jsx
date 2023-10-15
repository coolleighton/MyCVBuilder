import "./App.css";
import { useState } from "react";
import RenderSaveLoadClearButtons from "./components/SaveLoadClearButtons.jsx";
import ContentSection from "./components/ContentSection";
import EducationSection from "./components/EducationSection";
import ExperienceSection from "./components/ExperienceSection";
import SkillsSection from "./components/SkillsSection";
import CustomizeLayout from "./components/CustomiseLayout";
import CustomizeColors from "./components/CustomiseColors";
import CustomiseFont from "./components/CustomiseFont";
import CVPreview from "./components/CVPreview";
import CVdata from "./Data/CVdata";

function App() {
  // handles the content/customisation button click //

  const activeColor = "#F5F5F5";
  const inactiveColor = "white";

  const [contentActive, setContentActive] = useState(true);
  const [customiseActive, setCustomiseActive] = useState(false);

  const handleContentClick = () => {
    if (!contentActive) {
      setContentActive(true);
      setCustomiseActive(false);
    }
  };

  const handleCustomiseClick = () => {
    if (!customiseActive) {
      setContentActive(false);
      setCustomiseActive(true);
    }
  };

  // handles user information change //

  const [personalInfo, setPersonalInfo] = useState(CVdata.personalInfo);

  const handlePersonalChange = (value, field) => {
    const fieldName = field;
    const newCVdata = {
      ...personalInfo,
      [fieldName]: (personalInfo[fieldName] = value),
    };
    setPersonalInfo(newCVdata);
  };

  // handle skills information change //

  const [skills, setSkills] = useState(CVdata.skills);

  const handleSkillsChange = (value, index) => {
    const newCVdata = skills.map((skillItem) => {
      if (skillItem.id === index) {
        return {
          ...skillItem,
          skill: (skillItem.skill = value),
        };
      } else {
        return skillItem;
      }
    });

    console.log(newCVdata);
    setSkills(newCVdata);
  };

  // handle education information change //

  const [educationInfo, setEducationInfo] = useState(CVdata.education);

  const handleEducationChange = (value, index, field) => {
    const fieldName = field;
    const newCVdata = educationInfo.map((educationItem) => {
      if (educationItem.id === index) {
        return {
          ...educationItem,
          [fieldName]: (educationItem[fieldName] = value),
        };
      } else {
        return educationItem;
      }
    });

    console.log(newCVdata);
    setEducationInfo(newCVdata);
  };

  // handle experience information change //

  const [experienceInfo, setExperienceInfo] = useState(CVdata.experience);

  const handleExperienceChange = (value, index, field) => {
    const fieldName = field;
    const newCVdata = experienceInfo.map((experienceItem) => {
      if (experienceItem.id === index) {
        return {
          ...experienceItem,
          [fieldName]: (experienceItem[fieldName] = value),
        };
      } else {
        return experienceItem;
      }
    });

    console.log(newCVdata);
    setExperienceInfo(newCVdata);
  };

  // UI //

  return (
    <div className="mainDiv">
      <div className="CustomButtons">
        <button
          style={{
            backgroundColor: contentActive ? activeColor : inactiveColor,
          }}
          onClick={handleContentClick}
        >
          <img src="./src/assets/content-img.png"></img>
          <p>Content</p>
        </button>
        <button
          style={{
            backgroundColor: customiseActive ? activeColor : inactiveColor,
          }}
          onClick={handleCustomiseClick}
        >
          <img src="./src/assets/customise-img.png"></img>
          <p>Customize</p>
        </button>
      </div>
      <div
        style={{ display: contentActive ? "block" : "none" }}
        className="content"
      >
        <RenderSaveLoadClearButtons></RenderSaveLoadClearButtons>
        <ContentSection handleChange={handlePersonalChange}></ContentSection>
        <SkillsSection handleChange={handleSkillsChange}></SkillsSection>
        <EducationSection
          handleChange={handleEducationChange}
        ></EducationSection>
        <ExperienceSection></ExperienceSection>
      </div>
      <div
        style={{ display: customiseActive ? "block" : "none" }}
        className="customization"
      >
        <RenderSaveLoadClearButtons></RenderSaveLoadClearButtons>
        <CustomizeLayout></CustomizeLayout>
        <CustomizeColors></CustomizeColors>
        <CustomiseFont></CustomiseFont>
      </div>
      <div>
        <CVPreview
          skills={skills}
          personalInfo={personalInfo}
          education={educationInfo}
          experience={experienceInfo}
        ></CVPreview>
      </div>
    </div>
  );
}

export default App;

// "<SkillsSection handleChange={handleSkillsChange}></SkillsSection>"
