import React from "react";
import navbarStyle from "../styles/Navbar.module.scss";
import Image from "next/Image";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import SearchIcon from "@mui/icons-material/Search";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { styled } from "@mui/material/styles";
import Link from "next/link";

const RedSearchIcon = styled(SearchIcon)({
  color: "red",
});

const Navbar = () => {
  return (
    <div className={navbarStyle.navbar}>
      <div className={navbarStyle.wrapper}>
        <div className={navbarStyle.left}>
          <div className={navbarStyle.item}>
            <Image
              src="/english.png"
              alt="english flag"
              style={{ objectFit: "cover" }}
              width={20}
              height={15}
            />
            <KeyboardArrowDownIcon />
          </div>
          <div className={navbarStyle.item}>
            <Link href="products/1">Vêtements</Link>
          </div>
          <div className={navbarStyle.item}>
            <Link href="products/2">Accessoires</Link>
          </div>
          <div className={navbarStyle.item}>
            <Link href="products/3">Nouveautés</Link>
          </div>
        </div>
        <div className={navbarStyle.center}>
          <Link href="/">iichigaan</Link>
        </div>
        <div className={navbarStyle.right}>
          <div className={navbarStyle.item}>
            <Link href="/">Accueil</Link>
          </div>
          <div className={navbarStyle.item}>
            <Link href="/">A propos</Link>
          </div>
          <div className={navbarStyle.item}>
            <Link href="/">Contact</Link>
          </div>
          <div className={navbarStyle.icons}>
            <SearchIcon className={navbarStyle.rightIcon} />
            <PersonOutlineIcon />
            <FavoriteBorderOutlinedIcon />
            <div className={navbarStyle.cartIcon}>
              <ShoppingCartIcon />
              <span>0</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
