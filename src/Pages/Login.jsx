import React, { useContext, useState } from "react";
import { FaGithub, FaGoogle } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";

const Login = () => {
  const { signIn, singInWithGoogle, singInWithGithub, user} =
    useContext(AuthContext);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  // Login with email and password
  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    signIn(email, password)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        navigate(from, { replace: true });
      })
      .catch((error) => {
        if (error.code === "auth/wrong-password" || error.code === "auth/user-not-found") {
          setError("Invalid email or password");
        } else {
          setError(error.message);
        }
      });
      form.reset();
  };
  // Login with Google
  const handleGoogleLogin = () => {
    singInWithGoogle()
      .then((result) => {
        const loggedUser = result.user;
        // console.log(loggedUser);
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // Login with Github
  const handleGithubLogin = () => {
    singInWithGithub()
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.log(error);
      });
  };
  console.log(user);
  return (
    <div className="flex justify-center h-[calc(100vh-296px)] items-center ">
      <div className="px-4">
        <form
          onSubmit={handleLogin}
          className="w-[90vw] md:w-[60vw] lg:w-[30vw] border p-4 bg-white rounded-xl"
        >
          <h1 className="text-3xl text-center  font-bold ">Please Login</h1>
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
              placeholder="password"
              className="input input-bordered"
              required
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
          {error && <p className="text-center text-red-500">{error}</p>}
        </form>
        <div className="space-y-2 my-2">
          <button
            onClick={handleGoogleLogin}
            className="bg-white w-full mx-auto flex justify-center gap-2 py-2 rounded-lg shadow-xl"
          >
            <FaGoogle className="text-2xl " />
            <span className="text-lg font-semibold ">Sign In With Google</span>
          </button>
          <button
            onClick={handleGithubLogin}
            className="bg-white w-full mx-auto flex justify-center gap-2 py-2 rounded-lg shadow-xl"
          >
            <FaGithub className="text-2xl " />
            <span className="text-lg font-semibold ">Sign In With Github</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
