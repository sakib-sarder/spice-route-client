import React from "react";
import { FaHeartbeat } from "react-icons/fa";
import { HiHeart } from "react-icons/hi2";
import { Link } from "react-router-dom";

const ChefsCard = ({ chef }) => {
  const { id, image, name, likes, numbers_of_recipes, years_of_experience } =
    chef;
  return (
    <div className="card  bg-base-100 shadow-xl">
      <figure className="h-96">
        <img src={image} alt="Chefs Image" className="w-full h-full" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>Years of experience: {years_of_experience}</p>
        <p>Numbers of recipes: {numbers_of_recipes}</p>
        <div className="flex justify-between ">
          <div className="flex items-center gap-1">
            <HiHeart className="text-red-600 text-2xl " />
            <p className="text-lg font-semibold">{likes}</p>
          </div>
          <Link to={`/chef/${id}`}>
            <button className="bg-amber-500 px-2 py-1 rounded-md font-semibold text-lg">
              View Recipes
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ChefsCard;
