export type Category = 'Education' | 'Public Speaking' | 'University Partner' | 'Mentoring' | 'Open Source';

export interface Activity {
  id: number;
  name: string;
  category: Category;
  date: string;
  points: number;
}

export interface Employee {
  id: number;
  name: string;
  title: string;
  department: string;
  avatar: string;
  totalScore: number;
  categoryCounts: Partial<Record<Category, number>>;
  activities: Activity[];
}

const CATEGORIES: Category[] = ['Education', 'Public Speaking', 'University Partner', 'Mentoring', 'Open Source'];

const ACTIVITY_TEMPLATES = [
  { prefix: '[LAB]', names: ['Lecture "Playwright Workshop Base 1"', 'Lecture "Playwright Workshop Base 2"', 'Lecture "Playwright Workshop Advanced 1"', 'Lecture "Playwright Workshop Advanced 2"', 'Workshop "React Fundamentals"', 'Workshop "TypeScript Deep Dive"', 'Lecture "Clean Code Practices"', 'Course "Testing Best Practices"', 'Bootcamp "Docker & Kubernetes"', 'Lecture "CI/CD Pipelines"'], category: 'Education' as Category, points: 16 },
  { prefix: '[LAB]', names: ['Mentoring of Junior Developer', 'Mentoring of Trainee Engineer', 'Mentoring of Intern', 'Mentoring of New Hire', 'Mentoring of Graduate'], category: 'Education' as Category, points: 64 },
  { prefix: '[REG]', names: ['Offline Meetup "Quality Gates: Stop, Test, Go!"', 'Online Talk "Microservices Architecture"', 'Conference Talk "DevOps in Practice"', 'Webinar "Security in Modern Apps"', 'Meetup "Frontend Trends 2025"', 'Panel Discussion "AI in Software Engineering"'], category: 'Public Speaking' as Category, points: 64 },
  { prefix: '[UNI]', names: ['Guest Lecture at University', 'Student Project Review', 'Hackathon Judging', 'University Workshop', 'Career Day Presentation'], category: 'University Partner' as Category, points: 32 },
  { prefix: '[LAB]', names: ['Open Source Contribution to React', 'Open Source PR to TypeScript', 'Open Source Bug Fix', 'Open Source Feature Implementation'], category: 'Open Source' as Category, points: 48 },
];

const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

function randomDate(year = 2025): string {
  const month = Math.floor(Math.random() * 12);
  const day = Math.floor(Math.random() * 28) + 1;
  return `${String(day).padStart(2, '0')}-${MONTHS[month]}-${year}`;
}

function getQuarter(dateStr: string): number {
  const month = MONTHS.indexOf(dateStr.split('-')[1]);
  return Math.floor(month / 3) + 1;
}

const FIRST_NAMES = [
  'Adrian', 'Beatrice', 'Calvin', 'Diana', 'Elliot', 'Fiona', 'Gavin', 'Helena', 'Isaac', 'Jasmine',
  'Kevin', 'Laura', 'Marcus', 'Nina', 'Oscar', 'Petra', 'Quinn', 'Rachel', 'Samuel', 'Tessa',
  'Ulrich', 'Vivian', 'Walter', 'Xena', 'Yannick', 'Zara', 'Aaron', 'Bianca', 'Connor', 'Delphine',
  'Ethan', 'Freya', 'Graham', 'Harriet', 'Ian', 'Jolene', 'Kyle', 'Leonie', 'Morris', 'Nadine',
  'Oliver', 'Priya', 'Rafael', 'Simone', 'Thomas', 'Uma', 'Vincent', 'Wendy', 'Xavier', 'Yvonne',
  'Zachary', 'Abigail', 'Blake', 'Celeste', 'Dorian', 'Elise', 'Finn', 'Gloria', 'Hugo', 'Irene',
  'Julian', 'Katrin', 'Leon', 'Miriam', 'Nathan', 'Odette', 'Patrick', 'Renata', 'Stefan', 'Tamara',
];

const LAST_NAMES = [
  'Weston', 'Harlow', 'Caldwell', 'Ashford', 'Mercer', 'Dunmore', 'Langley', 'Pemberton', 'Stirling', 'Whitfield',
  'Hartley', 'Elmsworth', 'Granger', 'Blackwood', 'Forsythe', 'Kincaid', 'Thorne', 'Vanders', 'Beckett', 'Cromwell',
  'Fairbanks', 'Holloway', 'Jamison', 'Kingsley', 'Larkin', 'Montague', 'Norwood', 'Osbourne', 'Prescott', 'Quinlan',
  'Radford', 'Shelton', 'Templeton', 'Underwood', 'Vance', 'Whitmore', 'Yarrow', 'Zeller', 'Alderton', 'Briscoe',
  'Colton', 'Drayton', 'Elsworth', 'Fenton', 'Galloway', 'Hadley', 'Ingram', 'Jennings', 'Kirby', 'Lawson',
  'Morrow', 'Neville', 'Ogden', 'Paxton', 'Ramsay', 'Sutton', 'Talbot', 'Upton', 'Varley', 'Wycliffe',
];

const TITLES = [
  'Software Engineer', 'Senior Software Engineer', 'Lead Software Engineer', 'Principal Software Engineer',
  'QA Engineer', 'Senior QA Engineer', 'Lead QA Engineer', 'QA Automation Engineer',
  'DevOps Engineer', 'Senior DevOps Engineer', 'Site Reliability Engineer',
  'Frontend Developer', 'Senior Frontend Developer', 'Backend Developer', 'Senior Backend Developer',
  'Full Stack Developer', 'Senior Full Stack Developer',
  'Project Manager', 'Senior Project Manager', 'Group Manager', 'Delivery Manager',
  'Business Analyst', 'Senior Business Analyst', 'Solution Architect', 'Technical Architect',
  'Data Engineer', 'Senior Data Engineer', 'ML Engineer', 'Data Scientist',
  'UI/UX Designer', 'Senior UI/UX Designer', 'Product Owner', 'Scrum Master',
];

