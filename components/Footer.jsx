import React from "react";
import Image from "next/image";
import footerStyle from "../styles/Footer.module.scss";
import { useRouter } from "next/router";
import Collapse from "./CollapseButton";
import { useTranslation } from "next-i18next";

const Footer = () => {
  const { t } = useTranslation("common");
  const footerCollapseTitle1 = t("footerCollapsesTitles1")
  const footerCollapseTitle2 = t("footerCollapsesTitles2")
  const footerCollapseTitle3 = t("footerCollapsesTitles3")
  const { locale } = useRouter();
  return (
    <div className={footerStyle.footer}>
      <div className={footerStyle.wrapper}>
        {/* Top */}
          {locale === "fr" && (
        <div className={footerStyle.top}>
              <Collapse
                  title={footerCollapseTitle1}
                  initialOpened={false}
                  text={`Bienvenue sur ma boutique en ligne ! 

            Depuis 2015, IICHIGAAN vous propose des créations originales et colorées entièrement réalisées à la main dans son atelier familial situé en Bourgogne.
            
            Je sélectionne les plus beaux tissus en parcourant les marchés africains et les mercerie parisiennes et dijonnaise.
            
            IICHIGAAN ce sont aussi des étoffes provenant d’Afrique du Sud et des Indes.
            
            Entrez dans mon univers coloré et créatif !`}
              />
            <Collapse
            title={footerCollapseTitle2}
            initialOpened={false}
            text={`
            Q: Quels modes de paiement acceptez-vous ?
            R: Nous acceptons les paiements par carte de crédit, carte de débit et PayPal. 
      
            Q: Combien de temps faut-il pour que ma commande soit expédiée ?
            R: Nous expédions toutes les commandes dans les 1 à 3 jours ouvrables suivant la réception du paiement.
            
            Q: Combien de temps faut-il pour que ma commande arrive ?
            R: Le délai de livraison dépend de votre emplacement et du mode de livraison que vous avez choisi. Veuillez vous référer à notre page de livraison pour plus d'informations.

            Q: Quid de la douane ?
            R: Les éventuelles taxes de douane et d'importation sont à la charge des acheteurs. Je ne suis pas responsable des délais causés par la douane.
            
            Q: Puis-je retourner un article si je ne suis pas satisfait ?
            R: Oui, vous pouvez retourner tout article qui ne vous convient pas dans les 30 jours suivant la date d'achat. Veuillez consulter notre politique de retour pour plus d'informations.
            
            Q: Comment puis-je contacter votre service clientèle ?
            R: Vous pouvez nous contacter par e-mail. Nous ferons de notre mieux pour répondre à votre demande dans les plus brefs délais.`}
            />
            <Collapse
            title={footerCollapseTitle3}
            initialOpened={false}
            text={`
            Informations légales

            Nom de la société : [Nom de la société]
            Adresse du siège social : [Adresse du siège social]
            Numéro de téléphone : [Numéro de téléphone]
            Adresse e-mail : [Adresse e-mail]

            Directeur de publication : [Nom du directeur de publication]
            Numéro SIRET : [Numéro SIRET de la société]
            Numéro de TVA intracommunautaire : [Numéro de TVA intracommunautaire de la société]

            Hébergement : [Nom de l'hébergeur]
            Adresse de l'hébergeur : [Adresse de l'hébergeur]
            Numéro de téléphone de l'hébergeur : [Numéro de téléphone de l'hébergeur]
            Adresse e-mail de l'hébergeur : [Adresse e-mail de l'hébergeur]

            Le site est la propriété de [Nom de la société], enregistrée au RCS de [Ville d'enregistrement] sous le numéro [Numéro d'enregistrement]. Tous les contenus présents sur le site, y compris les textes, les images, les vidéos, les logos et les marques, sont protégés par les lois françaises et internationales sur le droit d'auteur et la propriété intellectuelle.

            En utilisant le site, vous acceptez les conditions d'utilisation décrites dans nos mentions légales et dans notre politique de confidentialité. Nous nous réservons le droit de modifier ces conditions à tout moment, sans préavis.

            Pour toute question ou réclamation concernant le site, vous pouvez nous contacter à l'adresse e-mail [Adresse e-mail] ou par courrier postal à l'adresse suivante : [Adresse postale de la société].

            Nous vous remercions de votre visite sur notre site et nous espérons que vous y trouverez les produits qui répondront à vos attentes.
            `}
            />
        </div>
          )}
          {locale === "en" && (
              <div className={footerStyle.top}>
                <Collapse
                    title={footerCollapseTitle1}
                    initialOpened={false}
                    text={`Welcome to my online shop! 

            Since 2015, IICHIGAAN has been offering original and colorful creations, entirely handmade in my family workshop located in Burgundy.
            
            I carefully select the most beautiful fabrics by scouring African markets and haberdasheries in Paris and Dijon.
            
            IICHIGAAN also features fabrics from South Africa and India.
            
            Step into my colorful and creative world!`}
                />
                <Collapse
                    title={footerCollapseTitle2}
                    initialOpened={false}
                    text={`
            Q: What payment methods do you accept?
            A: We accept payments by credit card, debit card, and PayPal.
            
            Q: How long does it take for my order to be shipped?
            A: We ship all orders within 1-3 business days of receiving payment.
            
            Q: How long does it take for my order to arrive?
            A: The delivery time depends on your location and the shipping method you have chosen. Please refer to our delivery page for more information.
            
            Q: What about customs?
            A: Any customs and import taxes are the responsibility of the buyers. I am not responsible for any delays caused by customs.
            
            Q: Can I return an item if I am not satisfied?
            A: Yes, you can return any item that does not suit you within 30 days of the purchase date. Please refer to our return policy for more information.
            
            Q: How can I contact your customer service?
            A: You can contact us by email. We will do our best to respond to your request as soon as possible.`}
                />
                <Collapse
                    title={footerCollapseTitle3}
                    initialOpened={false}
                    text={`
            Legal information

            Company name: [Company name]
            Headquarters address: [Headquarters address]
            Phone number: [Phone number]
            Email address: [Email address]
            
            Publication director: [Publication director's name]
            SIRET number: [Company's SIRET number]
            Intracommunity VAT number: [Company's intracommunity VAT number]
            
            Hosting: [Hosting company name]
            Hosting company address: [Hosting company address]
            Hosting company phone number: [Hosting company phone number]
            Hosting company email address: [Hosting company email address]
            
            The website is the property of [Company name], registered with the RCS of [Registration city] under the number [Registration number]. All content on the site, including text, images, videos, logos, and trademarks, is protected by French and international laws on copyright and intellectual property.
            
            By using the site, you agree to the terms of use described in our legal notices and privacy policy. We reserve the right to modify these conditions at any time, without notice.
            
            For any questions or complaints regarding the site, you can contact us at [Email address] or by postal mail at the following address: [Company postal address].
            
            Thank you for visiting our site, and we hope you find the products that meet your expectations.
            `}
                />
              </div>
          )}


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
              {t("footerCopyright")}
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
            <a href="https://vexinweb.fr/">
              {t("footerAgenceWeb")}
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
