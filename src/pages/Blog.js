import React from "react";

const Blog = () => {
  return (
    <div className="container pt-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
      <div>
        <div
          tabIndex={0}
          className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box"
        >
          <div className="collapse-title bg-[#E2F7FA] text-xl font-medium">
            Difference between SQL and NoSQL
          </div>
          <div className="collapse-content bg-primary text-primary-content group-focus:bg-secondary group-focus:text-secondary-content">
            <p>
              SQL is the programming language used to interface with relational
              databases. (Relational databases model data as records in rows and
              tables with logical links between them). NoSQL is a class of DBMs
              that are non-relational and generally do not use SQL.
            </p>
          </div>
        </div>
      </div>
      <div>
        <div
          tabIndex={0}
          className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box"
        >
          <div className="collapse-title bg-[#E2F7FA] text-xl font-medium">
            What is JWT, and how does it work?
          </div>
          <div className="collapse-content bg-primary text-primary-content group-focus:bg-secondary group-focus:text-secondary-content">
            <p>
              JWT, or JSON Web Token, is an open standard used to share security
              information between two parties — a client and a server. Each JWT
              contains encoded JSON objects, including a set of claims. JWTs are
              signed using a cryptographic algorithm to ensure that the claims
              cannot be altered after the token is issued. Authentication server
              verifies the credentials and issues a jwt signed using either a
              secret salt or a private key. User's Client uses the JWT to access
              protected resources by passing the JWT in HTTP Authorization
              header. Resource server then verifies the authenticity of the
              token using the secret salt/ public key.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
