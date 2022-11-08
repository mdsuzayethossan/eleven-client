import React from "react";
import Card from "./ServicesCard";
import { Link, useLoaderData } from "react-router-dom";
import Review from "./Review";
const ServiceDetails = () => {
  const singleDetails = useLoaderData();
  const { _id, name, description, price, image } = singleDetails;
  return (
    <>
      <div className="container mt-20 max-w-5xl mx-auto mb-40">
        <div className="card bg-base-100">
          <figure>
            <img src={image} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{name}</h2>
            <p>{description}</p>
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
          </div>
        </div>
        <div className="reviews-container">
          <h3 className="text-primary text-2xl font-bold mt-8">Reviews</h3>
          <div className="card-body">
            <div className="form-control w-96">
              <textarea
                className="textarea textarea-secondary focus:border-0"
                placeholder="Type your review message"
              ></textarea>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary w-32">Add Review</button>
            </div>
          </div>
          <div className="reviews">
            <Review></Review>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServiceDetails;
