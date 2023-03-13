import React from "react";
import cardStyle from "../styles/Card.module.scss";
import Link from "next/link";
import Image from "next/image";

const Card = ({ item }) => {
  return (
    <Link className={cardStyle.link} href={`/product/${item.id}`}>
      <div className={cardStyle.card}>
        <div className={cardStyle.image}>
          {item?.attributes.isNew && <span>Nouveau produit</span>}
          <Image
            src={item.attributes?.img?.data?.attributes?.url}
            alt="main image"
            style={{ objectFit: "cover" }}
            width={500}
            height={1000}
            className={cardStyle.mainImg}
          />
          <Image
            src={item.attributes?.img2?.data?.attributes?.url}
            alt="main image"
            style={{ objectFit: "cover" }}
            width={500}
            height={1000}
            className={cardStyle.secondImg}
          />
        </div>
        <h2>{item?.attributes.title}</h2>
        <div className={cardStyle.prices}>
          {/* <h3>${item?.attributes.oldPrice || ""}</h3> */}
          <h3>${item?.attributes.price}</h3>
        </div>
      </div>
    </Link>
  );
};

export default Card;
