import React, { useContext, useEffect, useState } from "react";

const Review = ({ allreview }) => {
  const { serviceName, userName, photoURL, reviewtext } = allreview;

  return (
    <div className="card bg-primary text-primary-content">
      <div className="card-body">
        <div className="flex gap-4">
          <div className="avatar">
            <div className="w-12 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
              <img src={photoURL} />
            </div>
          </div>
          <h2 className="card-title">{userName}</h2>
        </div>

        <p>{reviewtext}</p>
        <div className="card-actions justify-end"></div>
      </div>
    </div>
  );
};

export default Review;
