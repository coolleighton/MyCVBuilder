import styles from "../styles/CustomiseFont..css";
import { useState } from "react";

function CustomiseFont() {
  const whiteColor = "white";
  const blackColor = "black";
  const blueColor = "#0E374E";

  const [serifActive, setSerifActive] = useState(true);
  const [sansActive, setSansActive] = useState(false);
  const [monoActive, setMonoActive] = useState(false);

  const handleClickSerif = () => {
    if (!serifActive) {
      setSerifActive(true);
      setSansActive(false);
      setMonoActive(false);
    }
  };

  const handleClickSans = () => {
    if (!sansActive) {
      setSerifActive(false);
      setSansActive(true);
      setMonoActive(false);
    }
  };

  const handleClickMono = () => {
    if (!monoActive) {
      setSerifActive(false);
      setSansActive(false);
      setMonoActive(true);
    }
  };

  return (
    <>
      <div className="CustomiseFonts">
        <h1>Fonts</h1>
        <div className="fontsDiv">
          <div
            style={{ backgroundColor: serifActive ? blueColor : whiteColor }}
            onClick={handleClickSerif}
            className="serif"
          >
            <h1 style={{ color: serifActive ? whiteColor : blackColor }}>Aa</h1>
            <p style={{ color: serifActive ? whiteColor : blackColor }}>
              serif
            </p>
          </div>
          <div
            style={{ backgroundColor: sansActive ? blueColor : whiteColor }}
            onClick={handleClickSans}
            className="sans"
          >
            <h1 style={{ color: sansActive ? whiteColor : blackColor }}>Aa</h1>
            <p style={{ color: sansActive ? whiteColor : blackColor }}>sans</p>
          </div>
          <div
            style={{ backgroundColor: monoActive ? blueColor : whiteColor }}
            onClick={handleClickMono}
            className="mono"
          >
            <h1 style={{ color: monoActive ? whiteColor : blackColor }}>Aa</h1>
            <p style={{ color: monoActive ? whiteColor : blackColor }}>mono</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default CustomiseFont;
