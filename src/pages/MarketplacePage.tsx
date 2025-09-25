import React, { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  category: 'handicraft' | 'homestay' | 'event';
  verified: boolean;
}

const MarketplacePage: React.FC = () => {
  // Demo products data
  const products: Product[] = [
    {
      id: 1,
      name: 'Tribal Wooden Mask',
      description: 'Hand-carved wooden mask by local artisans',
      price: 1200,
      image: 'https://i.ytimg.com/vi/JP9uwwND1WM/maxresdefault.jpg',
      category: 'handicraft',
      verified: true,
    },
    {
      id: 2,
      name: 'Dokra Art Piece',
      description: 'Traditional metal casting craft from Jharkhand',
      price: 2500,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTR_KgfFzm0lkoD2p7lKhmNXFucXwPBUri8Ng&s',
      category: 'handicraft',
      verified: true,
    },
    {
      id: 3,
      name: 'Tribal Homestay Experience',
      description: '2-night stay with a local tribal family',
      price: 3500,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBpXXjSf9YgqiaS_ymJa3QLTzbnhBoRitILA&s',
      category: 'homestay',
      verified: true,
    },
    {
      id: 4,
      name: 'Sohrai Painting',
      description: 'Traditional wall art from Hazaribagh region',
      price: 1800,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrU1F56d1m5p6jyxHIIE3GYAkuEvTa9kFd6w&s',
      category: 'handicraft',
      verified: false,
    },
    {
      id: 5,
      name: 'Sarhul Festival Tour',
      description: 'Experience the spring festival celebration',
      price: 2000,
      image: 'https://www.newsbharati.com/Encyc/2018/3/21/2_03_34_38_Sarhul-Festival_1_H@@IGHT_435_W@@IDTH_800.jpg',
      category: 'event',
      verified: true,
    },
    {
      id: 6,
      name: 'Bamboo Handicraft',
      description: 'Eco-friendly bamboo products made by local artisans',
      price: 800,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0TN-k2p6ToEoyRB5e8tFG_kSe8jV4uqGJ-Q&s',
      category: 'handicraft',
      verified: true,
    },
  ];

  // New: state for selected category filter
  const [selectedCategory, setSelectedCategory] = useState<'all' | Product['category']>('all');

  const filteredProducts = useMemo(() => {
    if (selectedCategory === 'all') return products;
    return products.filter((p) => p.category === selectedCategory);
  }, [products, selectedCategory]);

  return (
    <div className="min-h-screen flex flex-col bg-neutral">
      <Navbar />

      <div className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-center text-primary mb-8">Jharkhand Cultural Marketplace</h1>

        <div className="flex flex-wrap gap-4 justify-center mb-8">
          <button
            onClick={() => setSelectedCategory('all')}
            className={`px-4 py-2 rounded-full ${selectedCategory === 'all' ? 'bg-primary text-white' : 'bg-white text-gray-700 hover:bg-gray-100'}`}
          >
            All Items
          </button>

          <button
            onClick={() => setSelectedCategory('handicraft')}
            className={`px-4 py-2 rounded-full ${selectedCategory === 'handicraft' ? 'bg-primary text-white' : 'bg-white text-gray-700 hover:bg-gray-100'}`}
          >
            Handicrafts
          </button>

          <button
            onClick={() => setSelectedCategory('homestay')}
            className={`px-4 py-2 rounded-full ${selectedCategory === 'homestay' ? 'bg-primary text-white' : 'bg-white text-gray-700 hover:bg-gray-100'}`}
          >
            Homestays
          </button>

          <button
            onClick={() => setSelectedCategory('event')}
            className={`px-4 py-2 rounded-full ${selectedCategory === 'event' ? 'bg-primary text-white' : 'bg-white text-gray-700 hover:bg-gray-100'}`}
          >
            Events
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((product) => (
            <motion.div
              key={product.id}
              className="card overflow-hidden"
              whileHover={{ y: -5 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: product.id * 0.1 }}
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
                {product.verified && (
                  <div className="absolute top-2 right-2 bg-white rounded-full p-1 shadow-md">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-accent" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                )}
                <div className="absolute bottom-2 left-2 bg-accent text-white px-2 py-1 rounded-md text-sm font-medium">
                  {product.category}
                </div>
              </div>

              <div className="p-4">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-lg font-semibold">{product.name}</h3>
                  <div className="text-lg font-bold text-primary">₹{product.price}</div>
                </div>

                <p className="text-gray-600 text-sm mb-4">{product.description}</p>

                <button className="btn-primary w-full">Buy Now</button>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-8 bg-white rounded-xl p-6 shadow-md">
          <div className="flex items-center gap-3 mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-accent" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <h3 className="text-lg font-semibold">Blockchain Verified Products</h3>
          </div>
          <p className="text-gray-600">
            Products with the verification badge are authenticated on blockchain, ensuring fair compensation to artisans and verifying the authenticity of tribal handicrafts.
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default MarketplacePage;
