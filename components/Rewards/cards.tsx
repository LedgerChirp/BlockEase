import React, { useState } from "react";

let Card = (props: any) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };
  return (
    <div
      className={`relative w-56 h-56 m-10 transform transition-transform ${
        isFlipped ? "rotate-y-180" : ""
      }`}
      onClick={handleClick}
    >
      <div className="front absolute inset-0 bg-white rounded-lg shadow-lg flex flex-col justify-center items-center">
        <h2 className="text-2xl font-bold mb-4">{props.title}</h2>
        <img className="w-40 h-40 object-contain" src="/" alt={props.title} />
      </div>
      <div className="back absolute inset-0 bg-gray-200 rounded-lg shadow-lg p-6 transform rotate-y-180">
        <p className="text-lg">{props.description}</p>
      </div>
    </div>
  );
};

export default Card;
