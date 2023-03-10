import React from "react";
import categoriesStyle from "../styles/Categories.module.scss";
import Image from "next/Image";
import data from "./data.json";
import Link from "next/link";

const Categories = () => {
  //   console.log(data[0].img);
  return (
    <div className={categoriesStyle.categories}>
      <div className={categoriesStyle.column}>
        <div className={categoriesStyle.row}>
          <Image
            src={data[0].img}
            alt="row1"
            style={{ objectFit: "cover" }}
            width={4000}
            height={3000}
          />
          <button>
            <Link className={categoriesStyle.link} href="/products/a">
              Clothes
            </Link>
          </button>
        </div>
        <div className={categoriesStyle.row}>
          <Image
            src={data[1].img}
            alt="row2"
            style={{ objectFit: "cover" }}
            width={4000}
            height={3000}
          />
          <button>
            <Link className={categoriesStyle.link} href="/products/b">
              Accessories
            </Link>
          </button>
        </div>
      </div>
      <div className={categoriesStyle.column}>
        <div className={categoriesStyle.row}>
          <Image
            src={data[2].img}
            alt="row3"
            style={{ objectFit: "cover" }}
            width={4000}
            height={3000}
          />
          <button>
            <Link className={categoriesStyle.link} href="/products/c">
              New products
            </Link>
          </button>
        </div>
      </div>
      <div className={(categoriesStyle.columnLarge, categoriesStyle.column)}>
        <div className={categoriesStyle.row}>
          <div className={categoriesStyle.column}>
            <div className={categoriesStyle.row}>
              <Image
                src={data[3].img}
                alt="row4"
                style={{ objectFit: "cover" }}
                width={4000}
                height={3000}
              />
              <button>
                <Link className={categoriesStyle.link} href="/products/d">
                  Popular
                </Link>
              </button>
            </div>
          </div>
          <div className={categoriesStyle.column}>
            <div className={categoriesStyle.row}>
              <Image
                src={data[4].img}
                alt="row5"
                style={{ objectFit: "cover" }}
                width={4000}
                height={3000}
              />
              <button>
                <Link className={categoriesStyle.link} href="/Products/e">
                  Featured
                </Link>
              </button>
            </div>
          </div>
        </div>
        <div className={categoriesStyle.row}>
          <Image
            src={data[5].img}
            alt="row6"
            style={{ objectFit: "cover" }}
            width={4000}
            height={3000}
          />
          <button>
            <Link className={categoriesStyle.link} href="/products/f">
              Special offers
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Categories;
