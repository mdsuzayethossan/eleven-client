import React from "react";

const AddService = () => {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
        <div className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Service name</span>
            </label>
            <input
              type="text"
              placeholder="name"
              name="name"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Service image url</span>
            </label>
            <input
              type="text"
              placeholder="image"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Price</span>
            </label>
            <input
              type="text"
              placeholder="Price"
              name="price"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <textarea
              className="textarea textarea-bordered"
              placeholder="Type your review message"
            ></textarea>
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary">Add service</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddService;
