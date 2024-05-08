import React from "react";

const Card = ({ imgSrc, title, desc }) => {
  return (
    <>
      <div className="w-[150px] mx-auto bg-slate-500 rounded-3xl text-center my-3">
        <div>
          <h3 className="text-2xl text-bold">{title}</h3>
        </div>
        <div className="grid place-content-center">
          <img src={imgSrc} />
        </div>
        <div>
          <p>{desc}</p>
        </div>
      </div>
    </>
  );
};

export default Card;
