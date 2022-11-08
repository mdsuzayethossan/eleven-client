import React from "react";
import { useLoaderData } from "react-router-dom";
import Card from "./Card";

const Services = () => {
  const servicesLoad = useLoaderData();
  console.log(servicesLoad);
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 container my-20">
      {servicesLoad.map((service) => (
        <Card key={service._id} services={service}></Card>
      ))}
    </div>
  );
};

export default Services;
