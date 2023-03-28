import React from "react";
import Card from "./Card";
import featuredStyle from "../styles/Featured.module.scss";
import useFetch from "../hooks/useFetch";
import Loader from "./Loader";

const FeaturedProducts = ({ type, text }) => {
  // Fetching products and images from <Strapi></Strapi>
  const { data, loading, error } = useFetch(
    `/products?populate=*&[filters][type][$eq]=${type}`
  );
  console.log(data);
  return (
    <div className={featuredStyle.featured} id={type}>
      {/* <Loader /> */}
      <div className={featuredStyle.top}>
        <h1>{type}</h1>
        <p>{text}</p>
        {/* <p>Discover our selection of trendy products for this season!</p> */}
      </div>
      <div className={featuredStyle.bottom}>
        {error ? (
          "Something went wrong !"
        ) : loading ? (
          <Loader />
        ) : (
          data?.map((item) => <Card item={item} key={item.id} />)
        )}
      </div>
    </div>
  );
};

export default FeaturedProducts;
