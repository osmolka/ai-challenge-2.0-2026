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
    <div className="group relative flex flex-col items-center text-brandPrimary" title={category}>
      {icon()}
      <span className="mt-0.5 text-xs font-semibold text-brandPrimary">{count}</span>
      <div className="pointer-events-none absolute left-1/2 top-full z-20 mt-2 -translate-x-1/2 whitespace-nowrap rounded-md border border-brandSlate/20 bg-white px-2.5 py-1 text-[11px] font-medium text-brandInk opacity-0 shadow-[0_4px_12px_rgba(0,0,0,0.1)] transition-[opacity,transform] duration-200 group-hover:translate-y-0 group-hover:opacity-100 translate-y-1">
        {category}
      </div>
    </div>
  );
};

export default CategoryIcon;

