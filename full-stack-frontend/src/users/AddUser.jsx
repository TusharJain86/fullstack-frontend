import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function AddUser() {
  let navigate = useNavigate();

  const [user, setUser] = useState({
    name: "",
    username: "",
    email: "",
  });

  const { name, username, email } = user;

  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:8080/user", user);
    navigate("/");
  };

  return (
    <div className="max-w-lg mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-semibold text-center mb-6">
        Register User
      </h2>

      <form onSubmit={onSubmit} className="space-y-4">
        <div>
          <label className="block mb-1 font-medium">Name</label>
          <input
            type="text"
            className="w-full border rounded px-3 py-2 focus:ring focus:ring-blue-300"
            placeholder="Enter your name"
            name="name"
            value={name}
            onChange={onInputChange}
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Username</label>
          <input
            type="text"
            className="w-full border rounded px-3 py-2 focus:ring focus:ring-blue-300"
            placeholder="Enter your username"
            name="username"
            value={username}
            onChange={onInputChange}
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">E-mail</label>
          <input
            type="email"
            className="w-full border rounded px-3 py-2 focus:ring focus:ring-blue-300"
            placeholder="Enter your e-mail address"
            name="email"
            value={email}
            onChange={onInputChange}
          />
        </div>

        <div className="flex items-center space-x-4 mt-4">
          <button
            type="submit"
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Submit
          </button>

          <Link
            className="px-4 py-2 border border-red-500 text-red-500 rounded hover:bg-red-500 hover:text-white"
            to="/"
          >
            Cancel
          </Link>
        </div>
      </form>
    </div>
  );
}
