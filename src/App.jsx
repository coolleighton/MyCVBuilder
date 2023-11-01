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

  // handles profile information change //

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
    setSkills(newCVdata);
  };

  // Handle skills active click //

  const handleSkillsColapseForm = (e) => {
    
    if (skills[e.target.id].isActivee) {
      skills[e.target.id].isActivee = false;
    } else {
      skills[e.target.id].isActivee = true;
    }

    const newCVdata = skills.map((skillItem) => {
      if (skillItem.id === e) {
        return {
          ...skillItem,
          skill: (skillItem.isActivee = !skillItem.isActivee),
        };
      } else {
        return skillItem;
      }
    });
    setSkills(newCVdata)

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
    setExperienceInfo(newCVdata);
  };

  // handle clear button click //

  const handleClear = () => {
    const newPersonalCVdata = {
      fullName: "",
      email: "",
      phoneNumber: "",
      homeAddress: "",
      personalDescription: "",
    };
    const newSkillsCVdata = [];
    const newEducationCVdata = [];
    const newExperienceCVdata = [];

    setPersonalInfo(newPersonalCVdata);
    setSkills(newSkillsCVdata);
    setEducationInfo(newEducationCVdata)
    setExperienceInfo(newExperienceCVdata);
  };

  // handle load example button click //

  const handleLoad = () => {
    console.log(CVdata);
    const newPersonalCVdata = {
      ...personalInfo,
      fullName: (personalInfo.fullName = CVdata.personalInfo.fullName),
      email: (personalInfo.email = CVdata.personalInfo.email),
      phoneNumber: (personalInfo.phoneNumber = CVdata.personalInfo.phoneNumber),
      homeAddress: (personalInfo.homeAddress = CVdata.personalInfo.homeAddress),
      personalDescription: (personalInfo.personalDescription =
        CVdata.personalInfo.personalDescription),
    };

    setPersonalInfo(newPersonalCVdata);
    setSkills(CVdata.skills);
    setEducationInfo(CVdata.education);
    setExperienceInfo(CVdata.experience);
  };

  // handle font clicks //

  const [serifActive, setSerifActive] = useState(true);
  const [sansActive, setSansActive] = useState(false);
  const [monoActive, setMonoActive] = useState(false);
  const [fontFamily, setFontFamily] = useState("'IBM Plex Serif', serif")

  const handleClickSerif = () => {
    if (!serifActive) {
      setSerifActive(true);
      setSansActive(false);
      setMonoActive(false);
      setFontFamily("fontFamily: 'IBM Plex Serif', serif;")
      console.log("fontFamily: 'IBM Plex Serif', serif;")
    }
  };

  const handleClickSans = () => {
    if (!sansActive) {
      setSerifActive(false);
      setSansActive(true);
      setMonoActive(false);
      setFontFamily("fontFamily: 'Open Sans', sans-serif;")
      console.log("fontFamily: 'Open Sans', sans-serif;")
    }
  };

  const handleClickMono = () => {
    if (!monoActive) {
      setSerifActive(false);
      setSansActive(false);
      setMonoActive(true);
      setFontFamily("fontFamily: 'Roboto Mono', monospace;")
      console.log("fontFamily: 'Roboto Mono', monospace;")
    }
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
        <RenderSaveLoadClearButtons
          handleClear={handleClear}
          handleLoad={handleLoad}
        ></RenderSaveLoadClearButtons>
        <ContentSection
          personalInfo={personalInfo}
          handleChange={handlePersonalChange}
        ></ContentSection>
        <SkillsSection
          skills={skills}
          handleColapseForm={handleSkillsColapseForm}
          handleChange={handleSkillsChange}
        ></SkillsSection>
        <EducationSection
          education={educationInfo}
          handleChange={handleEducationChange}
        ></EducationSection>
        <ExperienceSection
          handleChange={handleExperienceChange}
        ></ExperienceSection>
      </div>
      <div
        style={{ display: customiseActive ? "block" : "none" }}
        className="customization"
      >
        <RenderSaveLoadClearButtons
          handleClear={handleClear}
        ></RenderSaveLoadClearButtons>
        <CustomizeLayout></CustomizeLayout>
        <CustomizeColors></CustomizeColors>
        <CustomiseFont
          serifActive={serifActive}
          sansActive={sansActive}
          monoActive={monoActive}
          handleClickMono={handleClickMono}
          handleClickSans={handleClickSans}
          handleClickSerif={handleClickSerif}
        ></CustomiseFont>
      </div>
      <div>
        <CVPreview
          skills={skills}
          personalInfo={personalInfo}
          education={educationInfo}
          experience={experienceInfo}
          font={fontFamily}
        ></CVPreview>
      </div>
    </div>
  );
}

export default App;

// "<SkillsSection handleChange={handleSkillsChange}></SkillsSection>"
