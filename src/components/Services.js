import React from "react";
import { useLoaderData } from "react-router-dom";
import ServicesCard from "./ServicesCard";

const Services = () => {
  const servicesLoad = useLoaderData();
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 container my-20">
      {servicesLoad?.map((service) => (
        <ServicesCard key={service._id} services={service}></ServicesCard>
      ))}
    </div>
  );
};

export default Services;
