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
  const activeColor = "#F5F5F5";
  const inactiveColor = "white";

  const [contentActive, setContentActive] = useState(true);
  const [customiseActive, setCustomiseActive] = useState(false);

  const [personalInfo, setPersonalInfo] = useState(CVdata);

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

  const handleChange = (value, field) => {
    const fieldName = field;
    const newCVdata = {
      ...personalInfo,
      [fieldName]: (personalInfo[fieldName] = value),
    };
    setPersonalInfo(newCVdata);
  };

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
        <ContentSection handleChange={handleChange}></ContentSection>
        <SkillsSection></SkillsSection>
        <EducationSection></EducationSection>
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
        <CVPreview personalInfo={personalInfo}></CVPreview>
      </div>
    </div>
  );
}

export default App;
