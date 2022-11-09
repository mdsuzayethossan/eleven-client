import React from "react";

const Blog = () => {
  return (
    <div className="container pt-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
      <div>
        <div
          tabIndex={0}
          className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box"
        >
          <div className="collapse-title text-xl font-medium">
            What is `cors`?
          </div>
          <div className="collapse-content bg-primary text-primary-content group-focus:bg-secondary group-focus:text-secondary-content">
            <p>
              CORS is a node. js package for providing a Connect/Express
              middleware that can be used to enable CORS with various options.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
