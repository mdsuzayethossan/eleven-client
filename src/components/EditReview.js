import React from "react";

const EditReview = () => {
  const handleReviewUpdate = () => {};
  return (
    <form onSubmit={handleReviewUpdate} className="card-body">
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
  );
};

export default EditReview;
