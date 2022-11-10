import React from "react";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage: `url("https://i.ibb.co/B24VNKH/modern-dental-office-10069-762.webp")`,
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-start text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">
            Find Your Perfect Dentist Anytime, Anywhere
          </h1>
          <p className="mb-5">
            Prof.Dr B.A.K Azad is one of the most renowned Dentist in
            Bangladesh. He passed Bachelor of Dental surgery (BDS) from Dhaka
            Dental College in 1984. Then he took Diploma in Dental Surgery (DDS)
            from the University of Dhaka in 1988. After that Dr. Azad completed
            his MCPS from Bangladesh College of Physicians and Surgeons.
          </p>
          <Link to="/services" className="btn btn-primary">
            See Services
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;
