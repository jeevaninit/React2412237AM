// UserRoot Component
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ListUsers from './ListUsers';
import UserDetails from './UserDetails';

const UserRoot = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<ListUsers />} />
        <Route path='/user/:id' element={<UserDetails />} />
      </Routes>
    </Router>
  );
};

export default UserRoot;
