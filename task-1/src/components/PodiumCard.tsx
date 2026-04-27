import React from 'react';
import { Employee } from '../mockData';

interface Props {
  employee: Employee;
  place: 1 | 2 | 3;
}

const podiumConfig = {
  1: {
    podiumBg: 'from-yellow-200 to-yellow-100',
    podiumText: 'text-yellow-300',
    podiumHeight: 'h-36',
    badgeBg: 'bg-yellow-500',
    scoreBg: 'bg-yellow-400 border-yellow-500',
    scoreText: 'text-yellow-900',
    starColor: 'text-yellow-700',
    avatarRing: 'ring-4 ring-yellow-400',
    avatarSize: 'w-24 h-24',
    order: 'order-2',
    avatarOffset: '-mb-2',
    zIndex: 'z-10',
  },
  2: {
    podiumBg: 'from-slate-200 to-slate-100',
    podiumText: 'text-slate-300',
    podiumHeight: 'h-24',
    badgeBg: 'bg-slate-400',
    scoreBg: 'bg-white border-blue-200',
    scoreText: 'text-blue-600',
    starColor: 'text-blue-500',
    avatarRing: 'ring-2 ring-slate-300',
    avatarSize: 'w-20 h-20',
    order: 'order-1',
    avatarOffset: '',
    zIndex: '',
  },
  3: {
    podiumBg: 'from-slate-200 to-slate-100',
    podiumText: 'text-slate-300',
    podiumHeight: 'h-20',
    badgeBg: 'bg-amber-700',
    scoreBg: 'bg-white border-blue-200',
    scoreText: 'text-blue-600',
    starColor: 'text-blue-500',
    avatarRing: 'ring-2 ring-slate-300',
    avatarSize: 'w-20 h-20',
    order: 'order-3',
    avatarOffset: '',
    zIndex: '',
  },
};

const PodiumCard: React.FC<Props> = ({ employee, place }) => {
  const cfg = podiumConfig[place];

  return (
    <div className={`flex flex-col items-center ${cfg.order} ${cfg.zIndex} px-4`}>
      {/* Avatar */}
      <div className="relative mb-2">
        <img
          src={employee.avatar}
          alt={employee.name}
          className={`${cfg.avatarSize} rounded-full object-cover ${cfg.avatarRing} bg-gray-200`}
        />
        <div className={`absolute -bottom-1 -right-1 w-7 h-7 rounded-full ${cfg.badgeBg} flex items-center justify-center text-white text-xs font-bold shadow`}>
          {place}
        </div>
      </div>

      {/* Name & Title */}
      <div className="text-center mb-2 max-w-[160px]">
        <p className={`font-bold text-gray-800 ${place === 1 ? 'text-base' : 'text-sm'} leading-tight`}>{employee.name}</p>
        <p className={`text-gray-500 ${place === 1 ? 'text-sm' : 'text-xs'} mt-0.5`}>
          {employee.title} ({employee.department})
        </p>
      </div>

      {/* Score */}
      <div className={`flex items-center gap-1.5 border rounded-full px-4 py-1.5 mb-3 ${cfg.scoreBg}`}>
        <svg className={`w-4 h-4 ${cfg.starColor}`} viewBox="0 0 20 20" fill="currentColor">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
        <span className={`font-bold text-lg ${cfg.scoreText}`}>{employee.totalScore}</span>
      </div>

      {/* Podium block */}
      <div className={`w-40 ${cfg.podiumHeight} rounded-xl bg-gradient-to-b ${cfg.podiumBg} flex items-center justify-center`}>
        <span className={`text-7xl font-black ${cfg.podiumText} select-none`}>{place}</span>
      </div>
    </div>
  );
};

export default PodiumCard;

