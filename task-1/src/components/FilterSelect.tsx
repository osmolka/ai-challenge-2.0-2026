import React from 'react';

interface Props {
  value: string;
  options: string[];
  onChange: (val: string) => void;
}

const FilterSelect: React.FC<Props> = ({ value, options, onChange }) => {
  return (
    <div className="relative w-full min-w-0 sm:min-w-[150px] sm:w-auto">
      <select
        value={value}
        onChange={e => onChange(e.target.value)}
        className="h-11 w-full cursor-pointer appearance-none rounded-[2px] border border-[rgb(55,55,55)] bg-[rgb(235,235,237)] px-4 pr-10 text-[14px] text-black shadow-sm transition-colors hover:border-[rgb(55,55,55)] focus:border-[rgb(55,55,55)] focus:outline-none"
      >
        {options.map(opt => (
          <option key={opt} value={opt}>{opt}</option>
        ))}
      </select>
      <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-black/70">
        <svg className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
        </svg>
      </div>
    </div>
  );
};

export default FilterSelect;
