import React from 'react';
import { Employee } from '../mockData';

interface Props {
  employee: Employee;
  place: 1 | 2 | 3;
}

const podiumConfig = {
  1: {
    podiumBg: 'bg-[linear-gradient(180deg,#fef3c7,#fde68a)] border-t-2 border-t-[#fde047] shadow-[inset_0_2px_4px_rgba(0,0,0,0.06)]',
    podiumText: 'text-[5.8rem] sm:text-[7.5rem] font-extrabold leading-none tracking-[-0.06em] text-[rgba(234,179,8,.2)]',
    podiumHeight: 'h-[148px] sm:h-[160px]',
    badgeBg: 'bg-brandAmber',
    badgeSize: 'h-10 w-10',
    badgeText: 'text-base',
    scoreBg: 'bg-brandGoldLight border-brandAmber',
    scoreText: 'text-brandGoldDark',
    starColor: 'text-brandGoldDark',
    avatarFrame: 'h-[112px] w-[112px] border-4 border-[#fbbf24] bg-[#86efac] text-[#166534]',
    order: 'sm:order-2',
    avatarOffset: '-mb-2',
    zIndex: 'z-10',
  },
  2: {
    podiumBg: 'bg-[linear-gradient(180deg,#e2e8f0,#cbd5e1)] border-t-2 border-t-[#cbd5e1] shadow-[inset_0_2px_4px_rgba(0,0,0,0.06)]',
    podiumText: 'text-[4.9rem] sm:text-[6.5rem] font-extrabold leading-none tracking-[-0.06em] text-[rgba(148,163,184,.2)]',
    podiumHeight: 'h-[116px] sm:h-[128px]',
    badgeBg: 'bg-brandSlate',
    badgeSize: 'h-8 w-8',
    badgeText: 'text-sm',
    scoreBg: 'bg-white border-brandSlate/50',
    scoreText: 'text-brandPrimary',
    starColor: 'text-brandPrimary',
    avatarFrame: 'h-20 w-20 border-4 border-white bg-[#cbd5e1] text-[#1e293b]',
    order: 'sm:order-1',
    avatarOffset: '',
    zIndex: '',
  },
  3: {
    podiumBg: 'bg-[linear-gradient(180deg,#e2e8f0,#cbd5e1)] border-t-2 border-t-[#cbd5e1] shadow-[inset_0_2px_4px_rgba(0,0,0,0.06)]',
    podiumText: 'text-[4.4rem] sm:text-[6rem] font-extrabold leading-none tracking-[-0.06em] text-[rgba(148,163,184,.2)]',
    podiumHeight: 'h-[88px] sm:h-[96px]',
    badgeBg: 'bg-brandBronze',
    badgeSize: 'h-8 w-8',
    badgeText: 'text-sm',
    scoreBg: 'bg-white border-brandSlate/50',
    scoreText: 'text-brandPrimary',
    starColor: 'text-brandPrimary',
    avatarFrame: 'h-20 w-20 border-4 border-white bg-[#cbd5e1] text-[#1e293b]',
    order: 'sm:order-3',
    avatarOffset: '',
    zIndex: '',
  },
};

const PodiumCard: React.FC<Props> = ({ employee, place }) => {
  const cfg = podiumConfig[place];

  return (
    <div className={`flex w-full max-w-[280px] flex-col items-center ${cfg.order} ${cfg.zIndex}`}>
      {/* Avatar */}
      <div className="relative mb-2 sm:mb-2">
        <div className={`overflow-hidden rounded-full ${cfg.avatarFrame}`}>
          <img
            src={employee.avatar}
            alt={employee.name}
            onError={e => {
              e.currentTarget.onerror = null;
              e.currentTarget.src = `https://i.pravatar.cc/240?u=${employee.id}`;
            }}
            className="h-full w-full rounded-full object-cover"
          />
        </div>
        <div className={`absolute -bottom-1 -right-1 ${cfg.badgeSize} rounded-full ${cfg.badgeBg} flex items-center justify-center text-white ${cfg.badgeText} font-bold shadow`}>
          {place}
        </div>
      </div>

      {/* Name & Title */}
      <div className="mb-2 w-full text-center">
        <p className={`font-bold text-brandInk ${place === 1 ? 'text-[1.05rem] sm:text-base' : 'text-sm'} leading-tight`}>{employee.name}</p>
        <p className={`mt-0.5 text-brandMuted ${place === 1 ? 'text-[13px] sm:text-sm' : 'text-xs'} px-2 sm:px-0`}>
          {employee.title} ({employee.department})
        </p>
      </div>

      {/* Score */}
      <div className={`mb-3 flex items-center gap-1.5 rounded-full border px-4 py-1.5 ${cfg.scoreBg}`}>
        <svg className={`w-4 h-4 ${cfg.starColor}`} viewBox="0 0 20 20" fill="currentColor">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
        <span className={`font-bold text-lg ${cfg.scoreText}`}>{employee.totalScore}</span>
      </div>

      {/* Podium block */}
      <div className={`w-full ${cfg.podiumHeight} rounded-t-[12px] ${cfg.podiumBg} flex items-center justify-center`}>
        <span className={`${cfg.podiumText} select-none`}>{place}</span>
      </div>
    </div>
  );
};

export default PodiumCard;

