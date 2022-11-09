import React from "react";
import { useLoaderData } from "react-router-dom";
import { toast } from "react-toastify";
const EditReview = () => {
  const { _id, reviewtext } = useLoaderData();
  const handleReviewUpdate = (event) => {
    event.preventDefault();
    const updateInfo = {
      reviewtext: event.target.reviewtext.value,
    };
    console.log(updateInfo);
    fetch(`http://localhost:5000/review/update/${_id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updateInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          toast.success("Review has been successfully updated", {
            autoClose: 5000,
          });
        } else {
          toast.err(data.error);
        }
      })
      .catch((err) => toast.error(err.message));
  };
  return (
    <form onSubmit={handleReviewUpdate} className="card-body">
      <div className="form-control w-96">
        <textarea
          name="reviewtext"
          defaultValue={reviewtext}
          className="textarea textarea-secondary focus:border-0"
          placeholder="Type your review message"
        ></textarea>
      </div>
      <div className="form-control mt-6">
        <button className="btn btn-primary w-32">Add Review</button>
      </div>
    </form>
  );
};

export default EditReview;
