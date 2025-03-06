import React from "react";
import { useEffect, useState } from "react";

const ViewUsers = () => {
  const [users, setUsers] = useState([]);

  const fetchUsers = async () => {
    const data = await fetch("http://localhost:3002/users", {
      method: "GET",
    });
    const res = await data.json();
    setUsers(res);
    console.log(res);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div>
      <h1>List of users</h1>
      <table>
        <thead>
          <tr>
            <th>S.No</th>
            <th>Id</th>
            <th>Name</th>
            <th>Email</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, key) => (
            <tr key={user.id}>
              <td>{key + 1}</td>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>
                <button>Edit</button>
                <button>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ViewUsers;
