import React from "react";
import { reviews } from "../data/reviews";
import "./Review.css";
const Review = () => {
  return (
    <div className="reviews">
      {reviews.map((review) => {
        return (
          <div className="review">
            <p>{review.desc}</p>
            <div className="author">
              <img src={review.img} alt="author" />
              <span>{review.author}</span>
              <span>{review.pos}</span>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Review;
