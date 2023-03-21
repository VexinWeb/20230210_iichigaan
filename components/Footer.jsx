import React from "react";
import Image from "next/image";
import footerStyle from "../styles/Footer.module.scss";

const Footer = () => {
  return (
    <div className={footerStyle.footer}>
      <div className={footerStyle.top}>
        <div className={footerStyle.item}>
          <h1>Categories</h1>
          <span>Clothes</span>
          <span>Accessories</span>
          <span>New products</span>
        </div>
        <div className={footerStyle.item}>
          <h1>Links</h1>
          <span>FAQ</span>
          <span>Pages</span>
        </div>
        <div className={footerStyle.item}>
          <h1>Informations</h1>
          <span>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum
            commodi a assumenda ea quae neque non repellendus blanditiis maxime!
            Vitae, aut architecto dignissimos recusandae tempora id doloremque
            culpa optio asperiores.
          </span>
        </div>
        <div className={footerStyle.item}>
          <h1>Contact</h1>
          <span>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum
            commodi a assumenda ea quae neque non repellendus blanditiis maxime!
            Vitae, aut architecto dignissimos recusandae tempora id doloremque
            culpa optio asperiores.
          </span>
        </div>
      </div>
      <div className={footerStyle.bottom}>
        <div className={footerStyle.left}>
          <span className={footerStyle.logo}>
            <Image
              src="/logo.png"
              alt="logo"
              style={{ objectFit: "cover", borderRadius: "50%" }}
              width={50}
              height={50}
            />
          </span>
          <span className={footerStyle.copyright}>
            © Copyright 2023. Tous droits réservés
          </span>
        </div>
        <div className={footerStyle.right}>
          <span className={footerStyle.payment}>
            <Image
              src="/payment.png"
              alt="payment methods"
              style={{ objectFit: "cover" }}
              width={300}
              height={40}
            />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
