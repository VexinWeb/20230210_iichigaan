import React from "react";
import categoriesStyle from "../styles/Categories.module.scss";
// import data from "./data.json";
import Link from "next/link";
import { border } from "@mui/system";

const Categories = () => {
  return (
    <div className={categoriesStyle.categories}>
      <div className={categoriesStyle.column}>
        <div className={categoriesStyle.row}>
          <div className={categoriesStyle.clothes}>
            <button>
              {/*<Link className={categoriesStyle.link} href="/products/1">*/}
              <Link className={categoriesStyle.link} href="/products/[id]" as="/products/clothes">
                Clothes
              </Link>
            </button>
          </div>
        </div>
        <div className={categoriesStyle.row}>
          <div className={categoriesStyle.accessories}>
            <button>
              <Link className={categoriesStyle.link} href="/products/[id]" as="/products/accessories">
                Accessories
              </Link>
            </button>
          </div>
        </div>
      </div>
      <div className={(categoriesStyle.columnLarge, categoriesStyle.column)}>
        <div className={categoriesStyle.row}>
          <div className={categoriesStyle.column}>
            <div className={categoriesStyle.row}>
              <div className={categoriesStyle.featured}>
                <button>
                  <Link className={categoriesStyle.link} href="#featured">
                    Featured
                  </Link>
                </button>
              </div>
            </div>
          </div>
          <div className={categoriesStyle.column}>
            <div className={categoriesStyle.row}>
              <div className={categoriesStyle.trending}>
                <button>
                  <Link className={categoriesStyle.link} href="#trending">
                    Trending
                  </Link>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categories;
