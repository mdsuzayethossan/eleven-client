import React from "react";
import Card from "./Card";
import { Link } from "react-router-dom";
const Service = () => {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 container mt-20">
        <Card></Card>
      </div>
      <div className="w-full text-center">
        <Link
          to="/services"
          className="btn btn-sm mt-10 w-36 bg-primary text-white border-0"
        >
          See all
        </Link>
      </div>
    </>
  );
};

export default Service;
