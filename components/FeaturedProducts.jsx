import React from "react";
import featuredStyle from "../styles/Featured.module.scss";
import Card from "./Card";
import dataFeatured from "./dataFeatured.json";

const FeaturedProducts = ({ type }) => {
  return (
    <div className={featuredStyle.featured}>
      <div className={featuredStyle.top}>
        <h1>{type}</h1>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus
          impedit a voluptate odio, sunt unde iusto quo illum voluptas magnam?
          Amet quibusdam quo maxime fugiat tenetur esse dolorem vero. Libero
          eligendi praesentium dicta enim ipsam nesciunt! Animi, cum incidunt
          vitae est impedit fugit deserunt neque laboriosam rerum consequuntur
          repellendus nemo corporis similique!
        </p>
      </div>
      <div className={featuredStyle.bottom}>
        {dataFeatured.map((item) => (
          <Card item={item} key={item.id} />
        ))}
      </div>
    </div>
  );
};

export default FeaturedProducts;
