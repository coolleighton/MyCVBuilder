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

function App() {
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
        <ContentSection></ContentSection>
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
    </div>
  );
}

export default App;
