import React from "react";

const PracticeCard = ({ way }) => {
  return (
    <div className="card bg-base-100 shadow-xl">
      <div className="card-body">
        <h2 className="card-title">{way.title}</h2>
        <p>{way.description.split(" ", 50).join(" ")}</p>
        <div className="card-actions">
          <button className="btn btn-sm">Read More</button>
        </div>
      </div>
    </div>
  );
};

export default PracticeCard;
