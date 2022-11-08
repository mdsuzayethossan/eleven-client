import React from "react";
import AboutMe from "../components/AboutMe";
import Banner from "../components/Banner";
import Care from "../components/Care";
import Footer from "../components/Footer";
import Services from "../components/Services";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Services></Services>
      <AboutMe></AboutMe>
      <Care></Care>
      <Footer></Footer>
    </div>
  );
};

export default Home;
