import React from "react";
import Card from "./Card";
import featuredStyle from "../styles/Featured.module.scss";
import useFetch from "../hooks/useFetch";
import Loader from "./Loader";

const FeaturedProducts = ({ type, title, text, products }) => {
  const data = products.data;

  // Fetching products and images from <Strapi></Strapi>
  /*const { data, loading, error } = useFetch(
    `/products?populate=*&[filters][type][$eq]=${type}`
    console.log(text)
  );
  console.log(data);*/
  console.log(data);
  return (
    <div className={featuredStyle.featured} id={type}>
      {/* <Loader /> */}
      <div className={featuredStyle.top}>
        <h1>{title}</h1>
        <p>{text}</p>
        {/* <p>Discover our selection of trendy products for this season!</p> */}
      </div>
      <div className={featuredStyle.bottom}>
        {data?.map((item) => (
          <Card item={item} key={item.id} />
        ))}
      </div>
    </div>
  );
};

export default FeaturedProducts;
