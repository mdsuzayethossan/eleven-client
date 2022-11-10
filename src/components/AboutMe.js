import React from "react";

const AboutMe = () => {
  return (
    <>
      <h2 className="font-semibold text-4xl text-center my-16">
        Get dentist appointment
      </h2>
      <div className="hero mb-20">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">About</h1>
            <p className="py-6">
              Dedicated dentist with over ten years’ experience in the dental
              field. Passionate about educating patients on the importance of
              oral hygiene. Committed to providing the best patient care through
              communication and high-quality service. Experience in working with
              children, adolescents, and adults, as well as those who suffer
              from dental anxiety. Skilled team player who understands the
              importance of collaborative care for the best treatment outcomes
              for patients. Devoted to remaining up to date on the latest
              techniques to provide the highest level of patient care possible.
            </p>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Name"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="text"
                  placeholder="email"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">
                    Please briefly describe your concern
                  </span>
                </label>
                <input
                  type="text"
                  placeholder="Describe here"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">
                    When would you like to attend?{" "}
                  </span>
                </label>
                <input
                  type="datetime-local"
                  id="meeting-time"
                  name="meeting-time"
                  value="2018-06-12T19:30"
                  min="2018-06-07T00:00"
                  max="2018-06-14T00:00"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Appointment</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutMe;
