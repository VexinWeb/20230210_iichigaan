import React, { useState } from "react";
import navbarStyle from "../styles/Navbar.module.scss";
import Image from "next/image";
// import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import SearchIcon from "@mui/icons-material/Search";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
// import { styled } from "@mui/material/styles";
import Link from "next/link";
import Cart from "./Cart";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";

// const RedSearchIcon = styled(SearchIcon)({
//   color: "red",
// });

const Navbar = () => {
  const products = useSelector((state) => state.cart.products);
  const [open, setOpen] = useState(false);

  const router = useRouter();
  console.log(router);

  return (
    <div className={navbarStyle.navbar}>
      <div className={navbarStyle.wrapper}>
        <div className={navbarStyle.left}>
          <div className={navbarStyle.item}>
            <div className={navbarStyle.language}>
              <Image
                src="/english.png"
                alt="French flag"
                style={{
                  objectFit: "cover",
                }}
                width={25}
                height={18}
              />
            </div>
            <div className={navbarStyle.language}>
              <Image
                src="/french.png"
                alt="French flag"
                style={{
                  objectFit: "cover",
                }}
                width={25}
                height={18}
              />
            </div>
          </div>
        </div>
        <div className={navbarStyle.center}>
          <Link href="/" className={router.asPath == "/" ? "active" : ""}>
            <Image
              src="/logo.png"
              alt="logo"
              style={{ objectFit: "cover", borderRadius: "50%" }}
              width={50}
              height={50}
            />
            <div className={navbarStyle.centerText}>iichigaan</div>
          </Link>
        </div>
        <div className={navbarStyle.right}>
          <div className={navbarStyle.rightMenu}>
            <div className={navbarStyle.item}>
              <Link
                href="/products/[id]" as="/products/clothes"
                className={router.asPath == "/products/clothes" ? "active" : ""}
              >
                Clothes
              </Link>
            </div>
            <div className={navbarStyle.item}>
              <Link
                href="/products/[id]" as="/products/accessories"
                className={router.asPath == "/products/accessories" ? "active" : ""}
              >
                Accessories
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
                  fill: "white",
                  // fontSize: "25px",
                  // width: "25px",
                  // height: "25px",
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
