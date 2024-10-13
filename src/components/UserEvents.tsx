import React from 'react';
import { User } from '../App';
import { Calendar, Clock } from 'lucide-react';

type UserEventsProps = {
  user: User;
};

const userEvents = [
  { id: 1, title: 'My Networking Event', date: '2024-03-18', time: '15:00', description: 'A networking event for local entrepreneurs' },
  { id: 2, title: 'Workshop: Social Media Marketing', date: '2024-03-22', time: '10:00', description: 'Learn effective social media strategies for your business' },
];

export const UserEvents: React.FC<UserEventsProps> = ({ user }) => {
  return (
    <div>
      <h2 className="text-3xl font-bold mb-6 text-[#fdf9ee]">My Events</h2>
      <div className="space-y-6">
        {userEvents.map((event) => (
          <div key={event.id} className="bg-[#fdf9ee] p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2 text-[#375043]">{event.title}</h3>
            <div className="flex items-center text-[#375043] mb-2">
              <Calendar className="mr-2 text-[#cca43d]" size={16} />
              <span>{event.date}</span>
              <Clock className="ml-4 mr-2 text-[#cca43d]" size={16} />
              <span>{event.time}</span>
            </div>
            <p className="text-[#375043]">{event.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};