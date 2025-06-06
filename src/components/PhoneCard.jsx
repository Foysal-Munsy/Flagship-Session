import React from "react";
import { Link } from "react-router";
import Button from "../ui/Button";
import { MdDeleteForever } from "react-icons/md";

const PhoneCard = ({ phone, deletable, handleDelete }) => {
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
          {deletable && (
            <div
              onClick={() => handleDelete(id)}
              className="bg-gray-900 p-3 ml-5 rounded-full hover:bg-gray-300 group  cursor-pointer hover:scale-105 absolute -top-5 -right-5"
            >
              <MdDeleteForever
                size={20}
                className="text-gray-100 group-hover:text-gray-900"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PhoneCard;
