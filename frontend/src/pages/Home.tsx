import { FC } from "react";
import Hero from "../components/Hero";
import FAQ from "../components/FAQ";
import Categories from "../components/Categories";
import OurProducts from "../components/OurProducts";

const Home: FC = () => {
  return (
    <>
      <Hero />
      <Categories />
      <OurProducts />
      <FAQ />
    </>
  );
};

export default Home;
