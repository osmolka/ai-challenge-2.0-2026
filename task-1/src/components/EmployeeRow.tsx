import React, { useState } from 'react';
import { Employee, Category } from '../mockData';
import CategoryIcon from './CategoryIcon';

interface Props {
  employee: Employee;
  rank: number;
}

const CATEGORY_BADGE_COLORS: Record<Category, string> = {
  'Education': 'bg-brandSlate/30 text-brandMuted',
  'Public Speaking': 'bg-brandSlate/30 text-brandMuted',
  'University Partner': 'bg-brandSlate/30 text-brandMuted',
  'Mentoring': 'bg-brandSlate/30 text-brandMuted',
  'Open Source': 'bg-brandSlate/30 text-brandMuted',
};

const EmployeeRow: React.FC<Props> = ({ employee, rank }) => {
  const [expanded, setExpanded] = useState(false);

  const categoryEntries = Object.entries(employee.categoryCounts) as [Category, number][];

  return (
    <div className={`mb-3 overflow-visible rounded-2xl border bg-white shadow-sm transition-[border-color,box-shadow] duration-200 ${expanded ? 'border-brandPrimary shadow-none' : 'border-brandSlate/30 hover:shadow-[0_4px_12px_rgba(0,0,0,0.1)]'}`}>
      {/* Main row */}
      <div className="px-4 py-4 sm:px-5">
        <div className="flex items-start gap-3 sm:items-center sm:gap-4">
          {/* Rank */}
          <div className="w-8 shrink-0 pt-1 text-center sm:pt-0">
            <span className="text-2xl font-bold text-brandSlate sm:text-xl">{rank}</span>
          </div>

          {/* Avatar */}
          <img
            src={employee.avatar}
            alt={employee.name}
            onError={e => {
              e.currentTarget.onerror = null;
              e.currentTarget.src = `https://i.pravatar.cc/240?u=${employee.id}`;
            }}
            className="h-12 w-12 shrink-0 rounded-full bg-brandSlate/35 object-cover"
          />

          {/* Name & title */}
          <div className="min-w-0 flex-1">
            <p className="truncate font-semibold text-brandInk">{employee.name}</p>
            <p className="truncate text-sm text-brandMuted">
              {employee.title} ({employee.department})
            </p>
          </div>

          {/* Desktop category counts */}
          <div className="mr-4 hidden items-center gap-4 sm:flex">
            {categoryEntries.map(([cat, count]) => (
              <CategoryIcon key={cat} category={cat} count={count} />
            ))}
          </div>

          {/* Divider */}
          <div className="hidden h-10 w-px bg-brandSlate/35 sm:block" />

          {/* Desktop total score */}
          <div className="mr-3 hidden flex-col items-end sm:flex">
            <span className="mb-1 text-[10px] font-semibold uppercase leading-none tracking-wide text-brandMuted/80">Total</span>
            <div className="flex items-center gap-1">
              <svg className="h-6 w-6 text-brandPrimary" viewBox="0 0 20 20" fill="currentColor">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <span className="text-2xl font-bold text-brandPrimary">{employee.totalScore}</span>
            </div>
          </div>

          {/* Desktop expand button */}
          <button
            onClick={() => setExpanded(prev => !prev)}
            aria-label={expanded ? `Collapse details for ${employee.name}` : `Expand details for ${employee.name}`}
            className={`hidden h-9 w-9 shrink-0 items-center justify-center rounded-full border transition-colors sm:flex ${
              expanded
                ? 'border-brandPrimary/50 bg-brandPrimary/10 text-brandPrimary'
                : 'border-brandSlate/30 bg-brandSlate/20 text-brandPrimary hover:bg-brandSlate/30'
            }`}
          >
            <svg
              className={`h-6 w-6 transition-transform ${expanded ? 'rotate-180' : ''}`}
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </button>
        </div>

        {/* Mobile category counts and expand action */}
        <div className="mt-4 flex items-center justify-between border-t border-brandSlate/20 pt-3 sm:hidden">
          <div className="flex items-center gap-4">
            {categoryEntries.map(([cat, count]) => (
              <CategoryIcon key={cat} category={cat} count={count} />
            ))}
          </div>

          <button
            onClick={() => setExpanded(prev => !prev)}
            aria-label={expanded ? `Collapse details for ${employee.name}` : `Expand details for ${employee.name}`}
            className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full border transition-colors ${
              expanded
                ? 'border-brandPrimary/50 bg-brandPrimary/10 text-brandPrimary'
                : 'border-brandSlate/30 bg-brandSlate/20 text-brandPrimary hover:bg-brandSlate/30'
            }`}
          >
            <svg
              className={`h-6 w-6 transition-transform ${expanded ? 'rotate-180' : ''}`}
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </button>
        </div>
      </div>

      {/* Expanded activities */}
      <div
        className={`grid transition-[grid-template-rows,opacity] duration-300 ease-in-out ${expanded ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}
      >
        <div className="overflow-hidden">
          <div className="px-4 py-4 sm:px-5">
            <p className="mb-4 text-xs font-bold uppercase tracking-widest text-brandMuted">Recent Activity</p>
            <div className="overflow-x-auto">
              <table className="w-full min-w-[560px] text-xs sm:min-w-0 sm:text-sm">
                <thead>
                  <tr className="border-b border-brandSlate/30">
                    <th className="w-full pb-2 pr-4 text-left text-xs font-bold uppercase tracking-widest text-brandMuted">Activity</th>
                    <th className="whitespace-nowrap pb-2 pr-4 text-left text-xs font-bold uppercase tracking-widest text-brandMuted">Category</th>
                    <th className="whitespace-nowrap pb-2 pr-4 text-left text-xs font-bold uppercase tracking-widest text-brandMuted">Date</th>
                    <th className="whitespace-nowrap pb-2 text-right text-xs font-bold uppercase tracking-widest text-brandMuted">Points</th>
                  </tr>
                </thead>
                <tbody>
                  {employee.activities.map(act => (
                    <tr key={act.id} className="border-b border-brandSlate/20 transition-colors hover:bg-[#f1f5f9] last:border-0">
                      <td className="py-3 pr-4 font-medium text-brandInk">{act.name}</td>
                      <td className="py-3 pr-4">
                        <span className={`inline-block rounded-full px-3 py-1 text-xs font-medium ${CATEGORY_BADGE_COLORS[act.category]}`}>
                          {act.category}
                        </span>
                      </td>
                      <td className="whitespace-nowrap py-3 pr-4 text-brandMuted">{act.date}</td>
                      <td className="py-3 text-right font-bold text-brandPrimary">+{act.points}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmployeeRow;

