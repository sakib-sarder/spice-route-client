import React from "react";
import { FaHeart } from "react-icons/fa";
import { useLoaderData } from "react-router-dom";
import RecipeCard from "./RecipeCard";
import LazyLoad from "react-lazy-load";

const ViewRecipes = () => {
  const singleChef = useLoaderData();
  const {
    name,
    image,
    bio,
    likes,
    numbers_of_recipes,
    years_of_experience,
    recipes,
  } = singleChef;
  return (
    <div className="container mx-auto my-6">
      <div>
        <div className="md:h-[55vh] flex items-center  flex-col md:flex-row px-2">
          <LazyLoad className="md:w-2/5 w-full  h-full" threshold={0.95}>
            <img
              className="h-full md:w-4/5 w-full mx-auto rounded-xl"
              src={image}
              alt="Chef Picture"
            />
          </LazyLoad>
          <div className="w-full md:w-3/5">
            <h2 className="text-4xl font-semibold">{name}</h2>
            <p className="ps-2">{bio}</p>
            <p className="font-semibold pt-2">
              Experience: {years_of_experience} Years
            </p>
            <div className="flex justify-between mt-3">
              <div className="flex items-center gap-1">
                <FaHeart className="text-red-500" />
                <p className="font-semibold">{likes}</p>
              </div>
              <div>
                <p className="font-semibold">
                  Numbers of Recipes: {numbers_of_recipes}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <h1 className="text-center py-8 text-4xl font-bold text-[#F4AB1D]">
        Recipes By {name}
      </h1>
      <div className="grid gap-3 px-2 lg:px-12">
        {recipes.map((recipe, key) => (
          <RecipeCard key={key} recipe={recipe}></RecipeCard>
        ))}
      </div>
    </div>
  );
};

export default ViewRecipes;
