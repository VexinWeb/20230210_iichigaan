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
    `${process.env.NEXT_CLIENT_API_URL}/products?locale=${locale}&populate=*&[filters][type
    ][$eq]=featured`,
    {
      headers: {
        Authorization: "Bearer " + process.env.NEXT_CLIENT_API_TOKEN,
      },
    }
  );
  const res2 = await fetch(
    `${process.env.NEXT_CLIENT_API_URL}/products?locale=${locale}&populate=*&[filters][type][$eq]=trending`,
    {
      headers: {
        Authorization: "Bearer " + process.env.NEXT_CLIENT_API_TOKEN,
      },
    }
  );
  const featuredProducts = await res1.json();
  const trendingProducts = await res2.json();

  //Response type de featuredProducts:
  const responseFeaturedProducts = {
    data: [
      {
        id: 1,
        attributes: {
          title: 'Porte-clés Touareg "TCHEDIT"',
          price: 45,
          isNew: true,
          createdAt: "2023-03-09T09:30:06.517Z",
          updatedAt: "2023-04-04T13:19:05.453Z",
          publishedAt: "2023-03-09T09:30:22.930Z",
          type: "featured",
          locale: "fr",
          description:
            "Ce porte clés a été réalisé en véritable cuir de chèvre dans la pure tradition artisanale touareg.\n\nVéritable cuir de chèvre teint à la main.",
        },
      },
      {
        id: 7,
        attributes: {
          title: 'Kimono court "FLEURS DE MARIAGE"',
          price: 70,
          isNew: false,
          createdAt: "2023-03-10T09:59:37.821Z",
          updatedAt: "2023-04-06T12:51:03.052Z",
          publishedAt: "2023-03-10T09:59:40.637Z",
          type: "featured",
          locale: "fr",
          description:
            "Ce kimono court a été réalisé en tissu wax.\n\nCeinture en wax fournie avec le kimono.",
        },
      },
    ],
    meta: {
      pagination: {
        page: 1,
        pageSize: 25,
        pageCount: 1,
        total: 3,
      },
    },
  };
  return {
    props: {
      featuredProducts,
      trendingProducts,
      ...(await serverSideTranslations(locale, ["common"])),
    },
    revalidate: 60,
  };
}
