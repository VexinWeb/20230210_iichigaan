import React, { useState } from "react";
import Meta from "../../components/Meta";
import productStyle from "../../styles/Product.module.scss";
import styles from "../../styles/Layout.module.scss";
import Image from "next/image";
import data from "../../components/dataProduct.json";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import BalanceIcon from "@mui/icons-material/Balance";

const Product = () => {
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);

  return (
    <main className={styles.main}>
      <Meta title="Product" />
      <div className={productStyle.product}>
        <div className={productStyle.left}>
          <div className={productStyle.images}>
            <Image
              className={productStyle.image}
              src={data[0].img}
              alt="product image"
              style={{ objectFit: "cover" }}
              width={500}
              height={1000}
              onClick={(e) => setSelectedImage(0)}
            />
            <Image
              className={productStyle.image}
              src={data[1].img}
              alt="product image 2"
              style={{ objectFit: "cover" }}
              width={500}
              height={1000}
              onClick={(e) => setSelectedImage(1)}
            />
          </div>
          <div className={productStyle.mainImage}>
            <Image
              className={productStyle.image}
              src={data[selectedImage].img}
              alt="product image 2"
              style={{ objectFit: "cover" }}
              width={500}
              height={1000}
            />
          </div>
        </div>
        <div className={productStyle.right}>
          <h1>Title</h1>
          <span className={productStyle.price}>199 €</span>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et
            quibusdam nisi dolores eos accusamus quod, nesciunt, nobis cumque,
            beatae repellendus hic temporibus sequi numquam repellat maiores.
            Tenetur, quaerat impedit recusandae ea deserunt ullam, vitae officia
            architecto maxime similique ex maiores alias soluta pariatur error
            saepe commodi quis? Vero, exercitationem velit.
          </p>
          <div className={productStyle.quantity}>
            <button
              onClick={() => setQuantity((prev) => (prev === 1 ? 1 : prev - 1))}
            >
              -
            </button>
            {quantity}
            <button onClick={() => setQuantity((prev) => prev + 1)}>+</button>
          </div>
          <button className={productStyle.addToCart}>
            <AddShoppingCartIcon style={{ fill: "white" }} />
            Ajouter au panier
          </button>
          <div className={productStyle.links}>
            <div className={productStyle.item}>
              <FavoriteBorderIcon style={{ fill: "#2879fe" }} /> Ajouter aux
              favoris
            </div>
            <div className={productStyle.item}>
              <BalanceIcon style={{ fill: "#2879fe" }} /> Ajouter et comparer
            </div>
          </div>
          <div className={productStyle.info}>
            <span>Type de produit : T-shirt</span>
            <span>Tag : t-shirt, women, top</span>
          </div>
          <hr />
          <div className={productStyle.info}>
            <span>Description</span>
            <hr />
            <span>Informations supplémentaires</span>
            <hr />
            <span>Avis</span>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Product;
