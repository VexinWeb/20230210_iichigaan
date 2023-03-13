import React from "react";
import listStyle from "../styles/List.module.scss";
import data from "./data.json";
import Card from "./Card";

const List = () => {
  return (
    <div className={listStyle.list}>
      {/* {data?.map((item) => (
        <Card item={item} key={item.id} />
      ))} */}
    </div>
  );
};

export default List;
