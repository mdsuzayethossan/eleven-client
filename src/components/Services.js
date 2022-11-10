import React, { useContext } from "react";
import { flushSync } from "react-dom";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../context/AuthProvider";
import useTitle from "../hooks/useTitle";
import ServicesCard from "./ServicesCard";
const Services = () => {
  const { loading, setLoading } = useContext(AuthContext);
  setLoading(true);
  useTitle("Services");
  const servicesLoad = useLoaderData();
  if (loading) {
    return (
      <div className="text-center">
        <progress className="progress w-56"></progress>
      </div>
    );
  }
  setLoading(false);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 container my-20">
      {servicesLoad?.map((service) => (
        <ServicesCard key={service._id} services={service}></ServicesCard>
      ))}
    </div>
  );
};

export default Services;
