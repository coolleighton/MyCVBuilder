import styles from "../styles/CustomiseColors.css";

function CustomizeColors({ handleColourChange }) {
  return (
    <>
      <div className="customizeColors">
        <h1>Color</h1>
        <div>
          <p>Accent color</p>
          <input
            onChange={(e) => handleColourChange(e.target.value)}
            defaultValue="#0E374E"
            className="colorPicker"
            type="color"
          ></input>
        </div>
      </div>
    </>
  );
}

export default CustomizeColors;
