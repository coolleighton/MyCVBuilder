import styles from "../styles/CustomizeLayout.css";

function CustomizeLayout() {
  return (
    <>
      <div className="customizeLayout">
        <h1>Layout</h1>
        <div className="layoutsDiv">
          <div className="layoutCont">
            <div className="topLayout palette">
              <div className="topDivColor"></div>
              <div></div>
            </div>
            <p>top</p>
          </div>
          <div className="layoutCont">
            <div className="leftLayout palette">
              <div className="leftDivColor"></div>
              <div></div>
            </div>
            <p>left</p>
          </div>
          <div className="layoutCont">
            <div className="rightLayout palette">
              <div className="whiteDivColor"></div>
              <div className="rightDivColor"></div>
            </div>
            <p>right</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default CustomizeLayout;
