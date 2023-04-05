import React, { useState } from "react";
import collapsebuttonStyles from "../styles/Collapse.module.scss";

const Collapse = ({ initialOpened, title, text }) => {
  const lines = text.split("\n");
  console.log(lines);
  const [isOpened, setIsOpened] = useState(initialOpened);

  return (
    <div className={collapsebuttonStyles.collapse}>
      <div
        className={collapsebuttonStyles.collapseHeader}
        onClick={() => setIsOpened(!isOpened)}
      >
        <h3>{title}</h3>
        <div className={collapsebuttonStyles.collapseButtonArrow}>
          <div>{isOpened ? "-" : "+"}</div>
        </div>
      </div>
      <div className={collapsebuttonStyles.collapseText}>
        {isOpened && (
          <div className={collapsebuttonStyles.collapseTextIsOpened}>
            {/* {text} */}
            {lines.map((item, key) => {
              console.log(item);
              return (
                <div key={key}>
                  {item}
                  <br />
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default Collapse;
