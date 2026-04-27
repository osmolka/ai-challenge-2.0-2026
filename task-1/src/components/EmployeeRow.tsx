import React, { useState } from 'react';
import { Employee, Category } from '../mockData';
import CategoryIcon from './CategoryIcon';

interface Props {
  employee: Employee;
  rank: number;
}

const CATEGORY_BADGE_COLORS: Record<Category, string> = {
  'Education': 'bg-gray-100 text-gray-700',
  'Public Speaking': 'bg-gray-100 text-gray-700',
  'University Partner': 'bg-gray-100 text-gray-700',
  'Mentoring': 'bg-gray-100 text-gray-700',
  'Open Source': 'bg-gray-100 text-gray-700',
};

const EmployeeRow: React.FC<Props> = ({ employee, rank }) => {
  const [expanded, setExpanded] = useState(false);

  const categoryEntries = Object.entries(employee.categoryCounts) as [Category, number][];

  return (
    <div className={`bg-white rounded-2xl shadow-sm mb-3 overflow-hidden transition-all ${expanded ? 'ring-2 ring-blue-400' : ''}`}>
      {/* Main row */}
      <div className="flex items-center px-5 py-4 gap-4">
        {/* Rank */}
        <div className="w-8 text-center">
          <span className="text-xl font-bold text-slate-400">{rank}</span>
        </div>

        {/* Avatar */}
        <img
          src={employee.avatar}
          alt={employee.name}
          className="w-12 h-12 rounded-full object-cover bg-gray-200 shrink-0"
        />

        {/* Name & title */}
        <div className="flex-1 min-w-0">
          <p className="font-semibold text-gray-800 truncate">{employee.name}</p>
          <p className="text-sm text-gray-500 truncate">
            {employee.title} ({employee.department})
          </p>
        </div>

        {/* Category counts */}
        <div className="hidden sm:flex items-center gap-4 mr-4">
          {categoryEntries.map(([cat, count]) => (
            <CategoryIcon key={cat} category={cat} count={count} />
          ))}
        </div>

        {/* Divider */}
        <div className="hidden sm:block w-px h-10 bg-gray-200" />

        {/* Total score */}
        <div className="flex flex-col items-end mr-3">
          <span className="text-[10px] font-semibold text-gray-400 uppercase tracking-wide leading-none mb-1">Total</span>
          <div className="flex items-center gap-1">
            <svg className="w-6 h-6 text-blue-500" viewBox="0 0 20 20" fill="currentColor">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <span className="text-2xl font-bold text-blue-500">{employee.totalScore}</span>
          </div>
        </div>

        {/* Expand button */}
        <button
          onClick={() => setExpanded(prev => !prev)}
          className={`w-9 h-9 rounded-full flex items-center justify-center border transition-colors shrink-0 ${
            expanded
              ? 'bg-blue-50 border-blue-300 text-blue-500'
              : 'bg-gray-100 border-gray-200 text-gray-400 hover:bg-gray-200'
          }`}
        >
          <svg
            className={`w-4 h-4 transition-transform ${expanded ? 'rotate-180' : ''}`}
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </button>
      </div>

      {/* Mobile category counts */}
      <div className="sm:hidden flex gap-4 px-5 pb-3">
        {categoryEntries.map(([cat, count]) => (
          <CategoryIcon key={cat} category={cat} count={count} />
        ))}
      </div>

      {/* Expanded activities */}
      {expanded && (
        <div className="border-t border-gray-100 px-5 py-4">
          <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">Recent Activity</p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-100">
                  <th className="text-left text-xs font-bold text-gray-400 uppercase tracking-widest pb-2 pr-4 w-full">Activity</th>
                  <th className="text-left text-xs font-bold text-gray-400 uppercase tracking-widest pb-2 pr-4 whitespace-nowrap">Category</th>
                  <th className="text-left text-xs font-bold text-gray-400 uppercase tracking-widest pb-2 pr-4 whitespace-nowrap">Date</th>
                  <th className="text-right text-xs font-bold text-gray-400 uppercase tracking-widest pb-2 whitespace-nowrap">Points</th>
                </tr>
              </thead>
              <tbody>
                {employee.activities.map(act => (
                  <tr key={act.id} className="border-b border-gray-50 last:border-0">
                    <td className="py-3 pr-4 text-gray-800 font-medium">{act.name}</td>
                    <td className="py-3 pr-4">
                      <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${CATEGORY_BADGE_COLORS[act.category]}`}>
                        {act.category}
                      </span>
                    </td>
                    <td className="py-3 pr-4 text-gray-500 whitespace-nowrap">{act.date}</td>
                    <td className="py-3 text-right font-bold text-blue-500">+{act.points}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
};

export default EmployeeRow;

