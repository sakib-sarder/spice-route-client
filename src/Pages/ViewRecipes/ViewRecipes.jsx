import React from "react";
import { FaHeart } from "react-icons/fa";
import { useLoaderData } from "react-router-dom";

const ViewRecipes = () => {
  const singleChef = useLoaderData();
  console.log(singleChef);
  const { name, image, bio, likes, numbers_of_recipes, years_of_experience } =
    singleChef;
  return (
    <div className="container mx-auto my-6">
      <div>
        <div className="h-[35vh] flex items-center py-8">
          <figure className="w-2/5 h-full">
            <img
              className="h-full w-4/5 mx-auto rounded-xl"
              src={image}
              alt="Chef Picture"
            />
          </figure>
          <div className=" w-3/5">
            <h2 className="text-3xl font-semibold">{name}</h2>
            <p>{bio}</p>
            <p className="font-semibold pt-2">
              Experieence: {years_of_experience} Years
            </p>
            <div className="flex justify-between mt-3">
              <div className="flex items-center gap-1">
                <FaHeart className="text-red-500"/>
                <p className="font-semibold">{likes}</p>
              </div>
              <div><p className="font-semibold">Numbers of Recipes: {numbers_of_recipes}</p></div>
            </div>
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default ViewRecipes;
