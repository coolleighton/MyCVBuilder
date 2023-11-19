import styles from "../styles/SaveLoadClearButtons.css";
import CVdata from "../Data/CVdata";
import clearImg from "../assets/clear-img.png";
import downloadImg from "../assets/download-img.png";

function RenderSaveLoadClearButtons({ handleClear, handleLoad, handleSave }) {
  return (
    <div className="SaveLoadClearButtons">
      <button onClick={handleLoad} className="load">
        <p>Load Example</p>
      </button>
      <button onClick={handleSave} className="download">
        <img src={downloadImg}></img>
        <p>Download CV</p>
      </button>
      <button onClick={handleClear} className="clear">
        <img src={clearImg}></img>
        <p>Clear CV</p>
      </button>
    </div>
  );
}

export default RenderSaveLoadClearButtons;
