import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";
const ServicesCard = ({ services }) => {
  const { _id, name, description, price, image } = services;
  return (
    <div className="card bg-base-100 shadow-xl">
      <figure>
        <PhotoProvider>
          <PhotoView src={image}>
            <img
              src={image}
              className="h-[250px] w-full cursor-pointer"
              alt="Shoes"
            />
          </PhotoView>
        </PhotoProvider>
      </figure>

      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>
          {description.length > 100
            ? `${description.slice(0, 99)}...`
            : description}
        </p>
        <div className="rating rating-sm gap-1">
          <input
            type="radio"
            name="rating-2"
            className="mask mask-star-2 bg-orange-400"
          />
          <input
            type="radio"
            name="rating-2"
            className="mask mask-star-2 bg-orange-400"
            checked
          />
          <input
            type="radio"
            name="rating-2"
            checked
            className="mask mask-star-2 bg-orange-400"
          />
          <input
            type="radio"
            name="rating-2"
            checked
            className="mask mask-star-2 bg-orange-400"
          />
          <input
            type="radio"
            name="rating-2"
            checked
            className="mask mask-star-2 bg-orange-400"
          />
        </div>
        <h3 className="font-bold text-primary">${price}</h3>
        <Link to={`/services/${_id}`} className="btn btn-primary mt-3">
          View details
        </Link>
      </div>
    </div>
  );
};

export default ServicesCard;
