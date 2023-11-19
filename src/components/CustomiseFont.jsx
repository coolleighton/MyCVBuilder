import styles from "../styles/CustomiseFont..css";
import { useState } from "react";

function CustomiseFont({
  handleClickSerif,
  handleClickSans,
  handleClickMono,
  sansActive,
  monoActive,
  serifActive,
  colour,
  colourMode,
}) {
  const fontColour = colourMode[0];
  const whiteColor = "white";
  const blackColor = "black";
  const blueColor = colour;

  return (
    <>
      <div className="CustomiseFonts">
        <h1>Fonts</h1>
        <div className="fontsDiv">
          <div
            style={{ backgroundColor: sansActive ? blueColor : whiteColor }}
            onClick={handleClickSans}
            className="sans"
          >
            <h1 style={{ color: sansActive ? fontColour : blackColor }}>Aa</h1>
            <p style={{ color: sansActive ? fontColour : blackColor }}>sans</p>
          </div>
          <div
            style={{ backgroundColor: serifActive ? blueColor : whiteColor }}
            onClick={handleClickSerif}
            className="serif"
          >
            <h1 style={{ color: serifActive ? fontColour : blackColor }}>Aa</h1>
            <p style={{ color: serifActive ? fontColour : blackColor }}>
              serif
            </p>
          </div>
          <div
            style={{ backgroundColor: monoActive ? blueColor : whiteColor }}
            onClick={handleClickMono}
            className="mono"
          >
            <h1 style={{ color: monoActive ? fontColour : blackColor }}>Aa</h1>
            <p style={{ color: monoActive ? fontColour : blackColor }}>mono</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default CustomiseFont;
