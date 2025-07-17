import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import background from '../../assets/bg.png';
import bookStack from '../../assets/image.png';
import useAuthStore from '../../store/useAuthstore'; 

const LoginPage = () => {
  const [userInput, setUserInput] = useState('');
  const navigate = useNavigate();

  const handleLogin = async () => {
    if (!userInput.trim()) {
      alert('Please enter a valid mobile number or email');
      return;
    }

    try {
      const response = await fetch('http://localhost:5000/api/auth/check-user', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ userInput }),
      });

      const data = await response.json();

      if (response.ok && data.exists) {
        localStorage.setItem('token', data.token);
        navigate('/home');
      } else {
        localStorage.setItem('token', "register");
        navigate('/NewUserPrompt');
      }
    } catch (err) {
      alert('Something went wrong while checking user');
    }
  };

  return (
    <div className="relative min-h-screen w-full">
      <div
        className="fixed inset-0 bg-cover bg-center bg-no-repeat bg-fixed z-[-1]"
        style={{ backgroundImage: `url(${background})` }}
      />

      <div className="flex items-center justify-center min-h-screen w-full">
        <div className="flex flex-col md:flex-row bg-white bg-opacity-90 rounded-md shadow-lg backdrop-blur-md overflow-hidden max-w-[700px] w-full mx-4">
          <div className="md:block hidden">
            <img
              src={bookStack}
              alt="Book Stack"
              className="h-full w-[300px] object-cover"
            />
          </div>

          <div className="p-6 sm:p-8 w-full md:w-[340px] text-center flex flex-col justify-center">
            <h2 className="text-lg font-semibold text-primary mb-4">Welcome to QuizTales</h2>

            <h3 className="text-sm font-semibold mb-1 text-black">Sign in or create account</h3>
            <label className="block text-sm text-black mb-2" htmlFor="userInput">
              Enter Mobile number or email:
            </label>

            <input
              type="text"
              id="userInput"
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
              className="w-full px-4 py-2 border border-primary rounded-md mb-4 focus:outline-none focus:ring-2 focus:ring-primary"
              placeholder="Email or Mobile number"
            />

            <button
              onClick={handleLogin}
              className="w-full py-2 rounded-full transition text-white"
              style={{ backgroundColor: '#a30bfb' }}
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
