import React, { useState } from 'react';
import background from '../../assets/bg.png';

const CreateAccount = () => {
  const [form, setForm] = useState({ name: '', email: '', mobile: '', password: '' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

 const handleSubmit = async () => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const mobileRegex = /^[6-9]\d{9}$/;

  if (!emailRegex.test(form.email)) {
    alert('Please enter a valid email address');
    return;
  }

  if (!mobileRegex.test(form.mobile)) {
    alert('Please enter a valid 10-digit Indian mobile number');
    return;
  }

  if (form.password.length < 6) {
    alert('Password must be at least 6 characters');
    return;
  }

  try {
    const response = await fetch('http://localhost:5000/api/auth/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    });

    const data = await response.json();

    if (response.ok) {
      alert('User registered successfully!');
    } else {
      alert(data.message || 'Registration failed');
    }
  } catch (err) {
    alert('Something went wrong');
  }
};

  return (
    <div className="relative min-h-screen w-full">
      {/* Background */}
      <div
        className="fixed inset-0 bg-cover bg-center bg-no-repeat bg-fixed z-[-1]"
        style={{ backgroundImage: `url(${background})` }}
      />

      {/* Main Form */}
      <div className="flex items-center justify-center min-h-screen w-full">
        <div className="bg-white bg-opacity-90 border border-[#a30bfb] rounded-xl px-6 py-8 sm:p-10 max-w-md w-[90%] text-center shadow-xl">
          <h1 className="text-2xl font-bold text-[#a30bfb] mb-6">Quiz Tales</h1>
          <h2 className="text-lg font-semibold text-[#a30bfb] mb-4">Create Account</h2>

          {/* Mobile */}
          <div className="text-left mb-4">
            <label className="block text-sm font-semibold text-[#a30bfb] mb-1">Mobile Number:</label>
            <div className="flex gap-2">
              <select className="border border-gray-300 rounded-md px-3 py-2 text-sm">
                <option>IN +91</option>
              </select>
              <input
                name="mobile"
                type="text"
                placeholder="Mobile Number"
                value={form.mobile}
                onChange={handleChange}
                className="flex-1 px-3 py-2 border border-[#a30bfb] rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-[#a30bfb]"
              />
            </div>
          </div>

          {/* Name */}
          <div className="text-left mb-4">
            <label className="block text-sm font-semibold text-[#a30bfb] mb-1">Your Name:</label>
            <input
              name="name"
              type="text"
              placeholder="Enter your First Name"
              value={form.name}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-[#a30bfb] rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-[#a30bfb]"
            />
          </div>

          {/* Email */}
          <div className="text-left mb-4">
            <label className="block text-sm font-semibold text-[#a30bfb] mb-1">Email ID:</label>
            <input
              name="email"
              type="email"
              placeholder="Enter your Email"
              value={form.email}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-[#a30bfb] rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-[#a30bfb]"
            />
          </div>

          {/* Password */}
          <div className="text-left mb-2">
            <label className="block text-sm font-semibold text-[#a30bfb] mb-1">Password:</label>
            <input
              name="password"
              type="password"
              placeholder="Password"
              value={form.password}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-[#a30bfb] rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-[#a30bfb]"
            />
          </div>

          <p className="text-xs text-blue-600 flex items-center gap-1 mt-1">
            <span className="text-base">ℹ️</span> Password must be at least 6 characters
          </p>

          <button
            onClick={handleSubmit}
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
