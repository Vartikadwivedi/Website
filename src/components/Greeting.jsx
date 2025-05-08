// src/components/Greeting.jsx
import React, { useEffect, useState } from "react";

const Greeting = () => {
  const [time, setTime] = useState(new Date());
  const hours = time.getHours();

  const getGreeting = () => {
    if (hours < 12) return "Good Morning 🌅";
    if (hours < 18) return "Good Afternoon ☀️";
    return "Good Evening 🌙";
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="text-center p-4 mb-8">
      <h2 className="text-3xl font-bold mb-2">{getGreeting()}
      <p className="text-lg text-gray-600 dark:text-gray-300">
       {time.toLocaleTimeString()}
      </p> </h2>
    </div>
  );
};

export default Greeting;
