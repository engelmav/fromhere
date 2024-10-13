import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link, Navigate } from 'react-router-dom';
import { Home } from './components/Home';
import { BusinessList } from './components/BusinessList';
import { EventList } from './components/EventList';
import { AddEvent } from './components/AddEvent';
import { Login } from './components/Login';
import { UserEvents } from './components/UserEvents';
import { AdminDashboard } from './components/AdminDashboard';

export type User = {
  id: number;
  username: string;
  role: 'customer' | 'admin';
};

function App() {
  const [user, setUser] = useState<User | null>(null);

  const handleLogout = () => {
    setUser(null);
  };

  return (
    <Router>
      <div className="min-h-screen bg-[#375043] text-[#fdf9ee]">
        <nav className="bg-[#cca43d] p-4">
          <div className="container mx-auto flex justify-between items-center">
            <Link to="/" className="text-[#375043] text-2xl font-bold">Co-Working Hub</Link>
            <div className="space-x-4">
              <Link to="/" className="text-[#375043] hover:text-[#fdf9ee]">Home</Link>
              <Link to="/businesses" className="text-[#375043] hover:text-[#fdf9ee]">Businesses</Link>
              <Link to="/events" className="text-[#375043] hover:text-[#fdf9ee]">Events</Link>
              {user ? (
                <>
                  {user.role === 'customer' && (
                    <Link to="/my-events" className="text-[#375043] hover:text-[#fdf9ee]">My Events</Link>
                  )}
                  {user.role === 'admin' && (
                    <Link to="/admin" className="text-[#375043] hover:text-[#fdf9ee]">Admin</Link>
                  )}
                  <button onClick={handleLogout} className="text-[#375043] hover:text-[#fdf9ee]">Logout</button>
                </>
              ) : (
                <Link to="/login" className="text-[#375043] hover:text-[#fdf9ee]">Login</Link>
              )}
            </div>
          </div>
        </nav>
        <div className="container mx-auto mt-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/businesses" element={<BusinessList />} />
            <Route path="/events" element={<EventList />} />
            <Route path="/login" element={<Login setUser={setUser} />} />
            <Route
              path="/add-event"
              element={
                user ? <AddEvent user={user} /> : <Navigate to="/login" />
              }
            />
            <Route
              path="/my-events"
              element={
                user && user.role === 'customer' ? (
                  <UserEvents user={user} />
                ) : (
                  <Navigate to="/login" />
                )
              }
            />
            <Route
              path="/admin"
              element={
                user && user.role === 'admin' ? (
                  <AdminDashboard />
                ) : (
                  <Navigate to="/login" />
                )
              }
            />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;