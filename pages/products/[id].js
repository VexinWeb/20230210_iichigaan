import React, { useState } from "react";
import Meta from "../../components/Meta";
import productsStyle from "../../styles/Products.module.scss";
import styles from "../../styles/Layout.module.scss";
import List from "../../components/List";
import { useRouter } from "next/router";
import useFetch from "../../hooks/useFetch";

const Products = () => {
  // Routes, identifying url's id (slug)
  const router = useRouter();
  const catId = router.query.id;
  console.log("productsId: ", catId);

  // Filters
  const [sort, setSort] = useState("desc");
  const [selectedSubCats, setSelectedSubCats] = useState([]);

  // Fetching sub-categories from Strapi
  const { data, loading, error } = useFetch(
    `/product_types?filters[categories][id][$eq]=${catId}`
  );
  console.log(data);

  const handleChange = (e) => {
    const value = e.target.value;
    const isChecked = e.target.checked;

    setSelectedSubCats(
      isChecked
        ? [...selectedSubCats, value]
        : selectedSubCats.filter((item) => item !== value)
    );
  };

  console.log("subCats: ", selectedSubCats);

  return (
    <main className={styles.main}>
      <Meta title="Products" />
      <div className={productsStyle.products}>
        {/* Left */}
        <div className={productsStyle.left}>
          <div className={productsStyle.filterItem}>
            <h1>Sub product categories</h1>
            {data?.map((item) => (
              <div className={productsStyle.inputItem} key={item.id}>
                <input
                  type="checkbox"
                  id={item.id}
                  value={item.id}
                  onChange={handleChange}
                />
                <label htmlFor={item.id}>{item.attributes.title}</label>
              </div>
            ))}
          </div>
          {/* Sort by: */}
          <div className={productsStyle.filterItem}>
            <h2>Sort by</h2>
            <div className={productsStyle.inputItem}>
              <input
                type="radio"
                id="asc"
                value="asc"
                name="price"
                onChange={(e) => setSort("asc")}
              />
              <label htmlFor="asc">Ascending price</label>
            </div>
            <div className={productsStyle.inputItem}>
              <input
                type="radio"
                id="desc"
                value="desc"
                name="price"
                onChange={(e) => setSort("desc")}
              />
              <label htmlFor="desc">Decreasing price</label>
            </div>
          </div>
        </div>
        {/* Right */}
        <div className={productsStyle.right}>
          <List
            catId={catId}
            // maxPrice={maxPrice}
            sort={sort}
            subCats={selectedSubCats}
          />
        </div>
      </div>
    </main>
  );
};

export default Products;
