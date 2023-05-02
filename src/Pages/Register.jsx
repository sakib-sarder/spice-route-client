import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="h-[calc(100vh-296px)] flex justify-center items-center">
      <form className="w-[90vw] md:w-[60vw] lg:w-[30vw] border p-4 bg-white rounded-xl">
        <h1 className="text-3xl text-center  font-bold ">Please Register</h1>
        <div className="form-control">
          <label htmlFor="email" className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            type="text"
            placeholder="email"
            id="email"
            className="input input-bordered"
          />
        </div>
        <div className="form-control">
          <label htmlFor="password" className="label">
            <span className="label-text">Password</span>
          </label>
          <input
            id="password"
            type="text"
            placeholder="password"
            className="input input-bordered"
          />
        </div>
        <div className="form-control">
          <label htmlFor="photoURL" className="label">
            <span className="label-text">Photo URL</span>
          </label>
          <input
            id="photoURL"
            type="text"
            placeholder="Photo URL"
            className="input input-bordered"
          />
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Register</button>
        </div>
        <p className="pt-2 text-sm">
          Already Have an Account?{" "}
          <Link to="/Login" className=" underline">
            Login
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Register;
