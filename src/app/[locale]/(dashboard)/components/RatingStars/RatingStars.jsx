"use client";
import ReactStars from "react-rating-stars-component";
import React from "react";

function RatingStars({ value }) {
  return (
    <div>
      <ReactStars
        count={5}
        size={22}
        activeColor="#FFAB00"
        value={value}
        edit={false}
      />
    </div>
  );
}

export default RatingStars;
