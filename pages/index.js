// import Head from "next/head";
import homeStyle from "../styles/Home.module.scss";
import Slider from "@/components/Slider";
import FeaturedProducts from "@/components/FeaturedProducts";
import Categories from "@/components/Categories";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";

export default function Home({ featuredProducts, trendingProducts }) {
  const { t } = useTranslation("common");
  const featuredText = t("indexFeaturedDescription");
  const trendingText = t("indexTrendingDescription");
  const featuredTitle = t("indexFeaturedTitle");
    const trendingTitle = t("indexTrendingTitle");
  return (
    <div className={homeStyle.home}>
      <Slider />
      <FeaturedProducts
        type="featured"
        title={featuredTitle}
        text={featuredText}
        products={featuredProducts}
      />
      <Categories />
      <FeaturedProducts
        type="trending"
        title={trendingTitle}
        text={trendingText}
        products={trendingProducts}
      />
      {/* <Contact /> */}
    </div>
  );
}

export async function getStaticProps({ locale }) {
  const res1 = await fetch(
    `${process.env.NEXT_CLIENT_API_URL}/products?locale=${locale}&?populate=*&[filters][type][$eq]=featured`,
    {
      headers: {
        Authorization: "Bearer " + process.env.NEXT_CLIENT_API_TOKEN,
      },
    }
  );
  const res2 = await fetch(
    `${process.env.NEXT_CLIENT_API_URL}/products?locale=${locale}&?populate=*&[filters][type][$eq]=trending`,
    {
      headers: {
        Authorization: "Bearer " + process.env.NEXT_CLIENT_API_TOKEN,
      },
    }
  );
  const featuredProducts = await res1.json();
  const trendingProducts = await res2.json();
  return {
    props: {
      featuredProducts,
      trendingProducts,
      ...(await serverSideTranslations(locale, ["common"])),
    },
    revalidate: 60,
  };
}
