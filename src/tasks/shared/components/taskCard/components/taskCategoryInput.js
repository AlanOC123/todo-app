import ElementData from "../../../../../shared/utils/ElementData";
import taskPageState from "../../../../shared/utils/taskPageState";
import changeTaskCategory from "../utils/changeTaskCategory";
import changeCategoryInputElement from '../utils/changeCategoryInputElement';
import taskViewportEventManager from '../../../../tasksViewportModule/events/taskViewportEventsManager'
import taskViewportEvents from '../../../../tasksViewportModule/events/taskViewportEvents';

export default function taskCategoryInput(taskClass)
{
  function optionElement(option)
  {
    return new ElementData
    (
      'option',
      'task-card-category-option',
      { value: option },
      [ option ]
    ).renderElement();
  };

  const element = new ElementData
  (
    'select',
    'task-card-category-input',
    {},
    []
  ).renderElement();

  const categories = taskPageState.getCategories();

  element.append(optionElement('--Select Category--'));
  categories.map(category => category.getCategoryName()).forEach
  (
    option => element.append(optionElement(option))
  );

  element.value = '--Select Category--';

  function elementChanged()
  {
    changeTaskCategory(element, taskClass)
  };

  function categoryChanged({ task })
  {
    if (task !== taskClass) return;
    changeCategoryInputElement(element, taskClass);
  }

  element.onchange = elementChanged;

  taskViewportEventManager.on(taskViewportEvents.taskCategoryChanged, categoryChanged);

  return element;
}