import React from "react";

const Card = ({ photo }) => {
  return (
    <div className="tc dib ma2 grow bw2 shadow-5">
      <img src={photo.img_src} alt={photo.img_src} />
    </div>
  );
};

export default Card;
