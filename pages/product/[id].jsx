import React, { useState } from "react";
import Meta from "../../components/Meta";
import productStyle from "../../styles/Product.module.scss";
import styles from "../../styles/Layout.module.scss";
import Image from "next/image";
// import data from "../../components/dataProduct.json";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import BalanceIcon from "@mui/icons-material/Balance";
import PanToolIcon from "@mui/icons-material/PanTool";
import PublicIcon from "@mui/icons-material/Public";
import CategoryIcon from "@mui/icons-material/Category";
import StraightenIcon from "@mui/icons-material/Straighten";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import Loader from "@/components/Loader";
import { useRouter } from "next/router";
import useFetch from "../../hooks/useFetch";
import { useDispatch } from "react-redux";
import { addToCart } from "@/redux/cartReducer";
/* import { getStaticPaths, getStaticProps } from "next"; */

const Product = ({ product }) => {
  console.log("product: ", product);

  // Routes, identifying url's id (slug)
  const router = useRouter();
  const id = router.query.id;

  const [selectedImage, setSelectedImage] = useState("img");
  const [quantity, setQuantity] = useState(1);

  const dispatch = useDispatch();
  // const { data, loading, error } = useFetch(`/products/${id}?populate=*`);
  const data = product.data;

  // const handleImageError = (e) => {
  //   e.target.onerror = null;
  //   e.target.src = "/atelier_couture.jpg"; // ou afficher un message d'erreur
  //   e.target.alt = "atelier couture";
  // };

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
                    src={
                      data?.attributes?.[selectedImage]?.data?.attributes?.url
                    }
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
              <p>{data?.attributes?.description}</p>
              <div className={productStyle.quantity}>
                <button
                  onClick={() =>
                    setQuantity((prev) => (prev === 1 ? 1 : prev - 1))
                  }
                >
                  -
                </button>
                {quantity}
                <button onClick={() => setQuantity((prev) => prev + 1)}>
                  +
                </button>
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
                Add to cart
              </button>
              <div className={productStyle.info}>
                <span className={productStyle.item}>
                  <StraightenIcon
                    style={{ fill: "#FF6542" }}
                    className={productStyle.icon}
                  />
                  *Longueur des manches : 46 cm *Hauteur dos : 76 cm
                </span>
                <span className={productStyle.item}>
                  <CategoryIcon
                    style={{ fill: "#FF6542" }}
                    className={productStyle.icon}
                  />
                  Type of product:{" "}
                  {/* {data?.attributes?.product_types?.data[0]?.attributes?.title} */}
                  {data?.attributes?.product_types?.data?.map((type) => (
                    <div key={type.id}> {type.attributes.title}</div>
                  ))}
                </span>
                {/* <span>Tag : t-shirt, women, top</span> */}
                <span className={productStyle.item}>
                  <PublicIcon
                    style={{ fill: "#FF6542" }}
                    className={productStyle.icon}
                  />
                  Material(s):{" "}
                  {data?.attributes?.materials?.map((material) => (
                    <div key={material.id}> {material.material}</div>
                  ))}
                </span>
                <span className={productStyle.item}>
                  <LocalShippingIcon
                    style={{ fill: "#FF6542" }}
                    className={productStyle.icon}
                  />
                  Delivery: 3-5 days
                </span>
                <span className={productStyle.item}>
                  <PanToolIcon
                    style={{ fill: "#FF6542" }}
                    className={productStyle.icon}
                  />
                  Handmade
                </span>
              </div>
              <hr />
            </div>
          </>
      </div>
    </main>
  );
};

// Generates `/posts/1` and `/posts/2`
// export const getStaticPaths = async () => {
//   const { dataGSP } = await {};

//   return {
//     paths: [{ params: { id: "1" } }, { params: { id: "2" } }],
//     fallback: false, // can also be true or 'blocking'
//   };
// };

export const getStaticPaths = async () => {
  // Fetch the list of products to generate the paths
  const response = await fetch(`https://iichigaan.herokuapp.com/api/products`, {
    headers: {
      Authorization: "Bearer " + process.env.REACT_APP_API_TOKEN,
    }
  });
  const products = await response.json();
  console.log(products);

  // Generate the paths for each product
  const paths = products.data.map((product) => ({
    params: { id: product.id.toString() },
  }));

  return {
    paths,
    fallback: "blocking",
  };
};

export const getStaticProps = async (context) => {
  const { id } = context.params;
  const res = await fetch(
    process.env.REACT_APP_API_URL + `/products/${id}?populate=*`, {
        headers: {
          Authorization: "Bearer " + process.env.REACT_APP_API_TOKEN,
        }
      }
  );
  const product = await res.json();

  return {
    props: {
      product,
    },
  };
};

export default Product;
