import React from "react";
import { Link } from "react-router";
import Button from "../ui/Button";

const PhoneCard = ({ phone }) => {
  const { name, image, description, id } = phone || {};
  return (
    <div className="card bg-base-100 shadow-sm">
      <figure>
        <img src={image} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>{description}</p>
        <div className="card-actions justify-end">
          <Link to={`/phone-details/${id}`}>
            <Button label={"View Details"}></Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PhoneCard;
