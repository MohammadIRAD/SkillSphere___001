
import React from 'react';

interface CardProps {
  title: string;
  children: React.ReactNode;
  imageUrl?: string;
  footerContent?: React.ReactNode;
  className?: string;
}

const Card: React.FC<CardProps> = ({ title, children, imageUrl, footerContent, className = '' }) => {
  return (
    <div className={`bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 ease-in-out flex flex-col ${className}`}>
      {imageUrl && <img className="h-48 w-full object-cover" src={imageUrl} alt={title} />}
      <div className="p-6 flex-grow">
        <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">{title}</h3>
        <div className="text-gray-600 dark:text-gray-300">{children}</div>
      </div>
      {footerContent && (
        <div className="px-6 py-4 bg-gray-50 dark:bg-gray-700 border-t border-gray-200 dark:border-gray-600">
          {footerContent}
        </div>
      )}
    </div>
  );
};

export default Card;
