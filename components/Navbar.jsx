import React, { useState } from "react";
import navbarStyle from "../styles/Navbar.module.scss";
import Image from "next/Image";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import SearchIcon from "@mui/icons-material/Search";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { styled } from "@mui/material/styles";
import Link from "next/link";
import Cart from "./Cart";

const RedSearchIcon = styled(SearchIcon)({
  color: "red",
});

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className={navbarStyle.navbar}>
      <div className={navbarStyle.wrapper}>
        <div className={navbarStyle.left}>
          <div className={navbarStyle.item}>
            <Image
              src="/french.png"
              alt="French flag"
              style={{ objectFit: "cover" }}
              width={20}
              height={15}
            />
            <KeyboardArrowDownIcon />
          </div>
          <div className={navbarStyle.item}>
            <Link href="/products/a">Clothes</Link>
          </div>
          <div className={navbarStyle.item}>
            <Link href="/products/b">Accessories</Link>
          </div>
          <div className={navbarStyle.item}>
            <Link href="/products/c">New products</Link>
          </div>
        </div>
        <div className={navbarStyle.center}>
          <Link href="/">iichigaan</Link>
        </div>
        <div className={navbarStyle.right}>
          <div className={navbarStyle.item}>
            <Link href="/">Homepage</Link>
          </div>
          <div className={navbarStyle.item}>
            <Link href="/">About</Link>
          </div>
          <div className={navbarStyle.item}>
            <Link href="/">Contact</Link>
          </div>
          <div className={navbarStyle.icons}>
            <SearchIcon
              className={navbarStyle.rightIcon}
              style={{ fill: "gray" }}
            />
            <PersonOutlineIcon style={{ fill: "gray" }} />
            <FavoriteBorderOutlinedIcon style={{ fill: "gray" }} />
            <div
              className={navbarStyle.cartIcon}
              onClick={() => setOpen(!open)}
            >
              <ShoppingCartIcon style={{ fill: "gray" }} />
              <span>0</span>
            </div>
          </div>
        </div>
      </div>
      {open && <Cart />}
    </div>
  );
};

export default Navbar;