const UNITS = ['SK', 'BY', 'PL', 'UA', 'CZ'];
const TEAMS = ['U1', 'U2', 'U3', 'U4'];
const DEPTS = ['D1', 'D2', 'D3', 'D4', 'D5'];
const GROUPS = ['G1', 'G2', 'G3', 'G4', 'G5', 'G6', 'G7', 'G8'];
const FLOORS = ['T1', 'T2', 'T3', 'F1', 'F2', 'F3', 'A1', 'A2', 'F8'];

function randomDept(): string {
  const unit = UNITS[Math.floor(Math.random() * UNITS.length)];
  const team = TEAMS[Math.floor(Math.random() * TEAMS.length)];
  const dept = DEPTS[Math.floor(Math.random() * DEPTS.length)];
  const group = GROUPS[Math.floor(Math.random() * GROUPS.length)];
  const hasFloor = Math.random() > 0.5;
  if (hasFloor) {
    const floor = FLOORS[Math.floor(Math.random() * FLOORS.length)];
    return `${unit}.${team}.${dept}.${group}.${floor}`;
  }
  return `${unit}.${team}.${dept}.${group}`;
}

function randomAvatar(seed: number): string {
  return `https://api.dicebear.com/7.x/avataaars/svg?seed=${seed}&backgroundColor=b6e3f4,c0aede,d1d4f9,ffd5dc,ffdfbf`;
}

function generateActivities(count: number, activityIdStart: number): Activity[] {
  const activities: Activity[] = [];
  let idCounter = activityIdStart;
  for (let i = 0; i < count; i++) {
    const template = ACTIVITY_TEMPLATES[Math.floor(Math.random() * ACTIVITY_TEMPLATES.length)];
    const actName = template.names[Math.floor(Math.random() * template.names.length)];
    activities.push({
      id: idCounter++,
      name: `${template.prefix} ${actName}`,
      category: template.category,
      date: randomDate(2025),
      points: template.points,
    });
  }
  return activities.sort((a, b) => {
    const parse = (d: string) => {
      const [day, mon, yr] = d.split('-');
      return new Date(`${yr}-${MONTHS.indexOf(mon) + 1}-${day}`).getTime();
    };
    return parse(b.date) - parse(a.date);
  });
}

function buildCategoryCounts(activities: Activity[]): Partial<Record<Category, number>> {
  const counts: Partial<Record<Category, number>> = {};
  for (const act of activities) {
    counts[act.category] = (counts[act.category] || 0) + 1;
  }
  return counts;
}

// Generate 227 employees with decreasing scores
let actIdCounter = 1;

const SCORE_DISTRIBUTION = [
  536, 328, 320, 320, 304, 296, 280, 270, 256, 240,
  232, 224, 216, 208, 200, 200, 200, 200, 192, 192,
  192, 192, 184, 184, 176, 176, 168, 168, 160, 160,
];

function scoreForRank(rank: number): number {
  if (rank <= SCORE_DISTRIBUTION.length) return SCORE_DISTRIBUTION[rank - 1];
  // Gradual decrease from rank 31 onward
  const base = 156;
  const decrease = Math.floor((rank - 31) * 0.8);
  return Math.max(8, base - decrease);
}

export const employees: Employee[] = Array.from({ length: 227 }, (_, i) => {
  const rank = i + 1;
  const score = scoreForRank(rank);
  const activityCount = Math.max(1, Math.round(score / 24));
  const activities = generateActivities(activityCount, actIdCounter);
  actIdCounter += activityCount;
  const firstName = FIRST_NAMES[i % FIRST_NAMES.length];
  const lastName = LAST_NAMES[i % LAST_NAMES.length];
  return {
    id: rank,
    name: `${firstName} ${lastName}`,
    title: TITLES[i % TITLES.length],
    department: randomDept(),
    avatar: randomAvatar(rank + 100),
    totalScore: score,
    categoryCounts: buildCategoryCounts(activities),
    activities,
  };
});

export const YEARS = ['All Years', '2025'];
export const QUARTERS = ['All Quarters', 'Q1', 'Q2', 'Q3', 'Q4'];
export const CATEGORY_FILTERS = ['All Categories', 'Education', 'Public Speaking', 'University Partner', 'Mentoring', 'Open Source'];

export function filterEmployees(
  emps: Employee[],
  year: string,
  quarter: string,
  category: string,
  search: string
): Employee[] {
  return emps.filter(emp => {
    if (search && !emp.name.toLowerCase().includes(search.toLowerCase())) return false;

    let filteredActs = emp.activities;

    if (year !== 'All Years') {
      filteredActs = filteredActs.filter(a => a.date.endsWith(year));
    }
    if (quarter !== 'All Quarters') {
      const qNum = parseInt(quarter[1]);
      filteredActs = filteredActs.filter(a => {
        const monthStr = a.date.split('-')[1];
        const monthIdx = MONTHS.indexOf(monthStr);
        return Math.floor(monthIdx / 3) + 1 === qNum;
      });
    }
    if (category !== 'All Categories') {
      filteredActs = filteredActs.filter(a => a.category === category);
    }

    return filteredActs.length > 0 || (year === 'All Years' && quarter === 'All Quarters' && category === 'All Categories');
  });
}

