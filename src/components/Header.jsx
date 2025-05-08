import React from 'react';
import profileImage from "../assets/profile.jpg";

const Header = ({ darkMode, setDarkMode }) => {
  return (
    <header className="mb-12 flex items-center justify-between p-8">
      <div className="flex items-center gap-6">
        <img
          src={profileImage} // Ensure this path matches your file structure
          alt="Profile"
          className="w-20 h-20 sm:w-24 sm:h-24 lg:w-32 lg:h-32 rounded-full object-cover"
        />
        <div>
          <h1 className="text-4xl font-bold mb-2">Sumit Singh</h1>
          <p className="text-lg">Senior AI/ML Engineer</p>
        </div>
      </div>

      <button
        onClick={() => setDarkMode(!darkMode)}
        className="px-4 py-2 text-sm rounded-md bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white"
      >
        {darkMode ? '☀️ Light Mode' : '🌙 Dark Mode'}
      </button>
    </header>
  );
};

export default Header;
