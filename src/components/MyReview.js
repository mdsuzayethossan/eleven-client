import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthProvider";
import MyReviewCard from "./MyReviewCard";
import { toast } from "react-toastify";
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
  const handleDelete = (id) => {
    const proceed = window.confirm(
      "Are you sure, you want to delete this review?"
    );
    if (proceed) {
      fetch(`http://localhost:5000/review/delete/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.deletedCount > 0) {
            toast("Review has been deleted successfully", { autoClose: 5000 });
            const remaining = myReviews.filter((revw) => revw._id !== id);
            setMyReviews(remaining);
          }
        });
    }
  };
  return (
    <div className="overflow-x-auto container mt-6">
      {(myReviews.length < 1 && (
        <p className="text-primary text-2xl text-center font-bold flex items-center h-screen justify-center">
          No reviews were added
        </p>
      )) || (
        <>
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
                  handleDelete={handleDelete}
                ></MyReviewCard>
              ))}
            </tbody>
          </table>
        </>
      )}
    </div>
  );
};

export default MyReview;
