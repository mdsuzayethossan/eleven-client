import React from "react";
import { toast } from "react-toastify";
const AddService = () => {
  const handleAddService = (event) => {
    event.preventDefault();
    const form = event.target;
    const serviceField = {
      name: form.name.value,
      image: form.image.value,
      price: form.price.value,
      description: form.description.value,
    };
    fetch("http://localhost:5000/add-service", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(serviceField),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.acknowledged) {
          toast("Service has been successfully added", { autoClose: 5000 });
          form.reset();
        }
      })
      .catch((er) => console.error(er));
  };
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
        <form onSubmit={handleAddService} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Service name</span>
            </label>
            <input
              type="text"
              placeholder="name"
              required
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
              placeholder="Image url"
              required
              name="image"
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
              required
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <textarea
              name="description"
              className="textarea textarea-bordered"
              required
              placeholder="Type your review message"
            ></textarea>
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary">Add service</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddService;
