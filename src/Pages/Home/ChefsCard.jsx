import React from "react";
import { HiHeart } from "react-icons/hi2";
import LazyLoad from "react-lazy-load";
import { Link } from "react-router-dom";

const ChefsCard = ({ chef }) => {
  const { id, image, name, likes, numbers_of_recipes, years_of_experience } =
    chef;
  return (
    <div className="card  bg-base-100 shadow-xl">
      <LazyLoad className="h-96"  threshold={0.95}>
        <img src={image} alt="Chefs Image" className="w-full h-full rounded-t-lg" />
      </LazyLoad>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>Experience: {years_of_experience} years</p>
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
