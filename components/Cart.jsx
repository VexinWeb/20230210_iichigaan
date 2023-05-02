import React from "react";
import cartStyle from "../styles/Cart.module.scss";
import Image from "next/image";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { removeItem } from "@/redux/cartReducer";
import { resetCart } from "@/redux/cartReducer";
import {useTranslation} from "next-i18next";
import { loadStripe } from '@stripe/stripe-js';

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe(
    process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
);


const Cart = () => {

  async function handleCheckout(cartItems) {
    // Récupérer l'instance Stripe
    const stripe = await stripePromise;

    // Appeler la route du middleware Next.js pour créer la session Stripe
    const response = await fetch('/api/checkout_sessions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(cartItems),
    });

    const { sessionId } = await response.json();

    // Rediriger l'utilisateur vers la page de paiement Stripe
    await stripe.redirectToCheckout({ sessionId });
  }

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
        <button onClick={() => handleCheckout(products)} role="link">{t("cartPay")}</button>
        <span className={cartStyle.reset} onClick={() => dispatch(resetCart())}>
          {t("cartReset")}
        </span>
      </div>
    </>
  );
};

export default Cart;
