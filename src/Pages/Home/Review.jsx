import React from "react";

const Review = ({ review }) => {
  return (
    <div>
      <div className="card lg:max-w-lg bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">{review.name}</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className="flex items-center">
            <div className="avatar">
              <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 mr-5">
                <img src={review.img} alt="" />
              </div>
            </div>
            <div>
              <h4 className="text-xl">{review.location}</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
