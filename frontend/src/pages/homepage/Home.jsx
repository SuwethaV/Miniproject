import React from 'react';
import bg from '../../assets/bg.png';

const Home = () => {
  return (
    <div className="font-sans min-h-screen bg-cover bg-center relative" style={{ backgroundImage: `url(${bg})` }}>
      {/* Violet Overlay over background image */}
      <div className="absolute inset-0 bg-primary opacity-70 z-0"></div>

      {/* Page Content */}
      <div className="relative z-10">

        {/* Navbar */}
        <nav className="bg-primary bg-opacity-80 text-white px-6 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold">Book Haven</div>
          <ul className="flex gap-6 text-sm">
            <li><a href="#" className="hover:text-yellow-300">Home</a></li>
            <li><a href="#" className="hover:text-yellow-300">Store</a></li>
            <li><a href="#" className="hover:text-yellow-300">Discounts & Rewards</a></li>
            <li><a href="#" className="hover:text-yellow-300">Bot</a></li>
          </ul>
          <div className="space-x-2">
            <button className="border px-4 py-1 rounded hover:bg-white hover:text-primary">Login</button>
            <button className="border px-4 py-1 rounded hover:bg-white hover:text-primary">Sign Up</button>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="text-white px-6 py-20 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Welcome to Our Book Store</h1>
          <p className="text-lg max-w-2xl mx-auto mb-6">
            Explore amazing books and enjoy personalized discounts, rewards, and chatbot services to enhance your reading journey.
          </p>
          <button className="bg-yellow-400 text-primary font-semibold px-6 py-3 rounded hover:bg-yellow-300">
            Explore Now
          </button>
        </section>

        {/* Features Section */}
        <section className="px-6 py-16 grid md:grid-cols-3 gap-8 text-center backdrop-blur-sm">
          <div className="bg-white bg-opacity-80 p-6 rounded-xl shadow-md">
            <div className="text-5xl mb-4">🏷️</div>
            <h3 className="text-xl font-semibold mb-2">Personalized Discounts</h3>
            <p>Get personalized discounts tailored just for you!</p>
          </div>
          <div className="bg-white bg-opacity-80 p-6 rounded-xl shadow-md">
            <div className="text-5xl mb-4">🧠</div>
            <h3 className="text-xl font-semibold mb-2">Quiz Rewards</h3>
            <p>Take engaging quizzes and earn fantastic rewards!</p>
          </div>
          <div className="bg-white bg-opacity-80 p-6 rounded-xl shadow-md">
            <div className="text-5xl mb-4">🤖</div>
            <h3 className="text-xl font-semibold mb-2">Intelligent Support</h3>
            <p>Get real-time help from our intelligent chatbot.</p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;
