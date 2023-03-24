import React from "react";
import listStyle from "../styles/List.module.scss";
// import data from "./data.json";
import Card from "./Card";
import useFetch from "../hooks/useFetch";
import Loader from "./Loader";

const List = ({ subCats, sort, catId }) => {
  const { data, loading, error } = useFetch(
    `/products?populate=*&filters[categories][id]=${catId}${subCats.map(
      (item) => `&filters[product_types][id][$eq]=${item}`
    )}&sort=price:${sort}`
  );

  return (
    <div className={listStyle.list}>
      {loading ? (
        <Loader />
      ) : (
        data?.map((item) => <Card item={item} key={item.id} />)
      )}
    </div>
  );
};

export default List;
