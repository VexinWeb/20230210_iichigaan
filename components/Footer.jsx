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
            text={`Bienvenue sur ma boutique en ligne ! 

            Depuis 2015, IICHIGAAN vous propose des créations originales et colorées entièrement réalisées à la main dans son atelier familial situé en Bourgogne.
            
            Je sélectionne les plus beaux tissus en parcourant les marchés africains et les mercerie parisiennes et dijonnaise.
            
            IICHIGAAN ce sont aussi des étoffes provenant d’Afrique du Sud et des Indes.
            
            Entrez dans mon univers coloré et créatif !`}
          />
          <Collapse
            title="FAQ"
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
            title="Legal informations"
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
