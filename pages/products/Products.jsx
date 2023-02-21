import React from "react";
import Meta from "../../components/Meta";
import productsStyle from "../../styles/Products.module.scss";
import styles from "../../styles/Layout.module.scss";

const Products = () => {
  return (
    <main className={styles.main}>
      <Meta title="Products" />
      <div className={productsStyle.products}>Products</div>
    </main>
  );
};

export default Products;
