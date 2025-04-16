import React from 'react';

export const Button = ({ children, variant, className }) => {
  const variantClass = variant === 'outline' ? 'border border-gray-500 text-gray-700' : 'bg-blue-500 text-white';

  return (
    <button className={`px-4 py-2 rounded-md ${variantClass} ${className}`}>
      {children}
    </button>
  );
};
