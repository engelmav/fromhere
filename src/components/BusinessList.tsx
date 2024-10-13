import React from 'react';
import { Building2 } from 'lucide-react';

const businesses = [
  { id: 1, name: 'TechStart Solutions', description: 'Innovative software development company' },
  { id: 2, name: 'Green Leaf Design', description: 'Eco-friendly graphic design studio' },
  { id: 3, name: 'Quantum Analytics', description: 'Data-driven business intelligence firm' },
];

export const BusinessList: React.FC = () => {
  return (
    <div>
      <h2 className="text-3xl font-bold mb-6 text-secondary">Our Businesses</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {businesses.map((business) => (
          <div key={business.id} className="bg-secondary p-6 rounded-lg shadow-md">
            <Building2 className="mb-4 text-accent" size={32} />
            <h3 className="text-xl font-semibold mb-2 text-primary">{business.name}</h3>
            <p className="text-primary">{business.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};