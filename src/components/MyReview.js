import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthProvider";
import MyReviewCard from "./MyReviewCard";
const MyReview = () => {
  const { user, logOut } = useContext(AuthContext);
  const [myReviews, setMyReviews] = useState([]);
  console.log(myReviews);
  useEffect(() => {
    fetch(`http://localhost:5000/reviews?email=${user?.email}`, {
      headers: {
        authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => setMyReviews(data));
  }, [user?.email]);
  return (
    <div className="overflow-x-auto container mt-6">
      <table className="table table-zebra w-full">
        <thead>
          <tr>
            <th>SN</th>
            <th>Service name</th>
            <th>Review</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {myReviews.map((review, index) => (
            <MyReviewCard
              key={review._id}
              review={review}
              index={index}
            ></MyReviewCard>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyReview;
