import React, { useEffect, useState } from "react";

const FlowerAnimation = () => {
  const [flowers, setFlowers] = useState([]);

  useEffect(() => {
    const newFlowers = Array.from({ length: 10 }).map((_, index) => ({
      id: index,
      left: `${Math.random() * 100}vw`,
      delay: `${Math.random() * 5}s`,
    }));
    setFlowers(newFlowers);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden">
      {flowers.map((flower) => (
        <span
          key={flower.id}
          className="flower"
          style={{
            left: flower.left,
            animationDelay: flower.delay,
          }}
        >
          🌸
        </span>
      ))}
    </div>
  );
};

export default FlowerAnimation;
