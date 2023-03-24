import React, { useState } from "react";
import collapsebuttonStyles from "../styles/Collapse.module.scss";

const Collapse = ({ initialOpened, title, text }) => {
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
            {text}
          </div>
        )}
      </div>
    </div>
  );
};

export default Collapse;
