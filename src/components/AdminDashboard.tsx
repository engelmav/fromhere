import React from 'react';
import { Calendar, Clock, Edit, Trash2 } from 'lucide-react';

const allEvents = [
  { id: 1, title: 'Networking Mixer', date: '2024-03-15', time: '18:00', description: 'Connect with fellow entrepreneurs' },
  { id: 2, title: 'Tech Talk: AI in Business', date: '2024-03-20', time: '14:00', description: 'Learn about AI applications in modern business' },
  { id: 3, title: 'Startup Pitch Night', date: '2024-03-25', time: '19:00', description: 'Watch startups pitch their innovative ideas' },
  { id: 4, title: 'Workshop: Social Media Marketing', date: '2024-03-22', time: '10:00', description: 'Learn effective social media strategies for your business' },
];

export const AdminDashboard: React.FC = () => {
  const handleEdit = (id: number) => {
    // Implement edit functionality
    console.log(`Edit event ${id}`);
  };

  const handleDelete = (id: number) => {
    // Implement delete functionality
    console.log(`Delete event ${id}`);
  };

  return (
    <div>
      <h2 className="text-3xl font-bold mb-6 text-[#fdf9ee]">Admin Dashboard</h2>
      <div className="space-y-6">
        {allEvents.map((event) => (
          <div key={event.id} className="bg-[#fdf9ee] p-6 rounded-lg shadow-md">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-xl font-semibold mb-2 text-[#375043]">{event.title}</h3>
                <div className="flex items-center text-[#375043] mb-2">
                  <Calendar className="mr-2 text-[#cca43d]" size={16} />
                  <span>{event.date}</span>
                  <Clock className="ml-4 mr-2 text-[#cca43d]" size={16} />
                  <span>{event.time}</span>
                </div>
                <p className="text-[#375043]">{event.description}</p>
              </div>
              <div className="flex space-x-2">
                <button onClick={() => handleEdit(event.id)} className="text-[#375043] hover:text-[#cca43d]">
                  <Edit size={20} />
                </button>
                <button onClick={() => handleDelete(event.id)} className="text-[#375043] hover:text-red-500">
                  <Trash2 size={20} />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};