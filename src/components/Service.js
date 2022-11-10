import React, { useEffect, useState, useContext } from "react";
import ServicesCard from "./ServicesCard";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthProvider";
const Service = () => {
  const [serviceload, setServiceLoad] = useState([]);
  const { loading, setLoading } = useContext(AuthContext);
  useEffect(() => {
    const fetchService = () => {
      fetch("https://assignment-eleven-server-kappa.vercel.app/service")
        .then((res) => res.json())
        .then((data) => {
          setServiceLoad(data);
          setLoading(false);
        });
    };
    fetchService();
  }, []);
  if (loading) {
    return (
      <div className="text-center">
        <progress className="progress w-56"></progress>
      </div>
    );
  }
  return (
    <>
      <h2 className="font-semibold text-4xl text-center my-7">Services</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 container mt-20">
        {serviceload?.map((service) => (
          <ServicesCard key={service._id} services={service}></ServicesCard>
        ))}
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
