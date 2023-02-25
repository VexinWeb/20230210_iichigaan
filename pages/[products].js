import React from "react";
import Meta from "../components/Meta";
import productsStyle from "../styles/Products.module.scss";
import styles from "../styles/Layout.module.scss";
import data from "../components/data.json";
import Image from "next/image";
import List from "../components/List";
// import { useParams } from "react-router-dom";
import { useRouter } from "next/router";

const Products = () => {
  // const param = useParams();
  // console.log(param);
  const router = useRouter();
  const { id } = router.query;
  console.log(id); // à revoir

  return (
    <main className={styles.main}>
      <Meta title="Products" />
      <div className={productsStyle.products}>
        <div className={productsStyle.left}>
          <div className={productsStyle.filterItem}>
            <h2>Sous catégories de produits</h2>
            <div className={productsStyle.inputItem}>
              <input type="checkbox" id="1" value="1" />
              <label htmlFor="1">Pagne</label>
            </div>
            <div className={productsStyle.inputItem}>
              <input type="checkbox" id="2" value="1" />
              <label htmlFor="2">Chemise</label>
            </div>
          </div>
          <div className={productsStyle.filterItem}>
            <h2>Filtrer par prix</h2>
            <span>0</span>
            <input type="range" min={0} max={1000} />
            <span>1000</span>
          </div>
          <div className={productsStyle.filterItem}>
            <h2>Trier par</h2>
            <div className={productsStyle.inputItem}>
              <input type="radio" id="asc" value="asc" name="price" />
              <label htmlFor="asc">Prix croissant</label>
            </div>
            <div className={productsStyle.inputItem}>
              <input type="radio" id="desc" value="desc" name="price" />
              <label htmlFor="desc">Prix décroissant</label>
            </div>
          </div>
        </div>
        <div className={productsStyle.right}>
          <Image
            className={productsStyle.categoriesImage}
            src={data[6].img}
            alt="categories image"
            style={{ objectFit: "cover" }}
            width={500}
            height={1000}
          />
          <List />
        </div>
      </div>
    </main>
  );
};

export default Products;
