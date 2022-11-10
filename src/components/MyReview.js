import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthProvider";
import MyReviewCard from "./MyReviewCard";
import { toast } from "react-toastify";
import useTitle from "../hooks/useTitle";
import { Link } from "react-router-dom";
const MyReview = () => {
  useTitle("My-Reviews");
  const { user, logOut } = useContext(AuthContext);
  const [myReviews, setMyReviews] = useState([]);
  useEffect(() => {
    fetch(
      `https://assignment-eleven-server-kappa.vercel.app/reviews?email=${user?.email}`,
      {
        headers: {
          authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    )
      .then((res) => res.json())
      .then((data) => setMyReviews(data));
  }, [user?.email]);
  const handleDelete = (id) => {
    const proceed = window.confirm(
      "Are you sure, you want to delete this review?"
    );
    if (proceed) {
      fetch(
        `https://assignment-eleven-server-kappa.vercel.app/review/delete/${id}`,
        {
          method: "DELETE",
        }
      )
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.deletedCount > 0) {
            toast.success("Review has been deleted successfully", {
              autoClose: 5000,
            });
            const remaining = myReviews.filter((revw) => revw._id !== id);
            setMyReviews(remaining);
          }
        });
    }
  };
  return (
    <div className="overflow-x-auto container mt-6">
      {(myReviews.message === "Unauthorized access" && (
        <p className="font-semiboldbold text-xl text-center">
          {" "}
          Unauthorized access Please{" "}
          <Link className="text-primary font-bold" to="/login">
            login
          </Link>{" "}
        </p>
      )) || (
        <>
          {" "}
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
        </>
      )}
    </div>
  );
};

export default MyReview;
