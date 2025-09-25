import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

interface ItineraryDay {
  day: number;
  activities: {
    time: string;
    activity: string;
    location: string;
  }[];
}

const ItineraryPlanner: React.FC = () => {
  const [days, setDays] = useState<number>(2);
  const [interest, setInterest] = useState<string>('Nature');
  const [showItinerary, setShowItinerary] = useState<boolean>(false);
  const [showChatPopup, setShowChatPopup] = useState<boolean>(false);
  
  // Demo itinerary data
  const demoItinerary: ItineraryDay[] = [
    {
      day: 1,
      activities: [
        { time: '09:00 AM', activity: 'Visit Hundru Falls', location: 'Ranchi' },
        { time: '12:30 PM', activity: 'Lunch at Local Restaurant', location: 'Ranchi' },
        { time: '02:00 PM', activity: 'Explore Tribal Museum', location: 'Ranchi' },
        { time: '05:00 PM', activity: 'Evening at Patratu Valley', location: 'Patratu' },
      ],
    },
    {
      day: 2,
      activities: [
        { time: '08:30 AM', activity: 'Trek to Netarhat Hills', location: 'Netarhat' },
        { time: '12:00 PM', activity: 'Picnic Lunch', location: 'Netarhat' },
        { time: '03:00 PM', activity: 'Visit Lodh Falls', location: 'Netarhat' },
        { time: '06:00 PM', activity: 'Sunset Point', location: 'Netarhat' },
      ],
    },
  ];
  
  // Demo chat messages
  const demoMessages = [
    { sender: 'ai', message: 'Hello! I\'m your AI travel assistant. How can I help with your Jharkhand trip?' },
    { sender: 'user', message: 'Can you suggest some family-friendly places in Jharkhand?' },
    { sender: 'ai', message: 'Absolutely! For families, I recommend visiting Betla National Park for wildlife safaris, Dassam Falls for picnics, and the Tribal Culture Center in Ranchi. The cable car ride at Deoghar is also very popular with children!' },
  ];
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowItinerary(true);
  };
  
  return (
    <div className="min-h-screen flex flex-col bg-neutral">
      <Navbar />
      
      <div className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-center text-primary mb-8">Plan Your Jharkhand Adventure</h1>
        
        {!showItinerary ? (
          <motion.div 
            className="max-w-md mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="card p-6">
              <h2 className="text-xl font-semibold mb-4">Create Your Itinerary</h2>
              
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label className="block text-gray-700 mb-2" htmlFor="days">
                    Number of Days
                  </label>
                  <select 
                    id="days" 
                    className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    value={days}
                    onChange={(e) => setDays(parseInt(e.target.value))}
                  >
                    <option value={1}>1 Day</option>
                    <option value={2}>2 Days</option>
                    <option value={3}>3 Days</option>
                    <option value={4}>4 Days</option>
                    <option value={5}>5 Days</option>
                  </select>
                </div>
                
                <div className="mb-6">
                  <label className="block text-gray-700 mb-2" htmlFor="interest">
                    Primary Interest
                  </label>
                  <select 
                    id="interest" 
                    className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    value={interest}
                    onChange={(e) => setInterest(e.target.value)}
                  >
                    <option value="Nature">Nature</option>
                    <option value="Culture">Culture</option>
                    <option value="History">History</option>
                  </select>
                </div>
                
                <button 
                  type="submit" 
                  className="w-full btn-primary py-3 font-medium"
                >
                  Generate Itinerary
                </button>
              </form>
            </div>
          </motion.div>
        ) : (
          <div className="max-w-4xl mx-auto">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-semibold">Your {days}-Day {interest} Itinerary</h2>
              <button 
                onClick={() => setShowChatPopup(true)}
                className="btn-secondary flex items-center gap-2"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clipRule="evenodd" />
                </svg>
                Ask AI Assistant
              </button>
            </div>
            
            <div className="space-y-6">
              {demoItinerary.slice(0, days).map((day) => (
                <motion.div 
                  key={day.day} 
                  className="card p-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: day.day * 0.1 }}
                >
                  <h3 className="text-xl font-semibold mb-4 text-primary">Day {day.day}</h3>
                  
                  <div className="space-y-4">
                    {day.activities.map((activity, index) => (
                      <div key={index} className="flex items-start">
                        <div className="bg-primary bg-opacity-10 text-primary font-medium rounded-lg px-3 py-1 w-24 text-center">
                          {activity.time}
                        </div>
                        <div className="ml-4">
                          <div className="font-medium">{activity.activity}</div>
                          <div className="text-sm text-gray-600">{activity.location}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
            
            <div className="mt-8 text-center">
              <button 
                onClick={() => setShowItinerary(false)}
                className="btn-primary"
              >
                Create New Itinerary
              </button>
            </div>
          </div>
        )}
      </div>
      
      {/* Chat Popup */}
      {showChatPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <motion.div 
            className="bg-white rounded-xl shadow-xl w-full max-w-md overflow-hidden"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
          >
            <div className="bg-primary text-white p-4 flex justify-between items-center">
              <h3 className="font-semibold">AI Travel Assistant</h3>
              <button onClick={() => setShowChatPopup(false)} className="text-white">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
            </div>
            
            <div className="p-4 h-80 overflow-y-auto">
              {demoMessages.map((msg, index) => (
                <div key={index} className={`mb-4 ${msg.sender === 'user' ? 'text-right' : ''}`}>
                  <div className={`inline-block rounded-lg px-4 py-2 max-w-xs ${msg.sender === 'user' ? 'bg-primary text-white' : 'bg-gray-100 text-gray-800'}`}>
                    {msg.message}
                  </div>
                </div>
              ))}
            </div>
            
            <div className="border-t p-4">
              <div className="flex">
                <input 
                  type="text" 
                  placeholder="Ask a question..." 
                  className="flex-grow px-3 py-2 border rounded-l-lg focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <button className="bg-primary text-white px-4 py-2 rounded-r-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
      
      <Footer />
    </div>
  );
};

export default ItineraryPlanner;