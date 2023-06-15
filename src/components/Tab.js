import React, { useState } from "react";

const Tab = ({ tabs }) => {
  let [activeIndex, setActiveIndex] = useState(0);

  function currentTab(index) {
    setActiveIndex(index);
  }

  return (
    <div>
      <ul>
        {tabs.map((tab, index) => {
          return (
            <li
              key={index}
              onClick={() => {
                currentTab(index);
              }}
            >
              {tab.title}
            </li>
          );
        })}
      </ul>
      <div>{tabs[activeIndex].content}</div>
    </div>
  );
};

export default Tab;
