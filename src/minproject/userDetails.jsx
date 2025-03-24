// UserDetails Component
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useSearchParams } from 'react-router-dom';

const UserDetails = () => {

  const mystyles={
    color:'red',
    bgcolor:'yellow'
  }
  const { id } = useParams();
  const [searchParams] = useSearchParams();
  const userName = searchParams.get("name");
  const [user, setUser] = useState(null);

  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then(response => setUser(response.data))
      .catch(error => console.log("Error fetching user details", error));
  }, [id]);

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1 style={{color:mystyles.color}}>User Details</h1>
      <table align='center'>
        <tbody>
          <tr>
            <th>ID</th>
            <td>{user.id}</td>
          </tr>
          <tr>
            <th>Name</th>
            <td>{userName}</td>
          </tr>
          <tr>
            <th>Username</th>
            <td>{user.username}</td>
          </tr>
          <tr>
            <th>Email</th>
            <td>{user.email}</td>
          </tr>
          <tr>
            <th>Phone</th>
            <td>{user.phone}</td>
          </tr>
          <tr>
            <th>Address</th>
            <td>{user.address.street}, {user.address.city}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default UserDetails;