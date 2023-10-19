import styles from "../styles/SaveLoadClearButtons.css";

function RenderSaveLoadClearButtons({ handleClear, handleLoad }) {
  return (
    <div className="SaveLoadClearButtons">
      <button onClick={handleClear} className="clear">
        <img src="./src/assets/clear-img.png"></img>
        <p>Clear CV</p>
      </button>
      <button onClick={handleLoad} className="load">
        <p>Load Example</p>
      </button>
      <button className="download">
        <img src="./src/assets/download-img.png"></img>
        <p>Download CV</p>
      </button>
    </div>
  );
}

export default RenderSaveLoadClearButtons;
