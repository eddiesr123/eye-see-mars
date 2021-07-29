import React from "react";

const Card = ({ photo, handleClickOpen }) => {
  return (
    <div className="tc dib ma2 grow bw2">
      <img
        onClick={() => handleClickOpen(photo)}
        style={{
          width: "400px",
          height: "400px",
          objectFit: "contain",
          cursor: "pointer",
        }}
        src={photo.img_src}
        alt={photo.img_src}
      />
    </div>
  );
};

export default Card;
