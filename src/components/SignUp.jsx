import React, { useState } from "react";
import { v4 as uuid } from "uuid";

const SignUp = ({ setUsers }) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleUsername = (e) => {
    setUsername(e.target.value);
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = { username, email, password, id: uuid() };
    console.log(user);
    setUsers((prev) => {
      return [...prev, user];
    });
    setUsername("");
    setEmail("");
    setPassword("");
  };

  return (
    <div className="w-[50%] h-full py-3 flex items-center">
      <div className="bg-wht p-8 rounded-lg shadow-lg w-[80%] mx-auto">
        <h1 className="text-2xl font-bold text-primary30 text-center mb-6">
          Create an Account
        </h1>
        <form className="space-y-4" onSubmit={handleSubmit}>
          {/* Username Input */}
          <div>
            <label
              htmlFor="username"
              className="block text-sm font-medium text-blk mb-1"
            >
              Username
            </label>
            <input
              type="text"
              id="username"
              name="username"
              value={username}
              className="w-full px-4 py-2 border border-primary20 rounded focus:outline-none focus:ring-2 focus:ring-primary40"
              placeholder="Enter your username"
              onChange={handleUsername}
            />
          </div>
          {/* Email Input */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-blk mb-1"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              className="w-full px-4 py-2 border border-primary20 rounded focus:outline-none focus:ring-2 focus:ring-primary40"
              placeholder="Enter your email"
              onChange={handleEmail}
            />
          </div>
          {/* Password Input */}
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-blk mb-1"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              className="w-full px-4 py-2 border border-primary20 rounded focus:outline-none focus:ring-2 focus:ring-primary40"
              placeholder="Enter your password"
              onChange={handlePassword}
            />
          </div>
          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-primary30 text-wht font-semibold py-2 rounded hover:bg-primary50 transition"
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
