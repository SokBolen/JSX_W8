import React from "react";

export default function OrderCard({quantity, product, price, onIncrease, onDecrease}) {
    
  return (
    <div className="order">
      <div>
        <h4>{product}</h4>
        <small>{price}$</small>
      </div>

      <div className="order-quantity">
        <div className="order-button" onClick={onDecrease} style={{ backgroundColor: quantity === 0 ? "#bfbfbf" : "ff4d4f"}}>
          -
        </div>
        <h4>{quantity}</h4>
        <div className="order-button" onClick={onIncrease} style={{ backgroundColor: "ff4d4f" }}>
          +
        </div>
      </div>
    </div>
  );
}
