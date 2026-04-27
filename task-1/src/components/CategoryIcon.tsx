import React from 'react';
import { Category } from '../mockData';

interface Props {
  category: Category;
  count: number;
}

const CategoryIcon: React.FC<Props> = ({ category, count }) => {
  const icon = () => {
    switch (category) {
      case 'Education':
      case 'Mentoring':
      case 'University Partner':
        return (
          // Graduation cap icon
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5">
            <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
            <path d="M6 12v5c3 3 9 3 12 0v-5" />
          </svg>
        );
      case 'Public Speaking':
      case 'Open Source':
      default:
        return (
          // Monitor / screen icon
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5">
            <rect x="2" y="3" width="20" height="14" rx="2" />
            <path d="M8 21h8M12 17v4" />
          </svg>
        );
    }
  };

  return (
    <div className="flex flex-col items-center text-blue-500">
      {icon()}
      <span className="text-xs font-semibold text-blue-500 mt-0.5">{count}</span>
    </div>
  );
};

export default CategoryIcon;

