import styles from "../styles/CustomiseFont..css";
import { useState } from "react";

function CustomiseFont({
  handleClickSerif,
  handleClickSans,
  handleClickMono,
  sansActive,
  monoActive,
  serifActive,
}) {
  const whiteColor = "white";
  const blackColor = "black";
  const blueColor = "#0E374E";

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
