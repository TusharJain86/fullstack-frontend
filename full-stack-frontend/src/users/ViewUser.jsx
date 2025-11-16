import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

export default function ViewUser() {
  const [user, setUser] = useState({
    name: "",
    username: "",
    email: "",
  });

  const { id } = useParams();

  useEffect(() => {
    loadUser();
  }, []);

  const loadUser = async () => {
    const result = await axios.get(`http://localhost:8080/user/${id}`);
    setUser(result.data);
  };

  return (
    <div className="max-w-2xl mx-auto mt-6 p-6 bg-white shadow rounded">
      <h2 className="text-2xl font-bold text-center mb-6">User Details</h2>

      <div className="border rounded shadow-sm">
        <div className="p-4 border-b font-semibold">
          Details of user id : {user.id}
        </div>

        <ul className="divide-y">
          <li className="p-4">
            <b>Name: </b> {user.name}
          </li>
          <li className="p-4">
            <b>Username: </b> {user.username}
          </li>
          <li className="p-4">
            <b>Email: </b> {user.email}
          </li>
        </ul>
      </div>

      <Link
        className="inline-block mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
        to={"/"}
      >
        Back to Home
      </Link>
    </div>
  );
}
