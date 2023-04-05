import React from "react";
import styles from "../styles/Layout.module.scss";
import Meta from "../components/Meta";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import paymentStyle from "../styles/Payment.module.scss";

const paymentFailed = () => {
  return (
    // <main className={styles.main}>
    <main className={styles.main}>
      <Meta title="Payment échoué" />
      <div className={paymentStyle.payment}>
        <h1>Votre paiement a échoué...</h1>
        <br />
        <p>Veuillez réessayer ou nous contacter</p>
      </div>
    </main>
  );
};

export default paymentFailed;
