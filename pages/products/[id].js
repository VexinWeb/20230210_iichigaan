import React, { useState } from "react";
import Meta from "../../components/Meta";
import productsStyle from "../../styles/Products.module.scss";
import styles from "../../styles/Layout.module.scss";
import List from "../../components/List";
import { useRouter } from "next/router";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";

const Products = ({ products }) => {
  const { t } = useTranslation("common");
  // Routes, identifying url's id (slug)
  const router = useRouter();
  const catId = router.query.id;

  // Filters
  const [sort, setSort] = useState("desc");
  const [selectedSubCats, setSelectedSubCats] = useState([]);
  const [selectedSubCategories, setSelectedSubCategories] = useState(new Set());
  const data = products.data;

  // Fetching sub-categories from Strapi
  /* const { data, loading, error } = useFetch(
    `/product_types?filters[categories][id][$eq]=${catId}`
  );
  console.log("data: ", data); */

  /*const sortedProducts = React.useMemo(() => {
    if (sort === "asc") {
      return data.slice().sort((a, b) => a.attributes.price - b.attributes.price);
    } else if (sort === "desc") {
      return data.slice().sort((a, b) => b.attributes.price - a.attributes.price);
    } else {
      return data;
    }
  }, [data, sort]);*/

  const sortedAndFilteredProducts = React.useMemo(() => {
    let sortedData = data.slice();

    if (sort === "asc") {
      sortedData.sort((a, b) => a.attributes.price - b.attributes.price);
    } else if (sort === "desc") {
      sortedData.sort((a, b) => b.attributes.price - a.attributes.price);
    }

    return sortedData.filter((product) => {
      if (selectedSubCategories.size === 0) {
        return true;
      }
      return product.attributes.product_types.data.some((productType) =>
        selectedSubCategories.has(productType.attributes.title)
      );
    });
  }, [data, sort, selectedSubCategories]);

  const handleChange = (e) => {
    const value = e.target.value;
    const isChecked = e.target.checked;

    setSelectedSubCats(
      isChecked
        ? [...selectedSubCats, value]
        : selectedSubCats.filter((item) => item !== value)
    );
  };

  const subCategoriesSet = data.reduce((acc, product) => {
    const productTypes = product.attributes.product_types.data;
    productTypes.forEach((productType) => {
      acc.add(productType.attributes.title);
    });
    return acc;
  }, new Set());

  const subCategoriesArray = Array.from(subCategoriesSet);

  return (
    <main className={styles.main}>
      <Meta title="Products" />
      <div className={productsStyle.products}>
        {/* Left */}
        <div className={productsStyle.left}>
          <div className={productsStyle.filterItem}>
            <h1>Sub product categories</h1>
            {/*{data?.map((item) => (
              <div className={productsStyle.inputItem} key={item.id}>
                <input
                  type="checkbox"
                  id={item.id}
                  value={item.id}
                  onChange={handleChange}
                />
                <label htmlFor={item.id}>{item.attributes.title}</label>
              </div>
            ))}*/}
            {subCategoriesArray.map((subCategory, index) => (
              <div className={productsStyle.inputItem} key={index}>
                <input
                  type="checkbox"
                  id={subCategory}
                  value={subCategory}
                  onChange={handleChange}
                />
                <label htmlFor={subCategory}>{subCategory}</label>
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
                onChange={() => setSort("asc")}
              />
              <label htmlFor="asc">Ascending price</label>
            </div>
            <div className={productsStyle.inputItem}>
              <input
                type="radio"
                id="desc"
                value="desc"
                name="price"
                onChange={() => setSort("desc")}
              />
              <label htmlFor="desc">Decreasing price</label>
            </div>
          </div>
        </div>
        {/* Right */}
        <div className={productsStyle.right}>
          <List
            // maxPrice={maxPrice}
            /* catId={catId}
            sort={sort}
            subCats={selectedSubCats} */
            products={sortedAndFilteredProducts}
          />
        </div>
      </div>
    </main>
  );
};

const getCategoryMapping = () => {
  return {
    clothes: 1,
    accessories: 2,
  };
};

export const getStaticPaths = async () => {
  /*const categoryMapping = getCategoryMapping();
  const paths = Object.keys(categoryMapping).map((category) => ({
    params: { id: category },
  }));*/
  const paths = [
    { params: { id: "1" }, locale: "en" },
    { params: { id: "2" }, locale: "en" },
    { params: { id: "1" }, locale: "fr" },
    { params: { id: "2" }, locale: "fr" },
  ];
  return {
    paths,
    // fallback: blocking,
    fallback: false,
  };
};

export const getStaticProps = async ({ params, locale }) => {
  let catId;
  if (locale === "fr") {
    catId = params.id === "1" ? 5 : 7;
  } else {
    catId = params.id === "1" ? 6 : 8;
  }
  const response = await fetch(
    process.env.NEXT_CLIENT_API_URL +
      `/products?locale=${locale}&populate=*&filters[categories][id]=${catId}`,
    {
      headers: {
        Authorization: "Bearer " + process.env.NEXT_CLIENT_API_TOKEN,
      },
    }
  );
  const products = await response.json();
  return {
    props: {
      products,
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
};

export default Products;
