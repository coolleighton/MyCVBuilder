import styles from "../styles/CustomizeLayout.css";

function CustomizeLayout({ handleLayoutClick, colour }) {
  const Colours = () => {
    let colours = {
      backgroundColor: colour,
    };
    return colours;
  };

  return (
    <>
      <div className="customizeLayout">
        <h1>Layout</h1>
        <div className="layoutsDiv">
          <div onClick={(e) => handleLayoutClick("top")} className="layoutCont">
            <div className="topLayout palette">
              <div style={Colours()} className="topDivColor"></div>
              <div></div>
            </div>
            <p>top</p>
          </div>
          <div
            onClick={(e) => handleLayoutClick("left")}
            className="layoutCont"
          >
            <div className="leftLayout palette">
              <div style={Colours()} className="leftDivColor"></div>
              <div></div>
            </div>
            <p>left</p>
          </div>
          <div
            onClick={(e) => handleLayoutClick("right")}
            className="layoutCont"
          >
            <div className="rightLayout palette">
              <div className="whiteDivColor"></div>
              <div style={Colours()} className="rightDivColor"></div>
            </div>
            <p>right</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default CustomizeLayout;
