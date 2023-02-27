import React from "react";
import Meta from "../../components/Meta";
import productStyle from "../../styles/Product.module.scss";
import styles from "../../styles/Layout.module.scss";

const Product = () => {
  return (
    <main className={styles.main}>
      <Meta title="Product" />
      <div className={productStyle.product}>Product</div>
      <div>2ème ligne</div>
    </main>
  );
};

export default Product;
