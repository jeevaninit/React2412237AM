import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const ListUsers = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users")
      .then(response => setUsers(response.data))
      .catch(error => console.log("Error fetching users", error));
  }, []);

  return (
    <div>
      <h1>User List</h1>
      <ul className='listcontainer'>
        {users.map(user => (
          <li key={user.id}>
            <Link to={`/user/${user.id}?name=${encodeURIComponent(user.name)}`}>
              <h3>{user.name}</h3>
            </Link>
            <p>{user.email}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListUsers;