import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Calendar, Store, ArrowRight, MapPin, Users, Star } from "lucide-react";
import { FaThumbsUp } from "react-icons/fa";

const LandingPage: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Hero Section */}
      <div className="relative h-screen">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://media.istockphoto.com/id/1417962792/photo/aerial-view-of-road-going-through-greenery-roads-through-the-green-forest-drone-landscape.jpg?s=612x612&w=0&k=20&c=327F9_zNv2cjFNHO69iXU642sR5fd4uJrU6fx9Dx-U4=')",
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 h-full flex flex-col items-center justify-center px-6 text-center">
          <motion.h1
            className="text-4xl md:text-6xl font-bold mb-4 text-white"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Discover Jharkhand
          </motion.h1>

          <motion.h2
            className="text-3xl md:text-5xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            <span className="bg-gradient-to-r from-green-500 via-yellow-300 to-accent bg-clip-text text-transparent">
              Nature, Culture & Beyond
            </span>
          </motion.h2>

          <motion.p
            className="text-xl text-white mb-10 max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Experience the rich heritage, breathtaking landscapes, and vibrant
            culture of Jharkhand through our smart tourism platform.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Link
              to="/itinerary"
              className="flex items-center space-x-2 bg-primary hover:bg-green-700 text-white px-6 py-3 rounded-lg font-medium"
            >
              <Calendar size={20} />
              <span>Plan My Trip</span>
              <ArrowRight size={18} />
            </Link>

            <Link
              to="/marketplace"
              className="flex items-center space-x-2 bg-accent hover:bg-accent-dark text-white px-6 py-3 rounded-lg font-medium"
            >
              <Store size={20} />
              <span>Explore Culture</span>
              <ArrowRight size={18} />
            </Link>
          </motion.div>
          {/* Bottom Stats */}
          <motion.div
            className="mt-16 grid grid-cols-3 gap-8 text-white"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            {/* Tourist Spots */}
            <div className="flex flex-col items-center bg-white/10 backdrop-blur-md p-4 rounded-lg">
              <MapPin size={28} className="mb-2" />
              <h3 className="text-2xl font-bold">50+</h3>
              <p className="text-sm">Tourist Spots</p>
            </div>

            {/* Happy Visitors */}
            <div className="flex flex-col items-center bg-white/10 backdrop-blur-md p-4 rounded-lg">
              <Users size={28} className="mb-2" />
              <h3 className="text-2xl font-bold">10K+</h3>
              <p className="text-sm">Happy Visitors</p>
            </div>

            {/* Ratings */}
            <div className="flex flex-col items-center bg-white/10 backdrop-blur-md p-4 rounded-lg">
              <Star size={28} className="mb-2" />
              <h3 className="text-2xl font-bold">4.8</h3>
              <p className="text-sm">Average Rating</p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* About Jharkhand Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Your Gateway to Jharkhand
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              From AI-powered itinerary planning to authentic cultural
              experiences, discover Jharkhand like never before.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Smart Itinerary Card */}
            <motion.div
              className="bg-white rounded-lg p-8 shadow-md"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ type: "spring", stiffness: 250, damping: 10 }}
              viewport={{ once: true }}
              whileHover={{
                y: -10,
                boxShadow: "0 15px 30px rgba(0,0,0,0.1)",
                scale: 1.02,
              }} // Card hover effect
            >
              <motion.div
                className="bg-green-500 p-4 rounded-xl w-16 h-16 flex items-center justify-center mb-6"
                whileHover={{ scale: 1.1 }} // Icon hover effect
                transition={{ type: "spring", stiffness: 200, damping: 10 }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 7V3m8 4V3m-9 8h.01M7 12h.01M7 15h.01M16 11h.01M17 12h.01M17 15h.01M13 11h.01M13 15h.01M14 12h.01M3 8h18V6a2 2 0 00-2-2H5a2 2 0 00-2 2v2zM3 8v11a2 2 0 002 2h14a2 2 0 002-2V8H3z"
                  />
                </svg>
              </motion.div>
              <h3 className="text-xl font-bold mb-3">Smart Itinerary</h3>
              <p className="text-gray-600 mb-4">
                AI-powered trip planning that creates personalized itineraries
                based on your interests and time.
              </p>
              <a
                href="/Itinerary"
                className="text-green-500 font-semibold flex items-center group"
              >
                Plan Now{" "}
                <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </a>
            </motion.div>

            {/* AR/VR Previews Card */}
            <motion.div
              className="bg-white rounded-lg p-8 shadow-md"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ type: "spring", stiffness: 250, damping: 10 }}
              viewport={{ once: true }}
              whileHover={{
                y: -10,
                boxShadow: "0 15px 30px rgba(0,0,0,0.1)",
                scale: 1.02,
              }} // Card hover effect
            >
              <motion.div
                className="bg-blue-500 p-4 rounded-xl w-16 h-16 flex items-center justify-center mb-6"
                whileHover={{ scale: 1.1 }} // Icon hover effect
                transition={{
                  type: "spring",
                  damping: 10,
                  stiffness: 200,
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </motion.div>
              <h3 className="text-xl font-bold mb-3">AR/VR Previews</h3>
              <p className="text-gray-600 mb-4">
                Experience destinations virtually before you visit with
                immersive AR/VR previews.
              </p>
              <a
                href="/places"
                className="text-blue-500 font-semibold flex items-center group"
              >
                Explore{" "}
                <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </a>
            </motion.div>

            {/* Local Marketplace Card */}
            <motion.div
              className="bg-white rounded-lg p-8 shadow-md"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ type: "spring", stiffness: 250, damping: 10 }}
              viewport={{ once: true }}
              whileHover={{
                y: -10,
                boxShadow: "0 15px 30px rgba(0,0,0,0.1)",
                scale: 1.02,
              }} // Card hover effect
            >
              <motion.div
                className="bg-accent-dark p-4 rounded-xl w-16 h-16 flex items-center justify-center mb-6"
                whileHover={{ scale: 1.1 }} // Icon hover effect
                transition={{ type: "spring", stiffness: 200, damping: 10 }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                  />
                </svg>
              </motion.div>
              <h3 className="text-xl font-bold mb-3">Local Marketplace</h3>
              <p className="text-gray-600 mb-4">
                Support local artisans and book authentic experiences with
                blockchain-verified authenticity.
              </p>
              <a
                href="/marketplace"
                className="text-accent-dark font-semibold flex items-center group"
              >
                Shop Now{" "}
                <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Destinations */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Featured Destinations
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Explore some of Jharkhand's most breathtaking locations that
              showcase the state's natural beauty and cultural significance.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div
              className="rounded-lg overflow-hidden shadow-md"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div className="relative group">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeiCPzrKKzQigpZhGKMqW2p2Uh6dUomJy71A&s"
                  alt="Netarhat Hills"
                  className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-0 group-hover:opacity-70 transition-opacity duration-300"></div>
              </div>
              <div className="p-6 bg-white">
                <h3 className="text-xl font-semibold mb-2">Netarhat</h3>
                <p className="text-gray-600 mb-4">
                  Known as the "Queen of Chotanagpur," Netarhat offers stunning
                  sunrise and sunset views, lush forests, and a peaceful retreat
                  from city life.
                </p>
                <Link
                  to="/places"
                  className="text-primary font-medium hover:underline flex items-center"
                >
                  Explore More
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 ml-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </Link>
              </div>
            </motion.div>

            <motion.div
              className="rounded-lg overflow-hidden shadow-md"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="relative group">
                <img
                  src="https://currentaffairs.adda247.com/wp-content/uploads/multisite/sites/5/2025/07/23111157/In-Which-State-is-Betla-National-Park-Located.png"
                  alt="Betla National Park"
                  className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-0 group-hover:opacity-70 transition-opacity duration-300"></div>
              </div>
              <div className="p-6 bg-white">
                <h3 className="text-xl font-semibold mb-2">
                  Betla National Park
                </h3>
                <p className="text-gray-600 mb-4">
                  Home to diverse wildlife including tigers, elephants, and
                  various bird species, Betla offers exciting safari experiences
                  in the heart of nature.
                </p>
                <Link
                  to="/places"
                  className="text-primary font-medium hover:underline flex items-center"
                >
                  Explore More
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 ml-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </Link>
              </div>
            </motion.div>

            <motion.div
              className="rounded-lg overflow-hidden shadow-md"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="relative group">
                <img
                  src="https://lh3.googleusercontent.com/gps-cs-s/AC9h4nqqbRnonW2sXZDhwvHfu9Z1OWMVPumzcoGC4iOb0AHUFJPDSkCvZutRBuwwSXPf0Cmg3w-tgal29ZbheKSkm1XgcbYXhVE_r76Cji3zpDqaI0iHraaaH9Ujz2iv0elG-FMiSWDM=w270-h312-n-k-no"
                  alt="Hundru Falls"
                  className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-0 group-hover:opacity-70 transition-opacity duration-300"></div>
              </div>
              <div className="p-6 bg-white">
                <h3 className="text-xl font-semibold mb-2">Hundru Falls</h3>
                <p className="text-gray-600 mb-4">
                  One of the highest waterfalls in Jharkhand, dropping from a
                  height of 98 meters, creating a spectacular cascade surrounded
                  by lush greenery.
                </p>
                <Link
                  to="/places"
                  className="text-primary font-medium hover:underline flex items-center"
                >
                  Explore More
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 ml-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </Link>
              </div>
            </motion.div>

            <motion.div
              className="rounded-lg overflow-hidden shadow-md"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              viewport={{ once: true }}
            >
              <div className="relative group">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4gh9yrRHWQmUT2fZZZ7Xcw37EeIOZH4zzcA&s"
                  alt="Patratu Valley"
                  className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-0 group-hover:opacity-70 transition-opacity duration-300"></div>
              </div>
              <div className="p-6 bg-white">
                <h3 className="text-xl font-semibold mb-2">Patratu Valley</h3>
                <p className="text-gray-600 mb-4">
                  A picturesque valley with winding roads, lush green forests,
                  and a beautiful dam. Perfect for road trips and enjoying
                  panoramic views of nature.
                </p>
                <Link
                  to="/places"
                  className="text-primary font-medium hover:underline flex items-center"
                >
                  Explore More
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 ml-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </Link>
              </div>
            </motion.div>

            <motion.div
              className="rounded-lg overflow-hidden shadow-md"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.9 }}
              viewport={{ once: true }}
            >
              <div className="relative group">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdibhkTVQT0Z7jghvxx6A6xySpT1s0Mcq9ug&s"
                  alt="Tribal Culture"
                  className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-0 group-hover:opacity-70 transition-opacity duration-300"></div>
              </div>
              <div className="p-6 bg-white">
                <h3 className="text-xl font-semibold mb-2">Tribal Heritage</h3>
                <p className="text-gray-600 mb-4">
                  Experience the rich tribal culture of Jharkhand through
                  traditional art, music, dance, and cuisine that has been
                  preserved for generations.
                </p>
                <Link
                  to="/places"
                  className="text-primary font-medium hover:underline flex items-center"
                >
                  Explore More
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 ml-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </Link>
              </div>
            </motion.div>
          </div>

          <div className="text-center mt-10">
            <Link to="/places" className="btn-primary inline-block">
              View All Destinations
            </Link>
          </div>
        </div>
      </section>

      {/* Our Mission */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <motion.div
              className="lg:w-1/2"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                Our Mission
              </h2>
              <div className="w-24 h-1 bg-primary mb-6"></div>
              <p className="text-lg text-gray-600 mb-6">
                At Smart Tourism Jharkhand, we're dedicated to showcasing the
                authentic beauty and culture of Jharkhand while promoting
                sustainable tourism practices that benefit local communities and
                preserve the state's natural resources.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-primary mr-2 flex-shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-gray-700">
                    Promoting lesser-known destinations to distribute tourism
                    benefits
                  </span>
                </li>
                <li className="flex items-start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-primary mr-2 flex-shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-gray-700">
                    Supporting local artisans and cultural preservation efforts
                  </span>
                </li>
                <li className="flex items-start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-primary mr-2 flex-shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-gray-700">
                    Creating authentic experiences that connect visitors with
                    local communities
                  </span>
                </li>
                <li className="flex items-start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-primary mr-2 flex-shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-gray-700">
                    Leveraging technology to enhance tourism experiences while
                    preserving tradition
                  </span>
                </li>
              </ul>
            </motion.div>

            <motion.div
              className="lg:w-1/2"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="grid grid-cols-2 gap-4">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdibhkTVQT0Z7jghvxx6A6xySpT1s0Mcq9ug&s"
                  alt="Tribal Culture"
                  className="rounded-lg shadow-md h-48 object-cover w-full"
                />
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4gh9yrRHWQmUT2fZZZ7Xcw37EeIOZH4zzcA&s"
                  alt="Patratu Valley"
                  className="rounded-lg shadow-md h-48 object-cover w-full"
                />
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6WTQcMnSv0yy8sLouyeN2erJ77N0b2C6YaQ&s"
                  alt="Local Handicrafts"
                  className="rounded-lg shadow-md h-48 object-cover w-full"
                />
                <img
                  src="https://img.rooftopapp.com/eyJidWNrZXQiOiJydC1iYWNrYm9uZS1pbWciLCJrZXkiOiJjbXMvaW1hZ2VfMTE5XzI0ZDMxZDI3NmEucG5nIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjo4MDAsImhlaWdodCI6NjAwLCJmaXQiOiJjb3ZlciJ9LCJ0b0Zvcm1hdCI6IndlYnAifX0="
                  alt="Tribal Art"
                  className="rounded-lg shadow-md h-48 object-cover w-full"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Stories from Our Visitors
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              See what fellow travelers are saying about their Jharkhand
              adventure.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Testimonial Card 1 */}
            <div className="bg-white rounded-xl shadow-lg p-8 transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
              <div className="flex items-start mb-4">
                <svg
                  className="w-10 h-10 text-green-500 mr-2 opacity-60"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M9.199 15.602c-.31-.309-.499-.728-.499-1.157 0-.429.189-.848.499-1.157L11.528 11h-3.329c-.482 0-.875-.393-.875-.875 0-.482.393-.875.875-.875h4.204c.31 0 .605.123.824.342l4.897 4.897c.31.31.488.729.488 1.157 0 .428-.178.847-.488 1.157l-4.204 4.204c-.31.31-.729.488-1.157.488-.428 0-.847-.178-1.157-.488L9.199 15.602z" />
                </svg>
                <svg
                  className="w-10 h-10 text-green-500 ml-auto opacity-60"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M14.801 8.398c.31.309.499.728.499 1.157 0 .429-.189.848-.499 1.157L12.472 13h3.329c.482 0 .875.393.875.875 0 .482-.393.875-.875.875h-4.204c-.31 0-.605-.123-.824-.342l-4.897-4.897c-.31-.31-.488-.729-.488-1.157 0-.428.178-.847.488-1.157l4.204-4.204c.31-.31.729-.488 1.157-.488.428 0 .847.178 1.157.488L14.801 8.398z" />
                </svg>
              </div>
              <p className="text-gray-700 italic text-lg mb-6">
                "An unforgettable experience! The natural beauty of Jharkhand is
                breathtaking. The AI planner made our trip seamless."
              </p>
              <div className="flex items-center">
                <div className="flex-1">
                  <p className="font-semibold text-gray-900">Priya Sharma</p>
                  <p className="text-sm text-gray-500">Mumbai</p>
                </div>
                <div className="flex text-yellow-400 text-2xl">
                  <span>★</span>
                  <span>★</span>
                  <span>★</span>
                  <span>★</span>
                  <span>★</span>
                </div>
              </div>
            </div>

            {/* Testimonial Card 2 */}
            <div className="bg-white rounded-xl shadow-lg p-8 transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
              <div className="flex items-start mb-4">
                <svg
                  className="w-10 h-10 text-green-500 mr-2 opacity-60"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M9.199 15.602c-.31-.309-.499-.728-.499-1.157 0-.429.189-.848.499-1.157L11.528 11h-3.329c-.482 0-.875-.393-.875-.875 0-.482.393-.875.875-.875h4.204c.31 0 .605.123.824.342l4.897 4.897c.31.31.488.729.488 1.157 0 .428-.178.847-.488 1.157l-4.204 4.204c-.31.31-.729.488-1.157.488-.428 0-.847-.178-1.157-.488L9.199 15.602z" />
                </svg>
                <svg
                  className="w-10 h-10 text-green-500 ml-auto opacity-60"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M14.801 8.398c.31.309.499.728.499 1.157 0 .429-.189.848-.499 1.157L12.472 13h3.329c.482 0 .875.393.875.875 0 .482-.393.875-.875.875h-4.204c-.31 0-.605-.123-.824-.342l-4.897-4.897c-.31-.31-.488-.729-.488-1.157 0-.428.178-.847.488-1.157l4.204-4.204c.31-.31.729-.488 1.157-.488.428 0 .847.178 1.157.488L14.801 8.398z" />
                </svg>
              </div>
              <p className="text-gray-700 italic text-lg mb-6">
                "I bought some Dokra art from the marketplace. The blockchain
                verification is a fantastic feature that ensures authenticity.
                So impressed!"
              </p>
              <div className="flex items-center">
                <div className="flex-1">
                  <p className="font-semibold text-gray-900">Rajiv Kumar</p>
                  <p className="text-sm text-gray-500">Delhi</p>
                </div>
                <div className="flex text-yellow-400 text-2xl">
                  <span>★</span>
                  <span>★</span>
                  <span>★</span>
                  <span>★</span>
                  <span>★</span>
                </div>
              </div>
            </div>

            {/* Testimonial Card 3 */}
            <div className="bg-white rounded-xl shadow-lg p-8 transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
              <div className="flex items-start mb-4">
                <svg
                  className="w-10 h-10 text-green-500 mr-2 opacity-60"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M9.199 15.602c-.31-.309-.499-.728-.499-1.157 0-.429.189-.848.499-1.157L11.528 11h-3.329c-.482 0-.875-.393-.875-.875 0-.482.393-.875.875-.875h4.204c.31 0 .605.123.824.342l4.897 4.897c.31.31.488.729.488 1.157 0 .428-.178.847-.488 1.157l-4.204 4.204c-.31.31-.729.488-1.157.488-.428 0-.847-.178-1.157-.488L9.199 15.602z" />
                </svg>
                <svg
                  className="w-10 h-10 text-green-500 ml-auto opacity-60"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M14.801 8.398c.31.309.499.728.499 1.157 0 .429-.189.848-.499 1.157L12.472 13h3.329c.482 0 .875.393.875.875 0 .482-.393.875-.875.875h-4.204c-.31 0-.605-.123-.824-.342l-4.897-4.897c-.31-.31-.488-.729-.488-1.157 0-.428.178-.847.488-1.157l4.204-4.204c.31-.31.729-.488 1.157-.488.428 0 .847.178 1.157.488L14.801 8.398z" />
                </svg>
              </div>
              <p className="text-gray-700 italic text-lg mb-6">
                "The AR/VR preview of Netarhat was spot-on. What we saw in the
                preview is exactly what we got. A must-visit destination!"
              </p>
              <div className="flex items-center">
                <div className="flex-1">
                  <p className="font-semibold text-gray-900">Anjali Mehta</p>
                  <p className="text-sm text-gray-500">Bengaluru</p>
                </div>
                <div className="flex text-yellow-400 text-2xl">
                  <span>★</span>
                  <span>★</span>
                  <span>★</span>
                  <span>★</span>
                  <span>★</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="flex h-screen items-center justify-center bg-gray-100">
        <div className="w-full max-w-4xl transform rounded-3xl bg-gradient-to-r from-[#2ecc71] to-[#3498db] p-12 text-center shadow-2xl transition-all duration-300 ease-in-out md:p-16 bg-green-500">
          <h2 className="text-4xl font-bold text-white md:text-5xl">
            Ready to Explore Jharkhand ?
          </h2>
          <p className="mt-4 text-xl text-white text-opacity-80 md:text-2xl">
            Let our AI assistant craft your perfect journey today.
          </p>
          <a
            href="/Itinerary"
            className="group mt-10 inline-flex transform items-center justify-center rounded-full bg-white px-10 py-4 font-semibold text-green-700 shadow-md transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-xl"
          >
            Plan My Trip
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="ml-3 h-6 w-6 transition-transform duration-300 ease-in-out group-hover:translate-x-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default LandingPage;
