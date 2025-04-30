import React from "react";
import { useLoaderData, useParams } from "react-router";
import Button from "../ui/Button";
import { MdAddShoppingCart, MdBookmarkAdd } from "react-icons/md";
import { addFavorite } from "../utils";

const PhoneDetails = () => {
  const data = useLoaderData();
  // console.log(data);
  const { id } = useParams();
  // console.log(id);
  const singlePhone = data.find((phone) => phone.id === parseInt(id));
  console.log(singlePhone.name);
  const {
    name,
    brand,
    model,
    image,
    price,
    description,
    storage,
    camera_info,
  } = singlePhone || {};
  const handleFavorite = () => {
    addFavorite(singlePhone);
  };
  return (
    <div className="w-full mt-10">
      <img src={image} className="w-full mx-auto md:w-auto  mb-8" alt="" />
      <div className="flex justify-between">
        <h1 className="text-6xl font-thin mb-8">{name}</h1>
        <div className="space-x-2">
          {/* <Button
            onClick={() => handleCart(singlePhone)}
            label={<MdAddShoppingCart />}
          />
          <Button
            onClick={() => handleFavorite(singlePhone)}
            label={<MdBookmarkAdd />}
          /> */}
          <Button label={<MdAddShoppingCart />}></Button>
          <Button onClick={handleFavorite} label={<MdBookmarkAdd />}></Button>
        </div>
      </div>
      <div className="space-y-4">
        <h2 className="font-thin text-4xl">Details: </h2>
        <p>
          <span className="font-bold">Brand:</span> {brand}
        </p>
        <p>
          <span className="font-bold">Model:</span> {model}
        </p>
        {/* Storage Info */}
        <div className="flex gap-1">
          <p className="font-bold">Storage:</p>
          <div>
            {storage.map((item) => {
              return (
                <div key={item}>
                  <div>{item}</div>
                </div>
              );
            })}
          </div>
        </div>
        {/* Price info */}
        <div className="flex gap-1">
          <p className="font-bold">Price:</p>
          <div>
            {Object.entries(price).map(([storage, price]) => (
              <p key={storage} className="">
                <span>{storage}:</span> <span>{price}</span>
              </p>
            ))}
          </div>
        </div>
        <p>
          <span className="font-bold">Camera Info:</span> {camera_info}
        </p>
        <p>
          <span className="font-bold">Description:</span> {description}
        </p>
      </div>
    </div>
  );
};

export default PhoneDetails;
