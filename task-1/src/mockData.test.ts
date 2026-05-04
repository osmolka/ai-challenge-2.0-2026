import { Employee, filterEmployees } from './mockData';

const fixtureEmployees: Employee[] = [
  {
    id: 1,
    name: 'Alice Parker',
    title: 'Software Engineer',
    department: 'UA.U1.D1.G1',
    avatar: 'https://example.com/alice.jpg',
    totalScore: 120,
    categoryCounts: {
      Education: 1,
      Mentoring: 1,
      'Public Speaking': 1,
    },
    activities: [
      { id: 1, name: 'Education Session', category: 'Education', date: '12-Jan-2025', points: 16 },
      { id: 2, name: 'Mentoring Session', category: 'Mentoring', date: '18-May-2025', points: 64 },
      { id: 3, name: 'Conference Talk', category: 'Public Speaking', date: '22-Sep-2024', points: 40 },
    ],
  },
  {
    id: 2,
    name: 'Brian Stone',
    title: 'QA Engineer',
    department: 'PL.U2.D2.G2',
    avatar: 'https://example.com/brian.jpg',
    totalScore: 90,
    categoryCounts: {
      'University Partner': 1,
      'Open Source': 1,
    },
    activities: [
      { id: 4, name: 'University Workshop', category: 'University Partner', date: '04-Apr-2025', points: 32 },
      { id: 5, name: 'OSS Contribution', category: 'Open Source', date: '09-Nov-2024', points: 48 },
    ],
  },
];

describe('filterEmployees', () => {
  test('filters by year and recalculates activities, counts, and score', () => {
    const result = filterEmployees(fixtureEmployees, '2025', 'All Quarters', 'All Categories', '');

    expect(result).toHaveLength(2);
    expect(result[0].activities.every(activity => activity.date.endsWith('2025'))).toBe(true);
    expect(result[1].activities.every(activity => activity.date.endsWith('2025'))).toBe(true);
    expect(result[0].categoryCounts).toEqual({ Education: 1, Mentoring: 1 });
    expect(result[1].categoryCounts).toEqual({ 'University Partner': 1 });
    expect(result[0].totalScore).toBe(80);
    expect(result[1].totalScore).toBe(36);
  });

  test('filters by quarter and category together', () => {
    const result = filterEmployees(fixtureEmployees, 'All Years', 'Q2', 'Mentoring', '');

    expect(result).toHaveLength(1);
    expect(result[0].name).toBe('Alice Parker');
    expect(result[0].activities).toEqual([
      { id: 2, name: 'Mentoring Session', category: 'Mentoring', date: '18-May-2025', points: 64 },
    ]);
    expect(result[0].categoryCounts).toEqual({ Mentoring: 1 });
  });

  test('search matches name, title, and department text', () => {
    expect(filterEmployees(fixtureEmployees, 'All Years', 'All Quarters', 'All Categories', '  alice  ')).toHaveLength(1);
    expect(filterEmployees(fixtureEmployees, 'All Years', 'All Quarters', 'All Categories', 'qa engineer')).toHaveLength(1);
    expect(filterEmployees(fixtureEmployees, 'All Years', 'All Quarters', 'All Categories', 'pl.u2')).toHaveLength(1);
  });

  test('sorts results by recalculated filtered score', () => {
    const result = filterEmployees(fixtureEmployees, '2025', 'All Quarters', 'All Categories', '');

    expect(result.map(employee => employee.name)).toEqual(['Alice Parker', 'Brian Stone']);
  });
});


