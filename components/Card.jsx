import React from "react";
import cardStyle from "../styles/Card.module.scss";
import Link from "next/link";
import Image from "next/image";
// import { getImage } from "next/image";
// import { getImage } from "next/image/server";

const Card = ({ item }) => {
  return (
    <Link className={cardStyle.link} href={`/product/${item.id}`}>
      <div className={cardStyle.card}>
        <div className={cardStyle.image}>
          {item.isNew && <span>Nouveau produit</span>}
          <Image
            src={item.img}
            alt="main image"
            style={{ objectFit: "cover" }}
            width={500}
            height={1000}
            className={cardStyle.mainImg}
          />
          <Image
            src={item.img2}
            alt="main image"
            style={{ objectFit: "cover" }}
            width={500}
            height={1000}
            className={cardStyle.secondImg}
          />
        </div>
        <h2>{item.title}</h2>
        <div className={cardStyle.prices}>
          <h3>${item.oldPrice}</h3>
          <h3>${item.price}</h3>
        </div>
      </div>
    </Link>
  );
};

export default Card;
