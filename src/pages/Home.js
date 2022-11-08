import React from "react";
import AboutMe from "../components/AboutMe";
import Banner from "../components/Banner";
import Care from "../components/Care";
import Footer from "../components/Footer";
import Service from "../components/Service";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Service></Service>
      <AboutMe></AboutMe>
      <Care></Care>
      <Footer></Footer>
    </div>
  );
};

export default Home;
