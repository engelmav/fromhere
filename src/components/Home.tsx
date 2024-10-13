import React from 'react';
import { Link } from 'react-router-dom';
import { Building2, Calendar } from 'lucide-react';

export const Home: React.FC = () => {
  return (
    <div className="text-center">
      <h1 className="text-4xl font-bold mb-8 text-secondary">Welcome to Co-Working Hub</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-secondary p-6 rounded-lg shadow-md">
          <Building2 className="mx-auto mb-4 text-accent" size={48} />
          <h2 className="text-2xl font-semibold mb-4 text-primary">Our Businesses</h2>
          <p className="mb-4 text-primary">Discover the innovative businesses that call our co-working space home.</p>
          <Link to="/businesses" className="bg-accent text-primary px-4 py-2 rounded hover:bg-opacity-80">
            View Businesses
          </Link>
        </div>
        <div className="bg-secondary p-6 rounded-lg shadow-md">
          <Calendar className="mx-auto mb-4 text-accent" size={48} />
          <h2 className="text-2xl font-semibold mb-4 text-primary">Upcoming Events</h2>
          <p className="mb-4 text-primary">Stay updated with the latest events happening in our vibrant community.</p>
          <Link to="/events" className="bg-accent text-primary px-4 py-2 rounded hover:bg-opacity-80">
            View Events
          </Link>
        </div>
      </div>
    </div>
  );
};