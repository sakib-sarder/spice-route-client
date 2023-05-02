import React from "react";
import { FaGithub, FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="flex justify-center h-[calc(100vh-296px)] items-center ">
      <div className="px-4">
        <form className="w-[90vw] md:w-[60vw] lg:w-[30vw] border p-4 bg-white rounded-xl">
          <h1 className="text-3xl text-center  font-bold ">Please Login</h1>
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
            <label className="label">
              <Link className="underline">
                <small>Forgot Password?</small>
              </Link>
            </label>
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary">Login</button>
          </div>
          <p className="pt-2 text-sm">
            Don't Have an Account?{" "}
            <Link to="/register" className=" underline">
              Register
            </Link>
          </p>
        </form>
        <div className="space-y-2 my-2">
          <div className="bg-white mx-auto flex justify-center gap-2 py-2 rounded-lg">
            <FaGoogle className="text-2xl " />
            <span className="text-lg font-semibold ">Sign In With Google</span>
          </div>
          <div className="bg-white mx-auto flex justify-center gap-2 py-2 rounded-lg">
            <FaGithub className="text-2xl " />
            <span className="text-lg font-semibold ">Sign In With Google</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
