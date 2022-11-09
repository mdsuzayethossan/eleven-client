import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthProvider";

const Review = () => {
  const { user, logOut } = useContext(AuthContext);
  const [myReviews, setMyReviews] = useState();
  useEffect(() => {
    fetch(`http://localhost:5000/reviews?email=${user?.email}`, {
      headers: {
        authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
      .then((res) => {
        if (res.status === 401 || res.status === 403) {
          logOut();
        }
        return res.json();
      })
      .then((data) => setMyReviews(data));
  }, [user?.email, logOut]);
  return (
    <div className="card w-96 bg-primary text-primary-content">
      <div className="card-body">
        <div className="flex gap-4">
          <div className="avatar">
            <div className="w-12 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
              <img src="https://placeimg.com/192/192/people" />
            </div>
          </div>
          <h2 className="card-title">Card title!</h2>
        </div>

        <p>If a dog chews shoes whose shoes does he choose?</p>
        <div className="card-actions justify-end"></div>
      </div>
    </div>
  );
};

export default Review;
