import { Link, Navigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

export default function RegisterPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [redirect, setRedirect] = useState("");

  async function registerUser(ev) {
    ev.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    try {
      await axios.post("/register", {
        name,
        email,
        password,
      });
      alert("Registration Successful");
      setRedirect(true);
    } catch (e) {
      alert("Registration failed");
    }
  }

  if (redirect) {
    return <Navigate to={"/login"} />;
  }

  return (
    <div className="flex flex-col lg:flex-row w-full h-full px-4 py-10 lg:px-10 lg:py-10 justify-center items-center mt-12">
      <div className="hidden lg:flex flex-col items-center lg:items-start lg:w-1/2 xl:w-1/3">
        <div className="flex flex-col gap-3 mb-8">
          <div className="text-3xl font-black">Welcome to</div>
          <div>
            <img src="../src/assets/logo.png" alt="Logo" className="w-48" />
          </div>
        </div>
        <div className="w-80 mt-6">
          <img
            src="../src/assets/signuppic.svg"
            alt="Sign Up"
            className="w-full"
          />
        </div>
      </div>

      <div className="bg-white w-full sm:w-full md:w-4/5 lg:w-1/2 xl:w-1/3 px-6 py-6 rounded-xl shadow-lg">
        <form className="flex flex-col w-full" onSubmit={registerUser}>
          <h1 className="font-extrabold mb-5 text-primarydark text-2xl text-center">
            Sign Up
          </h1>

          <div className="flex items-center mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-5 h-5 mr-2"
            >
              <path
                fillRule="evenodd"
                d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
                clipRule="evenodd"
              />
            </svg>
            <input
              type="text"
              placeholder="Name"
              className="flex-1 border border-gray-300 rounded-md px-3 py-2"
              value={name}
              onChange={(ev) => setName(ev.target.value)}
            />
          </div>

          <div className="flex items-center mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6 mr-2"
            >
              <path
                fillRule="evenodd"
                d="M17.834 6.166a8.25 8.25 0 100 11.668.75.75 0 011.06 1.06c-3.807 3.808-9.98 3.808-13.788 0-3.808-3.807-3.808-9.98 0-13.788 3.807-3.808 9.98-3.808 13.788 0A9.722 9.722 0 0121.75 12c0 .975-.296 1.887-.809 2.571-.514.685-1.28 1.179-2.191 1.179-.904 0-1.666-.487-2.18-1.164a5.25 5.25 0 11-.82-6.26V8.25a.75.75 0 011.5 0V12c0 .682.208 1.27.509 1.671.3.401.659.579.991.579.332 0 .69-.178.991-.579.3-.4.509-.99.509-1.671a8.222 8.222 0 00-2.416-5.834zM15.75 12a3.75 3.75 0 10-7.5 0 3.75 3.75 0 007.5 0z"
                clipRule="evenodd"
              />
            </svg>
            <input
              type="email"
              placeholder="Email"
              className="flex-1 border border-gray-300 rounded-md px-3 py-2"
              value={email}
              onChange={(ev) => setEmail(ev.target.value)}
            />
          </div>

          <div className="flex items-center mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6 mr-2"
            >
              <path
                fillRule="evenodd"
                d="M15.75 1.5a6.75 6.75 0 00-6.651 7.906c.067.39-.032.717-.221.906l-6.5 6.499a3 3 0 00-.878 2.121v2.818c0 .414.336.75.75.75H6a.75.75 0 00.75-.75v-1.5h1.5A.75.75 0 009 19.5V18h1.5a.75.75 0 00.53-.22l2.658-2.658c.19-.189.517-.288.906-.22A6.75 6.75 0 1015.75 1.5zm0 3a.75.75 0 000 1.5A2.25 2.25 0 0118 8.25a.75.75 0 001.5 0 3.75 3.75 0 00-3.75-3.75z"
                clipRule="evenodd"
              />
            </svg>
            <input
              type="password"
              placeholder="Password"
              className="flex-1 border border-gray-300 rounded-md px-3 py-2"
              value={password}
              onChange={(ev) => setPassword(ev.target.value)}
            />
          </div>

          <div className="flex items-center mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6 mr-2"
            >
              <path
                fillRule="evenodd"
                d="M15.75 1.5a6.75 6.75 0 00-6.651 7.906c.067.39-.032.717-.221.906l-6.5 6.499a3 3 0 00-.878 2.121v2.818c0 .414.336.75.75.75H6a.75.75 0 00.75-.75v-1.5h1.5A.75.75 0 009 19.5V18h1.5a.75.75 0 00.53-.22l2.658-2.658c.19-.189.517-.288.906-.22A6.75 6.75 0 1015.75 1.5zm0 3a.75.75 0 000 1.5A2.25 2.25 0 0118 8.25a.75.75 0 001.5 0 3.75 3.75 0 00-3.75-3.75z"
                clipRule="evenodd"
              />
            </svg>
            <input
              type="password"
              placeholder="Confirm password"
              className="flex-1 border border-gray-300 rounded-md px-3 py-2"
              value={confirmPassword}
              onChange={(ev) => setConfirmPassword(ev.target.value)}
            />
          </div>

          <div className="w-full py-4">
            <button
              type="submit"
              className="bg-primary text-white rounded-md px-4 py-2 w-full hover:bg-primarydark"
            >
              Create Account
            </button>
          </div>

          <div className="flex flex-col gap-2">
            <Link to={"/login"}>
              <button className="text-primary font-bold rounded-md px-4 py-2 w-full border border-primary hover:bg-primary hover:text-white">
                Sign In
              </button>
            </Link>
            <Link to={"/register"}>
              <button className="bg-primary text-white font-bold rounded-md px-4 py-2 w-full hover:bg-primarydark">
                Sign Up
              </button>
            </Link>
            <Link to={"/"} className="text-center">
              <button className="w-full py-2 bg-primary text-white rounded-md hover:bg-secondarydark">
                Back
              </button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
