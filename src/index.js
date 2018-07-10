import React from "react";
import { render } from "react-dom";
import "./index.css";

// Import module and default styles
import CircularProgressbar from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const percentage = 29.5;

const App = () => (
  <div>
    <div style={{ width: "1000px", marginLeft: "auto", marginRight: "auto" }}>
      <CircularProgressbar
        styles="no-round"
        percentage={percentage}
        text={`${percentage}%`}
      />
    </div>
  </div>
);

render(<App />, document.getElementById("root"));
