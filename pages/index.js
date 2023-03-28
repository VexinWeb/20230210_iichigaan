// import Head from "next/head";
import { Inter } from "@next/font/google";
import "@fontsource/roboto";
import homeStyle from "../styles/Home.module.scss";
import Slider from "@/components/Slider";
import FeaturedProducts from "@/components/FeaturedProducts";
import Categories from "@/components/Categories";
import Contact from "@/components/Contact";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className={homeStyle.home}>
      <Slider />
      <FeaturedProducts
        type="featured"
        text="Discover our featured products! Carefully selected items to meet your fashion needs. "
      />
      <Categories />
      <FeaturedProducts
        type="trending"
        text="Discover our selection of trendy products for this season!"
      />
      {/* <Contact /> */}
    </div>
  );
}
