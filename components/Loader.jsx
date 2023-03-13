import React from "react";
import loaderStyle from "../styles/Loader.module.scss";

const Loader = () => {
  return (
    <div className={loaderStyle.loader}>
      <div className={loaderStyle.ldsHeart}>
        <div></div>
      </div>
    </div>
  );
};

export default Loader;
