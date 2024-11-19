import ProjectsClass from "./ProjectsClass";
import ProjectComponentsClass from "./ProjectsComponentClass";
import ProjectTaskClass from "./ProjectTaskClass";
import projectValues from "./projectValues";

const projectNames =
[
  'Project 1',
  'Project 2',
  'Project 3',
];

const projectDueDate = 
[
  '11-11-2024',
  '15-11-2024',
  '21-11-2024'
]

const componentName =
[
  'Component 1',
  'Component 2',
  'Component 3',
  'Component 4',
  'Component 5',
  'Component 6',
]

const taskName =
[
  'Task 1',
  'Task 2',
  'Task 3'
]

const testProjects = projectNames.map
(
  project => new ProjectsClass
  (
    project,
    projectDueDate[Math.floor(Math.random() * 3)],
    []
  )
)

testProjects.forEach
(
  project =>
  {
    for (let i = 0; i < Math.floor(Math.random() * componentName.length); i++)
    {
      const component = new ProjectComponentsClass()
      const tasks = [];
      for (let j = 0; j < Math.floor(Math.random() * componentName.length); j++)
      {
        const task = new ProjectTaskClass
        (
          taskName[j],
          [true, false][Math.floor(Math.random() * 2)],
          null
        )
        tasks.push(task);
      }
      component.setComponentName(componentName[i]);
      component.setComponentStatus(projectValues[Math.floor(Math.random() * projectValues.length)]);
      component.setIsComponentImportant([true, false][Math.floor(Math.random() * 2)]);
      tasks.forEach
      (
        task => component.addComponentTask(task),
      )
      project.addProjectComponent(component);
    }
  }
)

export default testProjects;