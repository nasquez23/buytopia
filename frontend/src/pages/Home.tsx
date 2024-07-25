import { FC } from "react";
import Hero from "../components/Hero";
import FAQ from "../components/FAQ";
import Categories from "../components/Categories";

const Home: FC = () => {
  return (
    <>
      <Hero />
      <Categories />
      <FAQ />
    </>
  );
};

export default Home;
