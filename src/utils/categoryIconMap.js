import iconsMap from "../shared/utils/iconsMap";

const categoryIconMap =
{
  health:
  {
    values: 
    [
      'Health', 'Fitness', 'Medical', 'Health And Fitness', 'Running', 'Weight Lifting', 'Weight', 'Weight Loss', 'Wellbeing', 'Health And Wellbeing', 'Wellness', 'Health And Wellness', 'Healthiness', 'Gym', 'Cardio', 'Yoga', 'Meditation', 'Pilates', 'Diet', 'Nutrition', 'Exercise', 'Workout', 'Sports', 'Physical Activity', 'Active Lifestyle', 'Running Club', 'Fitness Journey',
    ],
    iconToReturn: iconsMap.health.icon,
  },
  finance:
  {
    values: 
    [
      'Budget', 'Savings', 'Fund', 'Deposit', 'Saving', 'Money', 'Account', 'Asset',
      'Loan', 'Investment', 'Income', 'Expenses', 'Credit', 'Bills', 'Banking', 'Loans',
      'Borrowing', 'Wealth', 'Insurance', 'Mortgage', 'Financial Planning', 'Tax', 'Economy', 'Salary', 'Paycheck', 'Accounting', 'Cash Flow', 'Dividend', 'Portfolio',
    ],
    iconToReturn: iconsMap.finance.icon,
  },
  social:
  {
    values: 
    [
      'Friends', 'Social', 'Relationships', 'Going Out', 'Friendships', 'Gatherings', 'Meetups', 'Events', 'Hangout', 'Outing', 'Celebration', 'Parties', 'Festivities', 'Reunion', 'Networking', 'Community', 'Club', 'Team', 'Companionship', 'Relationship', 
    ],
    iconToReturn: iconsMap.social.icon,
  },
  professional:
  {
    values: 
    [
      'Work', 'Career', 'Professional', 'Job', 'Promotion', 'Business', 'Office', 'Meetings', 'Projects', 'Deadlines', 'Productivity', 'Entrepreneurship', 'Skills', 'Leadership', 'Management', 'Employment', 'Tasks', 'Workload', 'Achievement', 'Collaboration', 'Corporate'
    ],
    iconToReturn: iconsMap.professional.icon,
  },
  education:
  {
    values: 
    [
      'School', 'College', 'Course', 'Degree', 'University', 'Learning', 'Classes', 'Skill Development', 'Training', 'Online Courses', 'Workshop', 'Seminar', 'Exam', 'Certification', 'Knowledge', 'Academic', 'Lessons', 'Subjects', 'Research', 'Study Materials', 'Educational Goals',
    ],
    iconToReturn: iconsMap.education.icon,
  },
}

const genericIcon = iconsMap.rainbow.icon;

export { categoryIconMap, genericIcon };