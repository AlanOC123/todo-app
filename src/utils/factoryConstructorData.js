import generateID from "../shared/utils/generateID";
import placeholderImage from '../shared/assets/system_user_image.jpg';
import appState from "../data/appState";
import iconsMap from '../shared/utils/iconsMap';

const version = appState.getCurrentVersion() || 1;

const user =
Object.freeze({
  name: 'New User',
  id: generateID(16),
  image: placeholderImage,
  version: version,
  tasks: { tasks: {}, categories: {} },
  projects: { projects: {}, components: {}, tasks: {} },
  stats: {},
  createdAt: new Date(),
  updatedAt: null,
  isInit: false,
  isActivated: false,
  preferences:
  {
    colorTheme: 'Default',
    filterTasks: { heading: 'All', option: null,  },
    sortTasks: { heading: 'All', option: null,  },
    lastPageVisited: 'home',
  },
  notifications: { unread: 0, messages: [], thoughts: [] },
});

const baseEntity = Object.freeze(
  {
    owner: null,
    name: 'Type Entity Name',
    id: generateID(16),
    createdAt: null,
    updatedAt: null,
    type: 'generic',
  }
);

const category = Object.freeze(
  {
    ...baseEntity,
    name: 'Type Category Name',
    type: 'category',
    icon: iconsMap.rainbow.icon,
    tasks: [],
    isActive: false,
    isEditable: true,
  }
);

const simpleTask = Object.freeze(
  {
    ...baseEntity,
    name: 'Type Task Name',
    type: 'simple task',
    isComplete: false,
    completeAt: null,
    relatedTo: null,
  }
);

const complexTask = Object.freeze(
  {
    ...simpleTask,
    type: 'complex task',
    status: 'Not Started',
    priority: 'Low',
    difficulty: 'Easy',
    dueDate: null,
    isDraft: null,
  }
);

const project = Object.freeze(
  {
    ...baseEntity,
    name: 'Type Project Name',
    type: 'project',
    status: 'Not Started',
    components: {},
    dueDate: null,
    completedAt: null,
  }
);

const component = Object.freeze(
  {
    ...baseEntity,
    name: 'Type Component Name',
    type: 'component',
    status: 'Not Started',
    tasks: {},
    completedAt: null,
    relatedTo: null,
  }
);

const getFactoryData = (
  () =>
  {
    return {
      user: () => ({ ...user }),
      category: (owner, isActive) => ({ ...category, owner, isActive }),
      simpleTask: ( owner, relatedTo ) => ({ ...simpleTask, owner, relatedTo }),
      complexTask: ( owner, relatedTo ) => ({ ...complexTask, owner, relatedTo }),
      project: ( owner ) => ({ ...project, owner }),
      component: ( owner, relatedTo ) => ({ ...component, owner, relatedTo }),
    };
  })();

export default getFactoryData;
