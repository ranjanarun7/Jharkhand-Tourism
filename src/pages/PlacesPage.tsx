import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

interface Place {
  id: number;
  name: string;
  description: string;
  image: string;
}

const PlacesPage: React.FC = () => {
  const [selectedPlace, setSelectedPlace] = useState<Place | null>(null);
  
  // Demo places data
  const places: Place[] = [
    {
      id: 1,
      name: 'Netarhat',
      description: 'Known as the Queen of Chotanagpur, famous for its stunning sunrise and sunset views.',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeiCPzrKKzQigpZhGKMqW2p2Uh6dUomJy71A&s',
    },
    {
      id: 2,
      name: 'Patratu Valley',
      description: 'A scenic valley with winding roads and breathtaking views of the surrounding hills.',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4gh9yrRHWQmUT2fZZZ7Xcw37EeIOZH4zzcA&s',
    },
    {
      id: 3,
      name: 'Betla National Park',
      description: 'Home to diverse wildlife including tigers, elephants, and various bird species.',
      image: 'https://currentaffairs.adda247.com/wp-content/uploads/multisite/sites/5/2025/07/23111157/In-Which-State-is-Betla-National-Park-Located.png',
    },
    {
      id: 4,
      name: 'Hundru Falls',
      description: 'One of the highest waterfalls in Jharkhand, dropping from a height of 98 meters.',
      image: 'https://lh3.googleusercontent.com/gps-cs-s/AC9h4nqqbRnonW2sXZDhwvHfu9Z1OWMVPumzcoGC4iOb0AHUFJPDSkCvZutRBuwwSXPf0Cmg3w-tgal29ZbheKSkm1XgcbYXhVE_r76Cji3zpDqaI0iHraaaH9Ujz2iv0elG-FMiSWDM=w270-h312-n-k-no',
    },
    {
      id: 5,
      name: 'Deoghar',
      description: 'Famous for the Baidyanath Temple, one of the twelve Jyotirlingas in India.',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCgGAjVH-goHge4m-eVQG_wMn951Li3ijy2A&s',
    },
  ];
  
  return (
    <div className="min-h-screen flex flex-col bg-neutral">
      <Navbar />
      
      <div className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-center text-primary mb-8">Explore Jharkhand's Beautiful Places</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {places.map((place) => (
            <motion.div 
              key={place.id} 
              className="card overflow-hidden"
              whileHover={{ y: -5 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: place.id * 0.1 }}
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={place.image} 
                  alt={place.name} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">{place.name}</h3>
                <p className="text-gray-600 mb-4">{place.description}</p>
                
                <button 
                  onClick={() => setSelectedPlace(place)}
                  className="btn-primary w-full flex items-center justify-center gap-2"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                    <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                  </svg>
                  Preview in AR/VR
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      
      {/* AR/VR Preview Modal */}
      {selectedPlace && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <motion.div 
            className="bg-white rounded-xl shadow-xl w-full max-w-2xl overflow-hidden"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
          >
            <div className="bg-primary text-white p-4 flex justify-between items-center">
              <h3 className="font-semibold">AR/VR Preview: {selectedPlace.name}</h3>
              <button onClick={() => setSelectedPlace(null)} className="text-white">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
            </div>
            
            <div className="p-4">
              <div className="bg-gray-100 rounded-lg p-8 flex items-center justify-center">
                <div className="text-center">
                  <img 
                    src={selectedPlace.image} 
                    alt={`AR/VR Preview of ${selectedPlace.name}`}
                    className="w-full h-64 object-cover rounded-lg mb-4"
                  />
                  <p className="text-gray-500 italic">AR/VR experience placeholder for {selectedPlace.name}</p>
                  <p className="mt-4 text-sm text-gray-600">In the full version, this would be an interactive 360° view or AR experience.</p>
                </div>
              </div>
            </div>
            
            <div className="border-t p-4 flex justify-end">
              <button 
                onClick={() => setSelectedPlace(null)}
                className="btn-primary"
              >
                Close Preview
              </button>
            </div>
          </motion.div>
        </div>
      )}
      
      <Footer />
    </div>
  );
};

export default PlacesPage;