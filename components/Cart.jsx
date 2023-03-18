import React from "react";
import cartStyle from "../styles/Cart.module.scss";
// import data from "../components/dataCart.json";
import Image from "next/image";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { removeItem } from "@/redux/cartReducer";
import { resetCart } from "@/redux/cartReducer";

const Cart = () => {
  const products = useSelector((state) => state.cart.products);
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
        <h1>Products cart</h1>
        {products?.map((item) => (
          <div className={cartStyle.item} key={item.id}>
            {/* <div className={cartStyle.image}> */}
            <Image
              // src={process.env.REACT_APP_UPLOAD_URL + item.img}
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
          <span>Subtotal</span>
          <span>{totalPrice()} €</span>
        </div>
        <button>Pay</button>
        <span className={cartStyle.reset} onClick={() => dispatch(resetCart())}>
          Reset cart
        </span>
      </div>
    </>
  );
};

export default Cart;
