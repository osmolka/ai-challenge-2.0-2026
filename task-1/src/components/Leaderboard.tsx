import React, { useState, useMemo } from 'react';
import {
  employees,
  YEARS,
  QUARTERS,
  CATEGORY_FILTERS,
  filterEmployees,
} from '../mockData';
import FilterSelect from './FilterSelect';
import PodiumCard from './PodiumCard';
import EmployeeRow from './EmployeeRow';

const Leaderboard: React.FC = () => {
  const [year, setYear] = useState('All Years');
  const [quarter, setQuarter] = useState('All Quarters');
  const [category, setCategory] = useState('All Categories');
  const [search, setSearch] = useState('');

  const filtered = useMemo(
    () => filterEmployees(employees, year, quarter, category, search),
    [year, quarter, category, search]
  );

  const top3 = filtered.slice(0, 3);
  const rest = filtered.slice(3);

  return (
    <div className="min-h-screen bg-gray-100 px-4 py-8">
      <div className="max-w-4xl mx-auto">

        {/* Header */}
        <div className="mb-6">
          <h1 className="text-3xl font-black text-gray-900">Leaderboard</h1>
          <p className="text-gray-500 mt-1">Top performers based on contributions and activity</p>
        </div>

        {/* Filters */}
        <div className="bg-white rounded-2xl shadow-sm p-4 mb-8 flex flex-wrap gap-3 items-center">
          <FilterSelect value={year} options={YEARS} onChange={setYear} />
          <FilterSelect value={quarter} options={QUARTERS} onChange={setQuarter} />
          <FilterSelect value={category} options={CATEGORY_FILTERS} onChange={setCategory} />
          <div className="flex-1 relative min-w-[180px]">
            <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none text-gray-400">
              <svg className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
              </svg>
            </div>
            <input
              type="text"
              placeholder="Search employee..."
              value={search}
              onChange={e => setSearch(e.target.value)}
              className="w-full bg-gray-50 border border-gray-200 rounded-lg pl-9 pr-4 py-2 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-300"
            />
          </div>
        </div>

        {/* Top 3 Podium */}
        {top3.length >= 1 && (
          <div className="mb-10">
            <div className="flex justify-center items-end gap-2 sm:gap-6">
              {top3[1] && (
                <PodiumCard employee={top3[1]} place={2} />
              )}
              {top3[0] && (
                <PodiumCard employee={top3[0]} place={1} />
              )}
              {top3[2] && (
                <PodiumCard employee={top3[2]} place={3} />
              )}
            </div>
          </div>
        )}

        {/* Employee List */}
        <div>
          {filtered.map((emp, idx) => (
            <EmployeeRow key={emp.id} employee={emp} rank={idx + 1} />
          ))}

          {filtered.length === 0 && (
            <div className="text-center py-16 text-gray-400">
              <svg className="w-12 h-12 mx-auto mb-4 opacity-30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <p className="text-lg font-medium">No employees found</p>
              <p className="text-sm mt-1">Try adjusting your filters or search query</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Leaderboard;

