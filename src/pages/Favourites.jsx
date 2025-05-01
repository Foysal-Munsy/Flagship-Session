import React, { useEffect, useState } from "react";
import { getFavorites, removeFavorite } from "../utils";
import PhoneCard from "../components/PhoneCard";
import EmptyState from "../ui/EmptyState";

const Favourites = () => {
  const [displayPhones, setDisplayPhones] = useState([]);
  useEffect(() => {
    const savedPhones = getFavorites();
    setDisplayPhones(savedPhones);
  }, []);

  const handleDelete = (id) => {
    removeFavorite(id);
    setDisplayPhones(getFavorites());
  };
  if (displayPhones.length === 0) return <EmptyState></EmptyState>;
  return (
    <div className="py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
        {displayPhones.map((phone) => (
          <PhoneCard
            key={phone.id}
            phone={phone}
            deletable={true}
            handleDelete={handleDelete}
          />
        ))}
      </div>
    </div>
  );
};

export default Favourites;
