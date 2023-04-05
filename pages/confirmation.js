import React from "react";
import styles from "../styles/Layout.module.scss";
import Meta from "../components/Meta";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import paymentStyle from "../styles/Payment.module.scss";

const confirmation = () => {
  return (
    <main className={styles.main}>
      <Meta title="Payment confirmation" />
      <div className={paymentStyle.payment}>
        <h1>Votre paiement a été confirmé !</h1>
        <br />
        <p>Merci pour votre achat </p>
      </div>
    </main>
  );
};

export default confirmation;
