import "./App.css";
import CustomButtons from "./components/CustomButtons";
import RenderSaveLoadClearButtons from "./components/SaveLoadClearButtons.jsx";
import ContentSection from "./components/ContentSection";
import EducationSection from "./components/EducationSection";
import ExperienceSection from "./components/ExperienceSection";
import SkillsSection from "./components/SkillsSection";
import CustomizeLayout from "./components/CustomiseLayout";
import CustomizeColors from "./components/CustomiseColors";
import CustomiseFont from "./components/CustomiseFont";

function App() {
  return (
    <div className="mainDiv">
      <CustomButtons></CustomButtons>
      <div className="content">
        <RenderSaveLoadClearButtons></RenderSaveLoadClearButtons>
        <ContentSection></ContentSection>
        <SkillsSection></SkillsSection>
        <EducationSection></EducationSection>
        <ExperienceSection></ExperienceSection>
      </div>
      <div className="customization">
        <RenderSaveLoadClearButtons></RenderSaveLoadClearButtons>
        <CustomizeLayout></CustomizeLayout>
        <CustomizeColors></CustomizeColors>
        <CustomiseFont></CustomiseFont>
      </div>
    </div>
  );
}

export default App;
