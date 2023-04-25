import React from "react";
import cartStyle from "../styles/Cart.module.scss";
import Image from "next/image";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { removeItem } from "@/redux/cartReducer";
import { resetCart } from "@/redux/cartReducer";
import { useTranslation } from "next-i18next";

const Cart = () => {
  const products = useSelector((state) => state.cart.products);
  console.log(products);
  const { t } = useTranslation("common");
  const totalPrice = () => {
    let total = 0;
    products?.map((item) => {
      total += item.price * item.quantity;
    });
    return total.toFixed(2);
  };
  const dispatch = useDispatch();

  return (
    <>
      <div className={cartStyle.cart}>
        <h1>{t("cartH1")}</h1>
        {products?.map((item) => (
          <div className={cartStyle.item} key={item.id}>
            <Image
              src={item.img}
              alt="cart product image"
              style={{ objectFit: "cover" }}
              width={80}
              height={100}
              className={cartStyle.image}
            />
            {/* </div> */}
            <div className={cartStyle.details}>
              <h2>{item.title}</h2>
              <p>{item.description?.substring(0, 100)}</p>
              <div className={cartStyle.price}>
                {item.quantity} X {item.price} €
              </div>
            </div>
            <DeleteOutlineIcon
              className={cartStyle.delete}
              style={{ fill: "red" }}
              onClick={() => dispatch(removeItem(item.id))}
            />
          </div>
        ))}
        <div className={cartStyle.total}>
          <span>{t("cartSubtotal")}</span>
          <span>{totalPrice()} €</span>
        </div>
        <button>{t("cartPay")}</button>
        <span className={cartStyle.reset} onClick={() => dispatch(resetCart())}>
          {t("cartReset")}
        </span>
      </div>
    </>
  );
};

export default Cart;
