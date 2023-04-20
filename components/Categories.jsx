import React from "react";
import categoriesStyle from "../styles/Categories.module.scss";
import Link from "next/link";
import { useTranslation } from "next-i18next";

const Categories = () => {
  const { t } = useTranslation("common");
  return (
    <div className={categoriesStyle.categories}>
      <div className={categoriesStyle.column}>
        <div className={categoriesStyle.row}>
          <div className={categoriesStyle.clothes}>
            <button>
              {/*<Link className={categoriesStyle.link} href="/products/1">*/}
              <Link className={categoriesStyle.link} href="/products/[id]" as="/products/clothes">
                {t("indexLineCategories1")}
              </Link>
            </button>
          </div>
        </div>
        <div className={categoriesStyle.row}>
          <div className={categoriesStyle.accessories}>
            <button>
              <Link className={categoriesStyle.link} href="/products/[id]" as="/products/accessories">
                {t("indexLineCategories2")}
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
                    {t("indexLineCategories3")}
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
                    {t("indexLineCategories4")}
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
