import React from 'react';
import background from '../../assets/bg.png'; // background image

const CreateAccount = () => {
  return (
    <div className="relative min-h-screen w-full">
      {/* Fixed Background */}
      <div
        className="fixed inset-0 bg-cover bg-center bg-no-repeat bg-fixed z-[-1]"
        style={{ backgroundImage: `url(${background})` }}
      />

      {/* Main Content */}
      <div className="flex items-center justify-center min-h-screen w-full">
        <div className="bg-white bg-opacity-90 border border-[#a30bfb] rounded-xl px-6 py-8 sm:p-10 max-w-md w-[90%] text-center shadow-xl">
          <h1 className="text-2xl font-bold text-[#a30bfb] mb-6">Quiz Tales</h1>
          <h2 className="text-lg font-semibold text-[#a30bfb] mb-4">Create Account</h2>

          {/* Mobile Number Section */}
          <div className="text-left mb-4">
            <label className="block text-sm font-semibold text-[#a30bfb] mb-1">
              Mobile Number:
            </label>
            <div className="flex gap-2">
              <select className="border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none">
                <option>IN +91</option>
                <option>US +1</option>
                <option>UK +44</option>
              </select>
              <input
                type="text"
                placeholder="Mobile Number"
                className="flex-1 px-3 py-2 border border-[#a30bfb] rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-[#a30bfb]"
              />
            </div>
          </div>

          {/* Name */}
          <div className="text-left mb-4">
            <label className="block text-sm font-semibold text-[#a30bfb] mb-1">
              Your Name:
            </label>
            <input
              type="text"
              placeholder="Enter your First Name"
              className="w-full px-3 py-2 border border-[#a30bfb] rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-[#a30bfb]"
            />
          </div>

          {/* Password */}
          <div className="text-left mb-2">
            <label className="block text-sm font-semibold text-[#a30bfb] mb-1">
              Password:
            </label>
            <input
              type="password"
              placeholder="Password"
              className="w-full px-3 py-2 border border-[#a30bfb] rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-[#a30bfb]"
            />
          </div>

          {/* Helper Text */}
          <p className="text-xs text-blue-600 flex items-center gap-1 mt-1">
            <span className="text-base">ℹ️</span>
            Password must be atleast 6 characters
          </p>

          {/* Submit Button */}
          <button
            className="mt-6 w-full py-2 rounded-lg font-semibold text-white transition"
            style={{ backgroundColor: '#a30bfb' }}
            onMouseOver={(e) => (e.target.style.backgroundColor = '#8d05db')}
            onMouseOut={(e) => (e.target.style.backgroundColor = '#a30bfb')}
          >
            Verify mobile number
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateAccount;
