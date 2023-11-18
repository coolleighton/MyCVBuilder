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
import { v4 as uuidv4 } from "uuid";

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

  //

  // handles profile information change //

  const [personalInfo, setPersonalInfo] = useState(CVdata.personalInfo);

  const handlePersonalChange = (value, field) => {
    setPersonalInfo({
      ...personalInfo,
      [field]: value,
    });
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
    let index = skills.findIndex((x) => x.id === +e.target.id);

    if (skills[index].isActivee) {
      skills[index].isActivee = false;
    } else {
      skills[index].isActivee = true;
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
    setEducationInfo(newCVdata);
  };

  // handle education active click //

  const handleEducationColapseForm = (e) => {
    let index = educationInfo.findIndex((x) => x.id === +e.target.id);

    if (educationInfo[index].isActivee) {
      educationInfo[index].isActivee = false;
    } else {
      educationInfo[index].isActivee = true;
    }

    const newCVdata = educationInfo.map((educationItem) => {
      if (educationItem.id === e) {
        return {
          ...educationItem,
          isActivee: (educationItem.isActivee = !educationItem.isActivee),
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

  // handle education active click //

  const handleExperienceColapseForm = (e) => {
    let index = experienceInfo.findIndex((x) => x.id === +e.target.id);

    if (experienceInfo[index].isActivee) {
      experienceInfo[index].isActivee = false;
    } else {
      experienceInfo[index].isActivee = true;
    }

    const newCVdata = experienceInfo.map((experienceItem) => {
      if (experienceInfo.id === e) {
        return {
          ...experienceItem,
          isActivee: (experienceItem.isActivee = !experienceItem.isActivee),
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
    setEducationInfo(newEducationCVdata);
    setExperienceInfo(newExperienceCVdata);
  };

  // handle load example button click //

  const handleLoad = () => {
    setPersonalInfo(CVdata.personalInfo);
    setSkills(CVdata.skills);
    setEducationInfo(CVdata.education);
    setExperienceInfo(CVdata.experience);
  };

  // handle delete click //

  const handleDeleteClick = (index, section) => {
    const newCVdata = section.filter((Item) => Item.id !== index);
    if (section === skills) {
      setSkills(newCVdata);
    } else if (section === educationInfo) {
      setEducationInfo(newCVdata);
    } else if (section === experienceInfo) {
      setExperienceInfo(newCVdata);
    }
  };

  // handle add click //

  const handleAddClick = (section) => {
    const id = section.length;
    if (section === skills) {
      const newCVdata = [
        ...section,
        {
          isActivee: true,
          id: id,
          skill: "Example Skill",
        },
      ];
      setSkills(newCVdata);
    } else if (section === educationInfo) {
      const newCVdata = [
        ...section,
        {
          school: "Example Name",
          degree: "Example Degree",
          startDate: "01/2023",
          endDate: "01/2023",
          location: "Example Location",
          id: id,
          isActivee: true,
        },
      ];
      setEducationInfo(newCVdata);
    } else if (section === experienceInfo) {
      const newCVdata = [
        ...section,
        {
          company: "Example Company",
          position: "Example Position",
          startDate: "2023",
          endDate: "2023",
          location: "Example Location",
          description: "Example Description",
          id: id,
          isActivee: true,
        },
      ];
      setExperienceInfo(newCVdata);
    }
  };

  // handle layout click // 

  const [CVlayout, setCVLayout] = useState("top");

  const handleLayoutClick = (type) => {
    setCVLayout(type)
    
  }

  // handle font clicks //

  const [serifActive, setSerifActive] = useState(true);
  const [sansActive, setSansActive] = useState(false);
  const [monoActive, setMonoActive] = useState(false);
  const [fontFamily, setFontFamily] = useState({fontFamily: "'Open Sans', sans-serif"});

  const handleClickSerif = () => {
    if (!serifActive) {
      setSerifActive(true);
      setSansActive(false);
      setMonoActive(false);
      setFontFamily(`{fontFamily: 'IBM Plex Serif', serif}`);
      console.log(fontFamily);
    }
  };

  const handleClickSans = () => {
    if (!sansActive) {
      setSerifActive(false);
      setSansActive(true);
      setMonoActive(false);
      setFontFamily({fontFamily: "'Open Sans', sans-serif"});
      console.log(fontFamily);
    }
  };

  const handleClickMono = () => {
    if (!monoActive) {
      setSerifActive(false);
      setSansActive(false);
      setMonoActive(true);
      setFontFamily({fontFamily: "'Roboto Mono', monospace"});
      console.log(fontFamily);
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
          handleDelete={handleDeleteClick}
          handleAdd={handleAddClick}
        ></SkillsSection>
        <EducationSection
          education={educationInfo}
          handleColapseForm={handleEducationColapseForm}
          handleChange={handleEducationChange}
          handleDelete={handleDeleteClick}
          handleAdd={handleAddClick}
        ></EducationSection>
        <ExperienceSection
          experience={experienceInfo}
          handleColapseForm={handleExperienceColapseForm}
          handleChange={handleExperienceChange}
          handleDelete={handleDeleteClick}
          handleAdd={handleAddClick}
        ></ExperienceSection>
      </div>
      <div
        style={{ display: customiseActive ? "block" : "none" }}
        className="customization"
      >
        <RenderSaveLoadClearButtons
          handleClear={handleClear}
        ></RenderSaveLoadClearButtons>
        <CustomizeLayout
          handleLayoutClick={handleLayoutClick} 
        ></CustomizeLayout>
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
          layout={CVlayout}
          font={fontFamily}
        ></CVPreview>
      </div>
    </div>
  );
}

export default App;

// "<SkillsSection handleChange={handleSkillsChange}></SkillsSection>"
