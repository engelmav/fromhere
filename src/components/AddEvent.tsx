import React, { useState } from 'react';
import { User } from '../App';

type AddEventProps = {
  user: User;
};

export const AddEvent: React.FC<AddEventProps> = ({ user }) => {
  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send this data to your backend
    console.log({ title, date, time, description, userId: user.id });
    // Reset form
    setTitle('');
    setDate('');
    setTime('');
    setDescription('');
    alert('Event added successfully!');
  };

  return (
    <div>
      <h2 className="text-3xl font-bold mb-6 text-[#fdf9ee]">Add New Event</h2>
      <form onSubmit={handleSubmit} className="max-w-md mx-auto bg-[#fdf9ee] p-6 rounded-lg shadow-md">
        <div className="mb-4">
          <label htmlFor="title" className="block text-[#375043] font-bold mb-2">Event Title</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full px-3 py-2 border rounded-lg text-[#375043]"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="date" className="block text-[#375043] font-bold mb-2">Date</label>
          <input
            type="date"
            id="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="w-full px-3 py-2 border rounded-lg text-[#375043]"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="time" className="block text-[#375043] font-bold mb-2">Time</label>
          <input
            type="time"
            id="time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            className="w-full px-3 py-2 border rounded-lg text-[#375043]"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="description" className="block text-[#375043] font-bold mb-2">Description</label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full px-3 py-2 border rounded-lg text-[#375043]"
            rows={4}
            required
          ></textarea>
        </div>
        <button type="submit" className="bg-[#cca43d] text-[#375043] px-4 py-2 rounded hover:bg-opacity-80">
          Add Event
        </button>
      </form>
    </div>
  );
};