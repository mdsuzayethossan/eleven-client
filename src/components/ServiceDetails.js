import React, { useContext, useEffect, useState } from "react";
import Card from "./ServicesCard";
import { Link, useLoaderData } from "react-router-dom";
import Review from "./Review";
import { toast } from "react-toastify";
import { AuthContext } from "../context/AuthProvider";
import useTitle from "../hooks/useTitle";
const ServiceDetails = () => {
  useTitle("Service Details");
  const [allreviews, setAllReviews] = useState([]);
  const { user } = useContext(AuthContext);
  const singleDetails = useLoaderData();
  const { _id, name, description, price, image } = singleDetails;
  //get reviews according to specific id
  useEffect(() => {
    fetch(`https://assignment-eleven-server-kappa.vercel.app/reviews/${_id}`)
      .then((res) => res.json())
      .then((data) => setAllReviews(data));
  }, []);
  const handleReviewAdd = (event) => {
    event.preventDefault();
    const reviewInfo = {
      serviceId: _id,
      serviceName: name,
      userName: user?.displayName,
      photoURL: user?.photoURL,
      email: user?.email,
      reviewtext: event.target.reviewtext.value,
    };
    //add review
    fetch("https://assignment-eleven-server-kappa.vercel.app/add-review", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(reviewInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          toast("Review has been successfully added", { autoClose: 5000 });
          event.target.reset();
          const newReview = [...allreviews, reviewInfo];
          setAllReviews(newReview);
        }
      })
      .catch((er) => console.error(er));
  };
  return (
    <>
      <div className="container mt-20 max-w-6xl mx-auto mb-40">
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
          {(user?.email && (
            <>
              <form onSubmit={handleReviewAdd} className="card-body">
                <div className="form-control w-96">
                  <textarea
                    name="reviewtext"
                    className="textarea textarea-secondary focus:border-0"
                    placeholder="Type your review message"
                  ></textarea>
                </div>
                <div className="form-control mt-6">
                  <button className="btn btn-primary w-32">Add Review</button>
                </div>
              </form>
            </>
          )) || (
            <p className="font-semiboldbold text-xl">
              Please{" "}
              <Link className="text-primary font-bold" to="/login">
                login
              </Link>{" "}
              to add a review.
            </p>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 container my-20">
            {allreviews.map((allreview) => (
              <Review key={allreview._id} allreview={allreview}></Review>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ServiceDetails;
