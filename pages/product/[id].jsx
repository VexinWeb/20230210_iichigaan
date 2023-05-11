import React, { useState } from "react";
import Meta from "../../components/Meta";
import productStyle from "../../styles/Product.module.scss";
import styles from "../../styles/Layout.module.scss";
import Image from "next/image";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import PanToolIcon from "@mui/icons-material/PanTool";
import PublicIcon from "@mui/icons-material/Public";
// import CategoryIcon from "@mui/icons-material/Category";
import StraightenIcon from "@mui/icons-material/Straighten";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import TagIcon from "@mui/icons-material/Tag";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { addToCart } from "@/redux/cartReducer";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";

const Product = ({ product }) => {
  const { t } = useTranslation("common");
  // Routes, identifying url's id (slug)
  const router = useRouter();
  const id = router.query.id;

  const [selectedImage, setSelectedImage] = useState("img");
  const [quantity, setQuantity] = useState(1);

  const dispatch = useDispatch();
  const data = product.data;

  // Line break in product description
  const lines = data?.attributes?.description?.split("\n");

  return (
    <main className={styles.main}>
      <Meta title="Product" />
      <div className={productStyle.product}>
        <>
          {/* Left */}
          <div className={productStyle.left}>
            <div className={productStyle.images}>
              {data?.attributes?.img?.data?.attributes?.url && (
                <Image
                  className={productStyle.image}
                  src={data?.attributes?.img?.data?.attributes?.url}
                  alt={data?.attributes?.img?.data?.attributes?.name}
                  style={{ objectFit: "cover" }}
                  width={500}
                  height={900}
                  onClick={(e) => setSelectedImage("img")}
                  // onError={handleImageError}
                />
              )}
              {data?.attributes?.img2?.data?.attributes?.url && (
                <Image
                  className={productStyle.image}
                  src={data?.attributes?.img2?.data?.attributes?.url}
                  alt={data?.attributes?.img2?.data?.attributes?.name}
                  style={{ objectFit: "cover" }}
                  width={500}
                  height={900}
                  onClick={(e) => setSelectedImage("img2")}
                  // onError={handleImageError}
                />
              )}
              {data?.attributes?.img3?.data?.attributes?.url && (
                <Image
                  className={productStyle.image}
                  src={data?.attributes?.img3?.data?.attributes?.url}
                  alt={data?.attributes?.img3?.data?.attributes?.name}
                  style={{ objectFit: "cover" }}
                  width={500}
                  height={900}
                  onClick={(e) => setSelectedImage("img3")}
                  // onError={handleImageError}
                />
              )}
              {data?.attributes?.img4?.data?.attributes?.url && (
                <Image
                  className={productStyle.image}
                  src={data?.attributes?.img4?.data?.attributes?.url}
                  alt={data?.attributes?.img4?.data?.attributes?.name}
                  style={{ objectFit: "cover" }}
                  width={500}
                  height={900}
                  onClick={(e) => setSelectedImage("img4")}
                  // onError={handleImageError}
                />
              )}
              {data?.attributes?.img5?.data?.attributes?.url && (
                <Image
                  className={productStyle.image}
                  src={data?.attributes?.img5?.data?.attributes?.url}
                  alt={data?.attributes?.img5?.data?.attributes?.name}
                  style={{ objectFit: "cover" }}
                  width={500}
                  height={900}
                  onClick={(e) => setSelectedImage("img5")}
                  // onError={handleImageError}
                />
              )}
              {data?.attributes?.img6?.data?.attributes?.url && (
                <Image
                  className={productStyle.image}
                  src={data?.attributes?.img6?.data?.attributes?.url}
                  alt={data?.attributes?.img6?.data?.attributes?.name}
                  style={{ objectFit: "cover" }}
                  width={500}
                  height={900}
                  onClick={(e) => setSelectedImage("img6")}
                  // onError={handleImageError}
                />
              )}
              {data?.attributes?.img7?.data?.attributes?.url && (
                <Image
                  className={productStyle.image}
                  src={data?.attributes?.img7?.data?.attributes?.url}
                  alt={data?.attributes?.img7?.data?.attributes?.name}
                  style={{ objectFit: "cover" }}
                  width={500}
                  height={900}
                  onClick={(e) => setSelectedImage("img7")}
                  // onError={handleImageError}
                />
              )}
              {data?.attributes?.img8?.data?.attributes?.url && (
                <Image
                  className={productStyle.image}
                  src={data?.attributes?.img8?.data?.attributes?.url}
                  alt={data?.attributes?.img8?.data?.attributes?.name}
                  style={{ objectFit: "cover" }}
                  width={500}
                  height={900}
                  onClick={(e) => setSelectedImage("img8")}
                  // onError={handleImageError}
                />
              )}
            </div>
            <div className={productStyle.mainImage}>
              {data?.attributes?.[selectedImage]?.data?.attributes?.url && (
                <Image
                  className={productStyle.image}
                  src={data?.attributes?.[selectedImage]?.data?.attributes?.url}
                  alt={data?.attributes?.img?.data?.attributes?.name}
                  style={{ objectFit: "cover" }}
                  width={500}
                  height={900}
                />
              )}
            </div>
          </div>
          {/* Right */}
          <div className={productStyle.right}>
            <h1>{data?.attributes?.title}</h1>
            <span className={productStyle.price}>
              {data?.attributes?.price} €
            </span>
            {/* Product description */}
            <p>
              {lines.map((line, key) => {
                console.log(line);
                return (
                  <div key={key}>
                    {line}
                    <br />
                  </div>
                );
              })}
            </p>
            <div className={productStyle.quantity}>
              <button
                onClick={() =>
                  setQuantity((prev) => (prev === 1 ? 1 : prev - 1))
                }
              >
                -
              </button>
              {quantity}
              <button onClick={() => setQuantity((prev) => prev + 1)}>+</button>
            </div>
            <button
              className={productStyle.addToCart}
              onClick={() =>
                dispatch(
                  addToCart({
                    id: data?.id,
                    title: data?.attributes?.title,
                    description: data?.attributes?.desc,
                    price: data?.attributes?.price,
                    img: data?.attributes?.img?.data?.attributes?.url,
                    quantity,
                  })
                )
              }
            >
              <AddShoppingCartIcon
                style={{ fill: "white" }}
                className={productStyle.icon}
              />
              {t("productCardAddToCart")}
            </button>
            <div className={productStyle.info}>
              <span className={productStyle.item}>
                <StraightenIcon
                  style={{ fill: "#FF6542" }}
                  className={productStyle.icon}
                />
                <div className={productStyle.dimensions}>
                  <div className={productStyle.dimension}>
                    {data?.attributes?.dimensions?.map((dimension) => (
                      <div key={dimension.id}>{dimension.valeur}</div>
                    ))}
                  </div>
                  <div className={productStyle.dimension}>
                    <a href="mailto:nicolas.lorofi@yahoo.fr">
                      {t("productCardDimension")}
                    </a>
                  </div>
                </div>
              </span>
              {/* <span className={productStyle.item}>
                <StraightenIcon
                  style={{ fill: "#FF6542" }}
                  className={productStyle.icon}
                />
                <div>Demander une taille personnalisée</div>
              </span> */}
              <span className={productStyle.item}>
                <PublicIcon
                  style={{ fill: "#FF6542" }}
                  className={productStyle.icon}
                />
                {t("productCardMaterials")} :
                {data?.attributes?.materials?.map((material) => (
                  <div key={material.id}>{material.material}</div>
                ))}
              </span>
              <span className={productStyle.item}>
                <TagIcon
                  style={{ fill: "#FF6542" }}
                  className={productStyle.icon}
                />
                {/* Strapi : ajouter un champ tags semblable à materials */}
                {/* {data?.attributes?.tags?.map((tag) => (
                  <div key={tag.id}>{tag.tag}</div>
                ))} */}
              </span>
              <span className={productStyle.item}>
                <LocalShippingIcon
                  style={{ fill: "#FF6542" }}
                  className={productStyle.icon}
                />
                {t("productCardDelivery")} 3-5 days
              </span>
              <span className={productStyle.item}>
                <PanToolIcon
                  style={{ fill: "#FF6542" }}
                  className={productStyle.icon}
                />
                {t("productCardHandmade")}
              </span>
            </div>
            <hr />
          </div>
        </>
      </div>
    </main>
  );
};

export const getStaticPaths = async () => {
  // Fetch the list of products to generate the paths
  const response = await fetch(`https://iichigaan.herokuapp.com/api/products`, {
    headers: {
      Authorization: "Bearer " + process.env.NEXT_CLIENT_API_TOKEN,
    },
  });
  const products = await response.json();

  // Generate the paths for each product
  const paths = products.data.flatMap((product) => [
    { params: { id: product.id.toString() }, locale: "en" },
    { params: { id: product.id.toString() }, locale: "fr" },
  ]);

  return {
    paths,
    fallback: "blocking",
  };
};

export const getStaticProps = async ({ params, locale }) => {
  const { id } = params;
  const res = await fetch(
    process.env.NEXT_CLIENT_API_URL +
      `/products/${id}?locale=${locale}&populate=*`,
    {
      headers: {
        Authorization: "Bearer " + process.env.NEXT_CLIENT_API_TOKEN,
      },
    }
  );
  const product = await res.json();

  return {
    props: {
      product,
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
};

export default Product;
