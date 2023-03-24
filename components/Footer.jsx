import React from "react";
import Image from "next/image";
import footerStyle from "../styles/Footer.module.scss";
import { useRouter } from "next/router";
import Link from "next/link";
import Collapse from "./CollapseButton";
import collapseStyle from "../styles/Collapse.module.scss";

const Footer = () => {
  const router = useRouter();
  return (
    <div className={footerStyle.footer}>
      <div className={footerStyle.wrapper}>
        {/* Top */}
        <div className={footerStyle.top}>
          <Collapse
            title="About"
            initialOpened={false}
            text="L'alimentation joue un rôle crucial dans la prévention et le traitement de la maladie. On considère que les aliments que nous mangeons ont un impact direct sur notre bien-être physique et mental, et peuvent aider à maintenir ou à améliorer notre santé.
        
        Dans une société où nombre d'aliments sont transformés, avec des additifs alimentaires et des ingrédients artificiels, nous serons amenés à étudier une alimentation adaptée à vos besoins.  
        
        Nous réflérchissons ensemble à une gamme de fruits, légumes, grains entiers, protéines et graisses saines, en fonction de vos besoins individuels et de vos goûts, plutôt que de suivre un régime restrictif ou un plan alimentaire prédéterminé."
          />
          <Collapse
            title="FAQ"
            initialOpened={false}
            text="L'alimentation joue un rôle crucial dans la prévention et le traitement de la maladie. On considère que les aliments que nous mangeons ont un impact direct sur notre bien-être physique et mental, et peuvent aider à maintenir ou à améliorer notre santé.
        
        Dans une société où nombre d'aliments sont transformés, avec des additifs alimentaires et des ingrédients artificiels, nous serons amenés à étudier une alimentation adaptée à vos besoins.  
        
        Nous réflérchissons ensemble à une gamme de fruits, légumes, grains entiers, protéines et graisses saines, en fonction de vos besoins individuels et de vos goûts, plutôt que de suivre un régime restrictif ou un plan alimentaire prédéterminé."
          />
          <Collapse
            title="Legal informations"
            initialOpened={false}
            text="L'alimentation joue un rôle crucial dans la prévention et le traitement de la maladie. On considère que les aliments que nous mangeons ont un impact direct sur notre bien-être physique et mental, et peuvent aider à maintenir ou à améliorer notre santé.
        
        Dans une société où nombre d'aliments sont transformés, avec des additifs alimentaires et des ingrédients artificiels, nous serons amenés à étudier une alimentation adaptée à vos besoins.  
        
        Nous réflérchissons ensemble à une gamme de fruits, légumes, grains entiers, protéines et graisses saines, en fonction de vos besoins individuels et de vos goûts, plutôt que de suivre un régime restrictif ou un plan alimentaire prédéterminé."
          />
        </div>
        {/* <div className={footerStyle.top}>
          <div className={footerStyle.item}>
            <h1>More informations</h1>
            <span className={footerStyle.link}>
              <Link
                href="/about"
                className={router.asPath == "/about" ? "active" : ""}
              >
                About
              </Link>
            </span>
            <span className={footerStyle.link}>
              <Link
                href="/faq"
                className={router.asPath == "/about" ? "active" : ""}
              >
                FAQ
              </Link>
            </span>
            <span className={footerStyle.link}>
              <Link
                href="/legal"
                className={router.asPath == "/about" ? "active" : ""}
              >
                Legal informations
              </Link>
            </span>
          </div>
          <div className={footerStyle.item}></div>
        </div> */}
        {/* Bottom */}
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
              © Copyright 2023
              <br />
              Tous droits réservés
            </span>
          </div>
          <span className={footerStyle.center}>
            <Image
              src="/payment2.png"
              alt="payment methods"
              style={{
                maxWidth: "100%",
                maxHeight: "100%",
                objectFit: "contain",
              }}
              width={400}
              height={40}
            />
          </span>
          <div className={footerStyle.right}>
            {/* <span className={footerStyle.vexinweb}> */}
            <a href="https://vexinweb.fr/">
              Site réalisé par l&apos;agence
              <Image
                href="https://vexinweb.fr/"
                src="/logo_vw.png"
                alt="Logo VexinWEB"
                style={{
                  maxWidth: "100%",
                  maxHeight: "100%",
                  objectFit: "contain",
                }}
                width={50}
                height={50}
              ></Image>
            </a>
            {/* </span> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
