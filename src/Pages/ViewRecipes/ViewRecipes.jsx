import React from "react";
import { useLoaderData } from "react-router-dom";

const ViewRecipes = () => {
  const singleChef = useLoaderData();
  console.log(singleChef);
  const { name, image, likes, numbers_of_recipes, years_of_experience } =
    singleChef;
  return (
    <div className="container mx-auto my-6">
      <div>
        <div className="card card-side bg-base-100 shadow-xl h-[35vh]">
          <figure className="w-1/4">
            <img className="h-full"
              src={image}
              alt="Chef Picture"
            />
          </figure>
          <div className="card-body w-3/4">
                      <h2 className="card-title">{name}</h2>
            <p>Click the button to watch on Jetflix app.</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Watch</button>
            </div>
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default ViewRecipes;
