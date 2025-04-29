import React from "react";
import { useLoaderData, useParams } from "react-router";
import Button from "../ui/Button";

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
  return <div></div>;
};

export default PhoneDetails;
