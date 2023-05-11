import React, { useState } from "react";
import navbarStyle from "../styles/Navbar.module.scss";
import Image from "next/image";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Link from "next/link";
import Cart from "./Cart";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import { useDispatch } from "react-redux";
import { resetCart } from "@/redux/cartReducer";

const Navbar = () => {
  const { t } = useTranslation("common");
  const products = useSelector((state) => state.cart.products);
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const { asPath } = router;
  const dispatch = useDispatch();

  return (
    <div className={navbarStyle.navbar}>
      <div className={navbarStyle.wrapper}>
        <div className={navbarStyle.left}>
          {asPath === "/" && (
            <div
              className={navbarStyle.item}
              onClick={() => dispatch(resetCart())}
            >
              <Link href={asPath} locale="en">
                <div className={navbarStyle.language}>
                  <Image
                    src="/english.png"
                    alt="English flag"
                    style={{
                      objectFit: "cover",
                    }}
                    width={24}
                    height={18}
                  />
                </div>
              </Link>
              <Link href={asPath} locale="fr">
                <div className={navbarStyle.language}>
                  <Image
                    src="/french.png"
                    alt="French flag"
                    style={{
                      objectFit: "cover",
                    }}
                    width={24}
                    height={18}
                  />
                </div>
              </Link>
            </div>
          )}
        </div>
        <div className={navbarStyle.center}>
          {/* <Link href="/" className={router.asPath == "/" ? "active" : ""}> */}
          <Link href="/">
            <Image
              src="/logo.png"
              alt="logo"
              // style={{ objectFit: "cover", borderRadius: "50%" }}
              style={{ objectFit: "cover" }}
              // width={60}
              width={150}
              height={100}
            />
            {/* <div className={navbarStyle.centerText}>iichigaan</div> */}
          </Link>
        </div>
        <div className={navbarStyle.right}>
          <div className={navbarStyle.rightMenu}>
            <div className={navbarStyle.item}>
              <Link
                href="/products/[id]"
                as="/products/clothes"
                // className={router.asPath == "/products/clothes" ? "active" : ""}
              >
                {t("navbarCategory1")}
              </Link>
            </div>
            <div className={navbarStyle.item}>
              <Link
                href="/products/[id]"
                as="/products/accessories"
                // className={
                //   router.asPath == "/products/accessories" ? "active" : ""
                // }
              >
                {t("navbarCategory2")}
              </Link>
            </div>
          </div>
          <div className={navbarStyle.icons}>
            <div
              className={navbarStyle.cartIcon}
              onClick={() => setOpen(!open)}
            >
              <ShoppingCartIcon
                style={{
                  fill: "black",
                }}
              />
              <span>{products.length}</span>
            </div>
          </div>
        </div>
      </div>
      {open && <Cart />}
    </div>
  );
};

export default Navbar;
