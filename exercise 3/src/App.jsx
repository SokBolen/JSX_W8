import React from "react";

import OrderCard from "./components/OrderCard";
import CheckoutButton from "./components/CheckoutButton";

const ORDERS = [
  {
    product: "Banana",
    price: 54.6,
    quantity: 3,
  },
  {
    product: "Computer",
    price: 100.5,
    quantity: 4,
  },
  {
    product: "Table",
    price: 1070,
    quantity: 3,
  },
];

export default function App() {
  const [orders, setOrders] = React.useState(ORDERS);

  function changeQuantity(index, newQuantity) {
    const newOrders = orders.map((order, i) => {
      return i === index ? { ...order, quantity: newQuantity} : order});
      setOrders(newOrders);
    
  } 

  const totalPrice = orders.reduce((total, order) => total + order.price * order.quantity, 0);

  return (
    <>
      <header>
        <h1>Your orders</h1>
      </header>

      <div className="order-list">
        {orders.map((order, index) => (
          <OrderCard
            key={index}
            product={order.product}
            price={order.price}
            quantity={order.quantity}
            onIncrease={() => changeQuantity(index, order.quantity + 1)}
            onDecrease={() => changeQuantity(index, Math.max(0, order.quantity - 1))}
          />

        ))}
       
      </div>

      <CheckoutButton total={totalPrice}></CheckoutButton>
    </>
  );
}
