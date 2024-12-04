import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <div className="bg-cover bg-[url(https://images.pexels.com/photos/2422270/pexels-photo-2422270.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500)] flex flex-col pt-8 h-screen w-full justify-between bg-red-700">
        <img
          className="w-20 ml-8"
          src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png"
          alt="logo"
        />
        <div className="flex flex-col bg-white py-5 px-5 items-center">
          <h2 className="text-3xl font-bold">Get Satrted with Uber</h2>
          <Link to={"/login"} className="flex w-full justify-center items-center bg-black text-white py-3 rounded mt-5">
            Continue
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
