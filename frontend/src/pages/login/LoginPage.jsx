import React from 'react';
import background from '../../assets/bg.png'; // Background image
import bookStack from '../../assets/image.png'; // Book image

const LoginPage = () => {
  return (
    <div className="relative min-h-screen w-full">
      {/* Fixed fullscreen background */}
      <div
        className="fixed inset-0 bg-cover bg-center bg-no-repeat bg-fixed z-[-1]"
        style={{ backgroundImage: `url(${background})` }}
      />

      {/* Main content container */}
      <div className="flex items-center justify-center min-h-screen w-full">
        <div className="flex flex-col md:flex-row bg-white bg-opacity-90 rounded-md shadow-lg backdrop-blur-md overflow-hidden max-w-[700px] w-full mx-4">
          
          {/* Book Image */}
          <div className="md:block hidden">
            <img
              src={bookStack}
              alt="Book Stack"
              className="h-full w-[300px] object-cover"
            />
          </div>

          {/* Login Form */}
          <div className="p-6 sm:p-8 w-full md:w-[320px] text-center flex flex-col justify-center">
            <h2 className="text-lg font-semibold text-primary mb-4">
              Welcome to QuizTales
            </h2>

            <h3 className="text-sm font-semibold mb-1 text-black">
              Sign in or create account
            </h3>
            <label className="block text-sm text-black mb-2" htmlFor="userInput">
              Enter Mobile number or email:
            </label>

            <input
              type="text"
              id="userInput"
              className="w-full px-4 py-2 border border-primary rounded-md mb-4 focus:outline-none focus:ring-2 focus:ring-primary"
              placeholder="Email or Mobile number"
            />

            <button
              className="w-full py-2 rounded-full transition text-white"
              style={{
                backgroundColor: '#a30bfb',
              }}
              onMouseOver={(e) => (e.target.style.backgroundColor = '#8d05db')}
              onMouseOut={(e) => (e.target.style.backgroundColor = '#a30bfb')}
            >
              Continue
            </button>

            <p className="text-xs text-primary mt-3">
              By continuing you agree to Quiz Tales’s privacy policy
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
