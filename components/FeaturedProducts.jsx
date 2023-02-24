import React from "react";
import featuredStyle from "../styles/Featured.module.scss";
import Card from "./Card";

const FeaturedProducts = ({ type }) => {
  const data = [
    {
      id: 1,
      img: "https://picsum.photos/500/1000",
      img2: "https://picsum.photos/600/1100",
      title: "Product 1",
      isNew: true,
      oldPrice: 19,
      price: 12,
    },
    {
      id: 2,
      img: "https://picsum.photos/400/900",
      img2: "https://picsum.photos/300/800",
      title: "Product 2",
      isNew: false,
      oldPrice: 17,
      price: 11,
    },
    {
      id: 3,
      img: "https://picsum.photos/700/1000",
      img2: "https://picsum.photos/800/1100",
      title: "Product 3",
      isNew: true,
      oldPrice: 25,
      price: 20,
    },
    {
      id: 4,
      img: "https://picsum.photos/800/1000",
      img2: "https://picsum.photos/900/1100",
      title: "Product 4",
      isNew: true,
      oldPrice: 40,
      price: 30,
    },
  ];

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
        {data.map((item) => (
          <Card item={item} key={item.id} />
        ))}
      </div>
    </div>
  );
};

export default FeaturedProducts;
