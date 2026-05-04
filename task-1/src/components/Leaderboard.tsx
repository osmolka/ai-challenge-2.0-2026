import React, { useEffect, useMemo, useState } from 'react';
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
  const [mobileFilterKey, setMobileFilterKey] = useState<'year' | 'quarter' | 'category' | null>(null);

  const mobileFilterConfig = {
    year: { label: 'Year', value: year, options: YEARS, onChange: setYear },
    quarter: { label: 'Quarter', value: quarter, options: QUARTERS, onChange: setQuarter },
    category: { label: 'Category', value: category, options: CATEGORY_FILTERS, onChange: setCategory },
  };

  const activeMobileFilter = mobileFilterKey ? mobileFilterConfig[mobileFilterKey] : null;

  useEffect(() => {
    if (!mobileFilterKey) {
      document.body.style.overflow = '';
      return;
    }

    document.body.style.overflow = 'hidden';

    const onEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setMobileFilterKey(null);
      }
    };

    window.addEventListener('keydown', onEscape);
    return () => {
      window.removeEventListener('keydown', onEscape);
      document.body.style.overflow = '';
    };
  }, [mobileFilterKey]);

  const filtered = useMemo(
    () => filterEmployees(employees, year, quarter, category, search),
    [year, quarter, category, search]
  );

  const top3 = filtered.slice(0, 3);

  return (
    <div className="min-h-screen bg-[#f8fafc] px-3 py-5 sm:px-4 sm:py-8">
      <div className="mx-auto max-w-4xl lg:max-w-[1236px]">

        {/* Header */}
        <div className="mb-5 sm:mb-6">
          <h1 className="text-[2.1rem] font-black leading-none text-brandInk sm:text-3xl">Leaderboard</h1>
          <p className="mt-1 text-brandMuted">Top performers based on contributions and activity</p>
        </div>

        {/* Filters */}
        <div className="mb-8 flex flex-col items-stretch gap-2 rounded-2xl border border-brandSlate/40 bg-white p-4 shadow-[0_2px_8px_rgba(15,23,42,0.08)] sm:flex-row sm:flex-wrap sm:items-center sm:gap-3 sm:p-5">
          <div className="sm:hidden">
            <button
              type="button"
              onClick={() => setMobileFilterKey('year')}
              className="flex h-11 w-full items-center justify-between rounded-[2px] border border-[rgb(55,55,55)] bg-[rgb(235,235,237)] px-4 text-[14px] text-black"
            >
              <span>{year}</span>
              <svg className="h-4 w-4 text-black/70" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
          </div>
          <div className="sm:hidden">
            <button
              type="button"
              onClick={() => setMobileFilterKey('quarter')}
              className="flex h-11 w-full items-center justify-between rounded-[2px] border border-[rgb(55,55,55)] bg-[rgb(235,235,237)] px-4 text-[14px] text-black"
            >
              <span>{quarter}</span>
              <svg className="h-4 w-4 text-black/70" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
          </div>
          <div className="sm:hidden">
            <button
              type="button"
              onClick={() => setMobileFilterKey('category')}
              className="flex h-11 w-full items-center justify-between rounded-[2px] border border-[rgb(55,55,55)] bg-[rgb(235,235,237)] px-4 text-[14px] text-black"
            >
              <span>{category}</span>
              <svg className="h-4 w-4 text-black/70" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
          </div>

          <div className="hidden sm:block">
            <FilterSelect value={year} options={YEARS} onChange={setYear} />
          </div>
          <div className="hidden sm:block">
            <FilterSelect value={quarter} options={QUARTERS} onChange={setQuarter} />
          </div>
          <div className="hidden sm:block">
            <FilterSelect value={category} options={CATEGORY_FILTERS} onChange={setCategory} />
          </div>
          <div className="group relative w-full min-w-0 sm:min-w-[220px] sm:flex-1">
            <div className="pointer-events-none absolute inset-y-0 left-3 flex items-center text-black/60 group-focus-within:hidden">
              <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
              </svg>
            </div>
            <input
              type="text"
              placeholder="Search employee..."
              value={search}
              onChange={e => setSearch(e.target.value)}
              className="h-11 w-full rounded-[2px] border border-[rgb(55,55,55)] bg-[rgb(235,235,237)] pl-11 pr-4 text-[14px] text-black placeholder:text-black/60 shadow-sm hover:border-[rgb(55,55,55)] focus:pl-4 focus:border-2 focus:border-[rgb(55,55,55)] focus:outline-none focus:ring-0"
            />
          </div>
        </div>

        {/* Top 3 Podium */}
        {top3.length >= 1 && (
          <div className="mb-8 sm:mb-10">
            <div className="flex flex-col items-center gap-6 sm:hidden">
              {top3[0] && (
                <PodiumCard employee={top3[0]} place={1} />
              )}
              {top3[1] && (
                <PodiumCard employee={top3[1]} place={2} />
              )}
              {top3[2] && (
                <PodiumCard employee={top3[2]} place={3} />
              )}
            </div>
            <div className="hidden items-end justify-center gap-6 sm:flex">
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
            <div className="py-16 text-center text-brandMuted">
              <svg className="w-12 h-12 mx-auto mb-4 opacity-30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <p className="text-lg font-medium">No employees found</p>
              <p className="text-sm mt-1">Try adjusting your filters or search query</p>
            </div>
          )}
        </div>
      </div>

      <button
        type="button"
        aria-label="Close filter menu"
        onClick={() => setMobileFilterKey(null)}
        className={`fixed inset-0 z-40 bg-black/30 transition-opacity duration-200 sm:hidden ${mobileFilterKey ? 'opacity-100' : 'pointer-events-none opacity-0'}`}
      />
      <aside
        role="dialog"
        aria-modal="true"
        aria-label={activeMobileFilter ? `${activeMobileFilter.label} filter options` : 'Filter options'}
        className={`fixed inset-y-0 right-0 z-50 w-[calc(100%-3rem)] max-w-[340px] bg-[rgb(235,235,237)] shadow-[rgba(0,0,0,0.22)_0px_25.6px_57.6px_0px,rgba(0,0,0,0.18)_0px_4.8px_14.4px_0px] transition-transform duration-200 sm:hidden ${mobileFilterKey ? 'translate-x-0' : 'translate-x-full'}`}
      >
        <div className="flex h-full flex-col">
          <div className="flex items-center justify-end px-6 pb-4 pt-6">
            <button
              type="button"
              onClick={() => setMobileFilterKey(null)}
              className="rounded-full p-2 text-brandInk hover:bg-slate-100"
              aria-label="Close"
            >
              <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
          </div>
          <div className="overflow-y-auto px-6 pb-6">
            {activeMobileFilter?.options.map(option => {
              const isSelected = activeMobileFilter.value === option;
              return (
                <button
                  key={option}
                  type="button"
                  onClick={() => {
                    activeMobileFilter.onChange(option);
                    setMobileFilterKey(null);
                  }}
                  className={`block w-full py-3 text-left text-base ${isSelected ? 'font-semibold text-brandInk' : 'text-brandInk/90'}`}
                >
                  {option}
                </button>
              );
            })}
          </div>
        </div>
      </aside>
    </div>
  );
};

export default Leaderboard;
