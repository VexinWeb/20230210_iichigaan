import React from "react";
import Card from "./Card";
import featuredStyle from "../styles/Featured.module.scss";
import useFetch from "../hooks/useFetch";
import Loader from "./Loader";

const FeaturedProducts = ({ type }) => {
  const { data, loading, error } = useFetch(
    `/products?populate=*&[filters][type][$eq]=${type}`
  );
  console.log(data);
  return (
    <div className={featuredStyle.featured}>
      {/* <Loader /> */}
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
        {error ? (
          "Error message"
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
