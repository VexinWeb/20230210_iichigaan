import React from "react";
import contactStyle from "../styles/Contact.module.scss";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";

const Contact = () => {
  return (
    <div className={contactStyle.contact}>
      <div className={contactStyle.wrapper}>
        <span>Contactez @iichigaan</span>
        <div className={contactStyle.mail}>
          <input type="text" placeholder="Entrez votre email..." />
          <button>Envoyer</button>
        </div>
        <div className={contactStyle.icons}>
          <FacebookIcon />
          <InstagramIcon />
        </div>
      </div>
    </div>
  );
};

export default Contact;
