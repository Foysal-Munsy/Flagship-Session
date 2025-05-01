import React, { useState } from "react";
import EmptyCart from "../ui/EmptyCart";

const Cart = () => {
  const [displayPhones, setDisplayPhones] = useState([]);
  if (displayPhones.length === 0) return <EmptyCart></EmptyCart>;
  return <div>This is Cart Page.</div>;
};

export default Cart;
