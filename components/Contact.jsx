import React from "react";
import contactStyle from "../styles/Contact.module.scss";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import Link from "next/link";
import Image from "next/image";
import { useTranslation } from "react-i18next";

const Contact = () => {
  const { t } = useTranslation("common");
  return (
    <div className={contactStyle.contact}>
      <div className={contactStyle.wrapper}>
        {/* <div className={contactStyle.social}>Contactez @iichigaan</div> */}
        <div>
          <a
            className={contactStyle.iichigaan}
            href="mailto:nicolas.lorofi@yahoo.fr"
          >
            @iichigaan
          </a>
        </div>
        {/* <div className={contactStyle.mail}>
          <input type="email" placeholder={t("contactMailInput")} />
          <button>{t("contactMailButton")}</button>
        </div> */}
        <div className={contactStyle.social}>
          {/* <FacebookIcon style={{ fill: "white" }} /> */}
          <Link href="https://www.instagram.com/iichigaan/">
            <InstagramIcon style={{ fill: "white" }} />
            {/* Instagram */}
          </Link>
          <Link href="https://www.etsy.com/fr/shop/IICHIGAANBoutique?ref=hpsh">
            {/* Etsy */}
            <Image
              src="/etsy.png"
              alt="logo"
              style={{ objectFit: "cover", borderRadius: "50%" }}
              width={32}
              height={32}
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Contact;
