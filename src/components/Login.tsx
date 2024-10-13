import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { User } from '../App';

type LoginProps = {
  setUser: (user: User) => void;
};

export const Login: React.FC<LoginProps> = ({ setUser }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // This is a mock login. In a real application, you would validate credentials against a backend.
    if (username === 'admin' && password === 'admin') {
      setUser({ id: 1, username: 'admin', role: 'admin' });
      navigate('/admin');
    } else if (username === 'customer' && password === 'customer') {
      setUser({ id: 2, username: 'customer', role: 'customer' });
      navigate('/my-events');
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <div className="max-w-md mx-auto">
      <h2 className="text-3xl font-bold mb-6 text-[#fdf9ee]">Login</h2>
      <form onSubmit={handleSubmit} className="bg-[#fdf9ee] p-6 rounded-lg shadow-md">
        <div className="mb-4">
          <label htmlFor="username" className="block text-[#375043] font-bold mb-2">Username</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full px-3 py-2 border rounded-lg text-[#375043]"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block text-[#375043] font-bold mb-2">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-3 py-2 border rounded-lg text-[#375043]"
            required
          />
        </div>
        <button type="submit" className="bg-[#cca43d] text-[#375043] px-4 py-2 rounded hover:bg-opacity-80">
          Login
        </button>
      </form>
    </div>
  );
};