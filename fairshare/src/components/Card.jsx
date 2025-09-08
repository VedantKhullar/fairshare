import React from "react";

const Card = ({ title, children, className = "" }) => {
  return (
    <div className={`bg-white shadow rounded-2xl p-6 ${className}`}>
      {title && (
        <h2 className="text-lg font-semibold text-gray-800 mb-4">{title}</h2>
      )}
      {children}
    </div>
  );
};

export default Card;
