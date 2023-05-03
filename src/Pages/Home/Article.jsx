import React from "react";
import { FaArrowRight, FaCalendar, FaComment, FaRegHeart } from "react-icons/fa";
import { HiHeart } from "react-icons/hi2";

const Article = ({ article }) => {
  const { title, image, method, like, comment, date } = article;
  return (
    <div className="card bg-base-100 shadow-xl image-full">
      <figure>
        <img src={image} alt="Dishes" />
      </figure>
      <div className="card-body my-auto">
        <h2 className="text-xl font-bold">{title}</h2>
        <hr />
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1">
            <FaCalendar />
            <p>{date}</p>
          </div>
          <div className="flex gap-5">
            <div>
              <div className="flex gap-1 items-center text-lg font-bold">
                <FaComment />
                <p>{comment}</p>
              </div>
            </div>
            <div className="flex items-center text-lg font-bold gap-1">
              <FaRegHeart />
              <p>{like}</p>
            </div>
          </div>
        </div>
        <hr />
        <p className="font-medium">{method.slice(0,250)}.....</p>
        <div className="card-actions justify-end">
          <button className="bg-amber-500 text-black py-2 px-2 flex gap-1 items-center rounded-lg"><span className="font-semibold">Read More</span><FaArrowRight/></button>
        </div>
      </div>
    </div>
  );
};

export default Article;
