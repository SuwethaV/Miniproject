// src/pages/login/NewUserPrompt.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import background from '../../assets/bg.png';
import { useEffect } from 'react';

const NewUserPrompt = () => {
 
  const navigate = useNavigate()
  useEffect(() => {
    const token = localStorage.getItem('token') || ''
    if (!token) navigate('/login', { replace: true })
  }, [])

  return (
    <div className="relative min-h-screen w-full">
      <div
        className="fixed inset-0 bg-cover bg-center bg-no-repeat bg-fixed"
        style={{ backgroundImage: `url(${background})` }}
      />
      <div className="relative flex items-center justify-center min-h-screen">
        <div className="bg-white bg-opacity-90 border border-[#a30bfb] rounded-xl p-6 sm:p-8 max-w-sm w-[99%] text-center shadow-xl">
          <h1 className="text-2xl font-bold text-[#a30bfb] mb-6">Quiz Tales</h1>
          <h2 className="text-lg font-semibold text-[#a30bfb] mb-2">Looks like you’re a new user</h2>
          <p className="text-sm text-[#a30bfb] mb-6">Let’s create a new account using your mobile number</p>
          <button
            onClick={() => window.location.href = '/Register'}

            className="w-full py-2 rounded-lg font-semibold text-white transition"
            style={{ backgroundColor: '#a30bfb' }}
            onMouseOver={(e) => (e.target.style.backgroundColor = '#8d05db')}
            onMouseOut={(e) => (e.target.style.backgroundColor = '#a30bfb')}
          >
            Proceed
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewUserPrompt;
