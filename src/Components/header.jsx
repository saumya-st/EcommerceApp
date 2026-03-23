import React from "react";
export default function Header({ cartCount, totalAmount }) {
  return (
    <div>
      <h2>Cart Items: {cartCount}</h2>
      {/* <h2>Total Amount: ₹{totalAmount}</h2> */}
    </div>
  );
}
