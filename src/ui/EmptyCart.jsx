import React from "react";
import Button from "./Button";
import { Link } from "react-router";

const EmptyCart = () => {
  return (
    <div>
      <div className="py-24 text-center">
        <h1 className="mb-3 text-7xl font-thin text-gray-900">404</h1>
        <p className="mb-8 text-xl  text-gray-900 md:text-2xl">
          No route matches URL "/cart"
        </p>
        <Link to="/">
          <Button label="Go to Homepage" />
        </Link>
      </div>
    </div>
  );
};

export default EmptyCart;
