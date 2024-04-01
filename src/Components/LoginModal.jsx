import React, { useState } from 'react';
import axios from 'axios';

function LoginModal({ view, onClose }) {
  const [currentView, setCurrentView] = useState(view); 
  const apiUrl = 'http://localhost:4000';

  const handleLogin = (event) => {
    event.preventDefault();
    const email = event.target.elements['login-email'].value;
    const password = event.target.elements['login-password'].value;

    axios.post(`${apiUrl}/login`, { email, password })
      .then(res => {
        console.log('Login successful:', res.data);
        onClose(); 
      })
      .catch(error => {
        console.error('Error logging in:', error);
      });
  };

  const handleSignup = (event) => {
    event.preventDefault();
    const firstName = event.target.elements['signup-first-name'].value;
    const lastName = event.target.elements['signup-last-name'].value;
    const email = event.target.elements['signup-email'].value;
    const password = event.target.elements['signup-password'].value;
    const confirmPassword = event.target.elements['signup-confirm-password'].value;

    if(password !== confirmPassword) {
      console.error('Passwords not match');
      return; 
    }

    axios.post(`${apiUrl}/api/auth/signup`, { firstName, lastName, email, password })
      .then(res => {
        console.log('Signup successful:', res.data);
        onClose(); 
      })
      .catch(error => {
        console.error('Error signing up:', error);
      });
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex justify-center items-center">
      <div className="bg-white p-6 rounded-lg shadow-lg w-1/2">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-semibold">{currentView === 'login' ? 'Login' : 'Sign Up'}</h2>
          <button onClick={onClose} className="text-black font-semibold text-lg">X</button>
        </div>
        <div className="mt-4">
          {currentView === 'login' ? (
            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <label htmlFor="login-email" className="block text-sm font-medium text-gray-700">Email</label>
                <input type="email" id="login-email" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" required />
              </div>
              <div>
                <label htmlFor="login-password" className="block text-sm font-medium text-gray-700">Password</label>
                <input type="password" id="login-password" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" required />
              </div>
              <div className="flex justify-between items-center">
                <button type="submit" className="bg-cyan-500 hover:bg-cyan-700 text-white font-bold py-2 px-4 rounded">Login</button>
                <button type="button" onClick={() => setCurrentView('signup')} className="text-sm text-cyan-700 hover:underline">Don't have an account? Sign Up</button>
              </div>
            </form>
          ) : (
            <form onSubmit={handleSignup} className="space-y-4">
              <div className="flex gap-4">
                <div className="flex-1">
                  <label htmlFor="signup-first-name" className="block text-sm font-medium text-gray-700">First Name</label>
                  <input type="text" id="signup-first-name" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" required />
                </div>
                <div className="flex-1">
                  <label htmlFor="signup-last-name" className="block text-sm font-medium text-gray-700">Last Name</label>
                  <input type="text" id="signup-last-name" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" required />
                </div>
              </div>
              <div>
                <label htmlFor="signup-email" className="block text-sm font-medium text-gray-700">Email Address</label>
                <input type="email" id="signup-email" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" required />
              </div>
              {/* <fieldset className="mt-4">
                <legend className="text-sm font-medium text-gray-700">Gender</legend>
                <div className="mt-2 space-x-4">
                  <label className="inline-flex items-center">
                    <input type="radio" name="gender" value="male" className="form-radio" />
                    <span className="ml-2">Male</span>
                  </label>
                  <label className="inline-flex items-center">
                    <input type="radio" name="gender" value="female" className="form-radio" />
                    <span className="ml-2">Female</span>
                  </label>
                </div>
              </fieldset>
              <div>
                <label htmlFor="signup-phone" className="block text-sm font-medium text-gray-700">Phone Number</label>
                <input type="text" id="signup-phone" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" required />
              </div> */}
              <div>
                <label htmlFor="signup-password" className="block text-sm font-medium text-gray-700">Password</label>
                <input type="password" id="signup-password" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" required />
              </div>
              <div>
                <label htmlFor="signup-confirm-password" className="block text-sm font-medium text-gray-700">Confirm Password</label>
                <input type="password" id="signup-confirm-password" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" required />
              </div>
              <div className="flex justify-between items-center">
                <button type="submit" className="bg-cyan-500 hover:bg-cyan-700 text-white font-bold py-2 px-4 rounded">Sign Up</button>
                <button type="button" onClick={() => setCurrentView('login')} className="text-sm text-cyan-700 hover:underline">Already have an account? Login</button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

export default LoginModal;
