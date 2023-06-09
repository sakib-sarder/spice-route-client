import React, { useState } from "react";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import LazyLoad from "react-lazy-load";

const RecipeCard = ({ recipe }) => {
    const [isFavourite, setIsFavourite] = useState(false);
    const { image, name, ingredients, method, rating } = recipe;
    const handleFavourite = () => {
        toast(`${name} Added To Favourite 😊`)
        setIsFavourite(!isFavourite);
    }
  return (
    <div>
      <div className="card lg:card-side bg-base-100 shadow-xl">
        <LazyLoad className="w-full lg:w-1/4" threshold={0.95}>
          <img className="w-full h-full rounded-t-lg lg:rounded-l-lg " src={image} alt="Recipe Photo" />
        </LazyLoad>
        <div className="card-body gap-0 my-auto space-y-2 w-full lg:w-3/4">
          <h2 className="font-bold text-3xl">{name}</h2>
          <p className="font-bold">
            Ingredients:{" "}
            <span className="text-sm font-medium">
              {ingredients.join(", ")} etc.
            </span>{" "}
          </p>
          <p className="font-bold">
            Method: <span className="text-sm font-medium">{method}</span>{" "}
          </p>

          <div className="flex justify-between">
            <div className="flex gap-1 items-center">
              <Rating style={{ maxWidth: 120 }} value={rating} readOnly />
              <p className="font-bold text-lg">{rating}</p>
            </div>
            <button onClick={handleFavourite} className= {`text-lg bg-amber-400 px-3 py-1 rounded-lg font-semibold ${isFavourite ? "opacity-70 cursor-not-allowed" : ""}`}  disabled={isFavourite}>
            {isFavourite ? "Favourited" : "Favourite"}
            </button>
          </div>
        </div>
          </div>
          <ToastContainer/>
    </div>
  );
};

export default RecipeCard;
