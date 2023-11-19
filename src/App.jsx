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
import { jsPDF } from "jspdf";
import { v4 as uuidv4 } from "uuid";
import html2canvas from "html2canvas";

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
    console.log(CVdata);
    setPersonalInfo(CVdata.personalInfo);
    setSkills(CVdata.skills);
    setEducationInfo(CVdata.education);
    setExperienceInfo(CVdata.experience);
  };

  // handle save as PDF //

  const handleSave = () => {
    const CV = document.querySelector("#CVPreview");
    alert("In order for your CV/Resume to save correctly, follow these steps: On the next page click 'More Settings', uncheck 'Headers and Footers,' and make sure 'Background Graphics' is checked.")
    print(CV)

  };

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

  // handle layout click //

  const [CVlayout, setCVLayout] = useState("top");

  const handleLayoutClick = (type) => {
    setCVLayout(type);
  };

  // handle font clicks //

  const [serifActive, setSerifActive] = useState(false);
  const [sansActive, setSansActive] = useState(true);
  const [monoActive, setMonoActive] = useState(false);
  const [FontFamily, setFontFamily] = useState("'Open Sans', sans-serif");

  const handleClickSerif = () => {
    if (!serifActive) {
      setSerifActive(true);
      setSansActive(false);
      setMonoActive(false);
      setFontFamily("'IBM Plex Serif', serif");
    }
  };

  const handleClickSans = () => {
    if (!sansActive) {
      setSerifActive(false);
      setSansActive(true);
      setMonoActive(false);
      setFontFamily("'Open Sans', sans-serif");
    }
  };

  const handleClickMono = () => {
    if (!monoActive) {
      setSerifActive(false);
      setSansActive(false);
      setMonoActive(true);
      setFontFamily("'Roboto Mono', monospace");
    }
  };

  // handle colour change //
  // converts hex to hsl code //
  function hexToHsl(hex) {
    hex = hex.replace(/^#/, "");

    let bigint = parseInt(hex, 16);
    let r = (bigint >> 16) & 255;
    let g = (bigint >> 8) & 255;
    let b = bigint & 255;

    r /= 255;
    g /= 255;
    b /= 255;

    let max = Math.max(r, g, b);
    let min = Math.min(r, g, b);

    let lightness = (max + min) / 2;

    let saturation = 0;
    if (max !== min) {
      saturation =
        lightness <= 0.5
          ? (max - min) / (max + min)
          : (max - min) / (2.0 - max - min);
    }

    let hue = 0;
    if (max !== min) {
      if (max === r) {
        hue = (g - b) / (max - min);
      } else if (max === g) {
        hue = 2.0 + (b - r) / (max - min);
      } else {
        hue = 4.0 + (r - g) / (max - min);
      }
    }

    hue *= 60;
    if (hue < 0) {
      hue += 360;
    }

    hue = Math.round(hue * 100) / 100;
    saturation = Math.round(saturation * 100) / 100;
    lightness = Math.round(lightness * 100) / 100;

    return [hue, saturation * 100, lightness * 100];
  }

  // check colours if light of hsl is above 50% //

  const [colourMode, setColourMode] = useState([
    "white",
    "#EEF1F2",
    "src/assets/email-white-img.png",
    "src/assets/location-white-img.png",
    "src/assets/phone-white-img.png",
  ]);

  function isColorBelow50PercentLight(hslColor) {
    const lightness = hslColor[2];

    if (lightness < 50) {
      setColourMode([
        "white",
        "#EEF1F2",
        "src/assets/email-white-img.png",
        "src/assets/location-white-img.png",
        "src/assets/phone-white-img.png",
      ]);
    } else if (lightness > 49) {
      setColourMode([
        "#000000",
        "#000000",
        "src/assets/email-black-img.png",
        "src/assets/location-black-img.png",
        "src/assets/phone-black-img.png",
      ]);
    }
  }

  // set CV colours //

  const [colour, setColour] = useState("#0E374E");

  const handleColourChange = (value) => {
    const hslValue = hexToHsl(value);
    isColorBelow50PercentLight(hslValue);
    setColour(value);
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
          handleSave={handleSave}
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
          handleLoad={handleLoad}
          handleSave={handleSave}
        ></RenderSaveLoadClearButtons>
        <CustomizeLayout
          colour={colour}
          handleLayoutClick={handleLayoutClick}
        ></CustomizeLayout>
        <CustomiseFont
          serifActive={serifActive}
          sansActive={sansActive}
          monoActive={monoActive}
          handleClickMono={handleClickMono}
          handleClickSans={handleClickSans}
          handleClickSerif={handleClickSerif}
          colour={colour}
          colourMode={colourMode}
        ></CustomiseFont>
        <CustomizeColors
          handleColourChange={handleColourChange}
        ></CustomizeColors>
      </div>
      <div>
        <CVPreview
          skills={skills}
          personalInfo={personalInfo}
          education={educationInfo}
          experience={experienceInfo}
          layout={CVlayout}
          font={FontFamily}
          colour={colour}
          colourMode={colourMode}
        ></CVPreview>
      </div>
    </div>
  );
}

export default App;
