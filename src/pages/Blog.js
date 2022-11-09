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
      <div>
        <div
          tabIndex={0}
          className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box"
        >
          <div className="collapse-title bg-[#E2F7FA] text-xl font-medium">
            What is the difference between javascript and Node JS?
          </div>
          <div className="collapse-content bg-primary text-primary-content group-focus:bg-secondary group-focus:text-secondary-content">
            <p>
              1. NodeJS : NodeJS is a cross-platform and opensource Javascript
              runtime environment that allows the javascript to be run on the
              server-side. Nodejs allows Javascript code to run outside the
              browser. Nodejs comes with a lot of modules and mostly used in web
              development. <br />
              2. JavaScript : Javascript is a Scripting language. It is mostly
              abbreviated as JS. It can be said that Javascript is the updated
              version of the ECMA script. Javascript is a high-level programming
              language that uses the concept of Oops but it is based on
              prototype inheritance.
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
            How does NodeJS handle multiple requests at the same time?
          </div>
          <div className="collapse-content bg-primary text-primary-content group-focus:bg-secondary group-focus:text-secondary-content">
            <p>
              We know NodeJS application is single-threaded. Say, if processing
              involves request A that takes 10 seconds, it does not mean that a
              request which comes after this request needs to wait 10 seconds to
              start processing because NodeJS event loops are only
              single-threaded. The entire NodeJS architecture is not
              single-threaded.
              <br />{" "}
              <span className="font-bold">
                How NodeJS handle multiple client requests?
              </span>
              <br />
              NodeJS receives multiple client requests and places them into
              EventQueue. NodeJS is built with the concept of event-driven
              architecture. NodeJS has its own EventLoop which is an infinite
              loop that receives requests and processes them. EventLoop is the
              listener for the EventQueue. If NodeJS can process the request
              without I/O blocking then the event loop would itself process the
              request and sends the response back to the client by itself. But,
              it is possible to process multiple requests parallelly using the
              NodeJS cluster module or worker_threads module.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
