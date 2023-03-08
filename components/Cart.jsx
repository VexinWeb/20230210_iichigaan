import React from "react";
import cartStyle from "../styles/Cart.module.scss";
import data from "../components/dataCart.json";
import Image from "next/image";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";

const Cart = () => {
  return (
    <>
      <div className={cartStyle.cart}>
        <h1>Produits du panier</h1>
        {data?.map((item) => (
          <div className={cartStyle.item} key={item.id}>
            {/* <div className={cartStyle.image}> */}
            <Image
              src={item.img}
              alt="cart product image"
              style={{ objectFit: "cover" }}
              width={500}
              height={1000}
              className={cartStyle.image}
            />
            {/* </div> */}
            <div className={cartStyle.details}>
              <h2>{item.title}</h2>
              <p>{item.description?.substring(0, 100)}</p>
              <div className={cartStyle.price}>1 X {item.price} €</div>
            </div>
            <DeleteOutlineIcon
              className={cartStyle.delete}
              style={{ fill: "red" }}
            />
          </div>
        ))}
        <div className={cartStyle.total}>
          <span>Subtotal</span>
          <span>123 €</span>
        </div>
        <button>Payer</button>
        <span className={cartStyle.reset}>Vider le panier</span>
      </div>
    </>
  );
};

export default Cart;
