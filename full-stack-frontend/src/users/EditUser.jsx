import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

export default function EditUser() {
  let navigate = useNavigate();
  const { id } = useParams();

  const [user, setUser] = useState({
    name: "",
    username: "",
    email: "",
  });

  const { name, username, email } = user;

  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    loadUser();
  }, []);

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.put(`http://localhost:8080/user/${id}`, user);
    navigate("/");
  };

  const loadUser = async () => {
    const result = await axios.get(`http://localhost:8080/user/${id}`);
    setUser(result.data);
  };

  return (
    <div className="max-w-xl mx-auto mt-6 bg-white shadow p-6 rounded-lg">
      <h2 className="text-center text-2xl font-bold mb-4">Edit User</h2>

      <form onSubmit={onSubmit}>
        <div className="mb-4">
          <label className="block mb-1 font-medium">Name</label>
          <input
            type="text"
            className="w-full p-2 border rounded focus:ring focus:ring-blue-200"
            name="name"
            value={name}
            onChange={onInputChange}
          />
        </div>

        <div className="mb-4">
          <label className="block mb-1 font-medium">Username</label>
          <input
            type="text"
            className="w-full p-2 border rounded focus:ring focus:ring-blue-200"
            name="username"
            value={username}
            onChange={onInputChange}
          />
        </div>

        <div className="mb-4">
          <label className="block mb-1 font-medium">Email</label>
          <input
            type="email"
            className="w-full p-2 border rounded focus:ring focus:ring-blue-200"
            name="email"
            value={email}
            onChange={onInputChange}
          />
        </div>

        <button
          type="submit"
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Submit
        </button>

        <Link
          className="px-4 py-2 ml-3 border border-red-600 text-red-600 rounded hover:bg-red-600 hover:text-white"
          to="/"
        >
          Cancel
        </Link>
      </form>
    </div>
  );
}
