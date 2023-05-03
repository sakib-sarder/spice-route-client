import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";

const Register = () => {
  const { createUser, updateUserProfile, loading } = useContext(AuthContext);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleRegister = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    const photoURL = form.photoURL.value;
    const name = form.name.value;
    // console.log(email, password, photoURL);
    if (password.length < 6) {
      setError("Password can't be less than 6 character");
      return;
    }

    createUser(email, password)
      .then((result) => {
        const createdUser = result.user;
        console.log(createdUser);
        updateUserProfile(name, photoURL)
          .then(() => {})
          .catch((error) => {});
        navigate("/");
      })
      .catch((error) => {
        console.log(error.message);
      });
    form.reset();
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-[80vh] ">
        <progress className="progress w-56 progress-info"></progress>
      </div>
    );
  }
  return (
    <div className="h-[75vh] flex justify-center items-center">
      <form
        onSubmit={handleRegister}
        className="w-[90vw] md:w-[60vw] lg:w-[30vw] border p-4 bg-white rounded-xl"
      >
        <h1 className="text-3xl text-center  font-bold ">Please Register</h1>
        <div className="form-control">
          <label htmlFor="name" className="label">
            <span className="label-text">Name</span>
          </label>
          <input
            type="text"
            placeholder="Full Name"
            id="name"
            name="name"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control">
          <label htmlFor="email" className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            type="email"
            placeholder="email"
            id="email"
            name="email"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control">
          <label htmlFor="password" className="label">
            <span className="label-text">Password</span>
          </label>
          <input
            id="password"
            type="password"
            name="password"
            placeholder="password"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control">
          <label htmlFor="photoURL" className="label">
            <span className="label-text">Photo URL</span>
          </label>
          <input
            id="photoURL"
            type="text"
            name="photoURL"
            placeholder="Photo URL"
            className="input input-bordered"
            required
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
        {error && (
          <p className="text-center text-red-500">
            <small>{error}</small>
          </p>
        )}
      </form>
    </div>
  );
};

export default Register;
