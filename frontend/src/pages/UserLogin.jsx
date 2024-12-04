import React, { useState } from "react";
import { Link } from "react-router-dom";

const UserLogin = () => {
  const [email,setEmail] = useState();
  return (
    <div className="p-7 h-screen flex flex-col justify-between">
      <div>
        <img
          className="w-20 mb-7"
          src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png"
          alt="logo"
        />
        <form action="">
          <h3 className="text-xl mb-2">What's your email</h3>
          <input
            className="bg-[#eeeeee] rounded mb-7 px-4 py-2 border w-full text-lg placeholder:text-base"
            type="email"
            required
            placeholder="youremail@example.com"
            value={email}
          />
          <h3 className="text-xl mb-2">Enter Password</h3>
          <input
            className="bg-[#eeeeee] rounded px-4 py-2 mb-7  border w-full text-lg placeholder:text-base"
            type="password"
            placeholder="Password"
          />
          <button className="bg-[#111] text-white font-semibold mb-3 px-4 py-2 rounded w-full text-lg">
            Login
          </button>
        </form>
          <p className="text-center">New here? <Link to="/signup" className="text-blue-600">Create new Account</Link></p>
      </div>
     <div>
     <button className="bg-[#444444] text-white font-semibold mb-7 px-4 py-2 rounded w-full text-lg">
        Sign in as Captain
      </button>
     </div>
    </div>
  );
};

export default UserLogin;
