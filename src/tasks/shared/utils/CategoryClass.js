import iconsMap from '../../../shared/utils/iconsMap';
import categoryCard from '../../selectCategoryModule/components/categoryCard/categoryCard';
import selectCategoryEventsManager from '../../selectCategoryModule/events/selectCategoryEventsManager';
import selectCategoryEvents from '../../selectCategoryModule/events/selectCategoryEvents';

export default class CategoryClass
{
  #categoryID;
  #categoryName;
  #categoryIcon;
  #categoryCreatedAt;
  #categoryLastModified;
  #categoryTasks;
  #isCategoryActive;
  #isCategoryEditable;
  #categoryCard;

  #generateNumericIdentifier = (length = 10) => Array.from({ length }, () => Math.floor(Math.random() * 10)).join('');

  #capitaliseString = (strValue) =>
  {
    return strValue.split(' ').map
    (
      str => (str.charAt(0).toUpperCase() + str.slice(1).toLowerCase()).trim(),
    );
  }

  #resetCardClass = (option) =>
  {
    if (!option) return;

    const map =
    {
      'Active': () =>
      {
        ['category-active'].forEach
        (
          className => this.#categoryCard.classList.remove(className),
        );
      }
    };

    map[option]();
  }

  #setCategoryID = () =>
  {
    const categoryName = this.#categoryName ? this.#categoryName.split(' ').join('_') : 'Unnamed_Project';

    const categoryDate = this.#categoryLastModified ? `M:${this.#categoryLastModified}` : `C:${this.#categoryCreatedAt}`;

    this.#categoryID = `${categoryName}_${categoryDate}_${this.#generateNumericIdentifier()}`;
  }

  #setCategoryLastModified = () => this.#categoryLastModified = new Date();

  #categoryIconMap =
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

  #setCategoryIcon = () =>
  {
    const wordToCheck = this.#capitaliseString(this.#categoryName);

    const isStandard = ['Type Category Name', 'All Tasks'].includes(this.#categoryName);

    const map = this.#categoryIconMap;

    if (isStandard) return;

    for (const [, { values, iconToReturn } ] of Object.entries(map))
    {
      for (const word of wordToCheck)
      {
        if (values.includes(word))
        {
          this.#categoryIcon = iconToReturn;
          selectCategoryEventsManager.emit(selectCategoryEvents.categoryIconChanged, { category: this });
          return;
        }
      };
    };

    this.#categoryIcon = iconsMap.rainbow.icon;
    selectCategoryEventsManager.emit(selectCategoryEvents.categoryIconChanged, { category: this });
  }

  constructor()
  {
    this.#categoryID = null;
    this.#categoryName = 'Type Category Name';
    this.#categoryIcon = iconsMap.rainbow.icon;
    this.#categoryCreatedAt = new Date();
    this.#categoryLastModified = null;
    this.#categoryTasks = [];
    this.#isCategoryActive = false;
    this.#isCategoryEditable = true;
    this.#categoryCard = categoryCard(this);
    this.#setCategoryID();
  }

  setCategoryName = (newCategoryName) =>
  {
    if (!newCategoryName) return;

    const oldName = this.#categoryName;

    if (oldName === newCategoryName) return;

    const MIN = 2;
    const MAX = 30;

    if ((newCategoryName.length < MIN) || (newCategoryName.length > MAX)) return;

    this.#categoryName = newCategoryName;
    this.#setCategoryLastModified();
    this.#setCategoryID();
    this.#setCategoryIcon();
    selectCategoryEventsManager.emit(selectCategoryEvents.categoryNameChanged, { category: this });
  }

  setIsCategoryActive = (newStatus) =>
  {
    this.#isCategoryActive = newStatus;
    this.#resetCardClass('Active');

    if (this.#isCategoryActive)
    {
      this.#categoryCard.classList.add('category-active');
    }

    selectCategoryEventsManager.emit(selectCategoryEvents.categoryActiveStatusChanged, { category: this });
    this.#setCategoryLastModified()
    this.#setCategoryID()
  }

  setIsCategoryEditable = (newStatus) =>
  {
    this.#isCategoryEditable = newStatus;
    selectCategoryEventsManager.emit(selectCategoryEvents.categoryEditStatusChanged, { category: this });
    this.#setCategoryLastModified()
    this.#setCategoryID()
  }

  addCategoryTask = (taskToAdd) =>
  {
    if (!taskToAdd) return;

    this.#categoryTasks.push(taskToAdd);

    selectCategoryEventsManager.emit(selectCategoryEvents.categoryTaskAdded, { category: this })

    this.#setCategoryLastModified();
    this.#setCategoryID();
  }

  deleteCategoryTask = (taskToDelete) =>
  {
    if (!taskToDelete) return;

    const index = this.#categoryTasks.findIndex(task => task === taskToDelete);

    if (index === -1) return;

    this.#categoryTasks.splice(index, 1);

    selectCategoryEventsManager.emit(selectCategoryEvents.categoryTaskDeleted, { category: this })
    
    this.#setCategoryLastModified();
    this.#setCategoryID();
  }

  getCategoryID = () => this.#categoryID;

  getCategoryName = () => this.#categoryName;

  getCategoryIcon = () => this.#categoryIcon;

  getCategoryCreatedAt = () => this.#categoryCreatedAt;

  getCategoryLastModified = () => this.#categoryLastModified;

  getCategoryTasks = () => this.#categoryTasks;

  getIsCategoryActive = () => this.#isCategoryActive;

  getIsCategoryEditable = () => this.#isCategoryEditable;

  getCategoryCard = () => this.#categoryCard;
}