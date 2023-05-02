import React from "react";
import errorImg from "../assets/error-page.jpg";
import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

const ErrorPage = () => {
  return (
    <div className="h-[100vh] flex items-center justify-center">
      <div className="w-[70vw] h-[60vh]">
        <img className="w-full h-full" src={errorImg} alt="Error Image" />
        <div className="text-center">
          <Link to="/"><button className=" bg-blue-400 px-3 py-2 font-semibold text-white text-2xl rounded-lg inline-flex items-center gap-2"><FaArrowLeft/><span>Home Page</span></button></Link>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
