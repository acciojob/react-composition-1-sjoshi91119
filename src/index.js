import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";

// import React, { useState } from "react";

function Tabs({ tabs }) {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  return (
    <div>
      <ul>
        {tabs.map((tab, index) => (
          <li key={index} onClick={() => handleTabClick(index)}>
            Tab {index + 1}
          </li>
        ))}
      </ul>
      <p>This is the content for Tab {activeTab + 1}</p>
    </div>
  );
}

export default Tabs;

ReactDOM.render(<App />, document.getElementById("root"));
