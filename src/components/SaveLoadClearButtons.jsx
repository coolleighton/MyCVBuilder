import styles from "../styles/SaveLoadClearButtons.css";
import CVdata from "../Data/CVdata";

function RenderSaveLoadClearButtons({ handleClear, handleLoad, handleSave }) {
  return (
    <div className="SaveLoadClearButtons">
      <button onClick={handleClear} className="clear">
        <img src="./src/assets/clear-img.png"></img>
        <p>Clear CV</p>
      </button>
      <button onClick={handleLoad} className="load">
        <p>Load Example</p>
      </button>
      <button onClick={handleSave} className="download">
        <img src="./src/assets/download-img.png"></img>
        <p>Download CV</p>
      </button>
    </div>
  );
}

export default RenderSaveLoadClearButtons;
