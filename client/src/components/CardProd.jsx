import React from "react";

const CardProd = ({ product }) => {
  return (
    <div className="card-prod">
      <img src={product.image} alt={product.name} />
      <div className="card-content">
        <h4>{product.name}</h4>
        <p>{product.price} DT</p>
        <button>See product</button>
      </div>
    </div>
  );
};

export default CardProd;
