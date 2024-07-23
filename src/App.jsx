// src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Login from './components/Login';
import Feed from './components/Feed';

function App() {
  const [user, setUser] = useState(null);

  return (
    <Router>
      <Routes>
        
        <Route path="/login" element={user ? <Navigate to="/feed" /> : <Login setUser={setUser} />} />
        <Route path="/feed" element={user ? <Feed /> : <Navigate to="/login" />} />
        <Route path="/" element={<Navigate to="/login" />} />
      </Routes>
    </Router>
  );
}
export default App;
