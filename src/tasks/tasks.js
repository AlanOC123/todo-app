import tasksPage from "./shared/components/tasksPage";
import selectCategoryModule from './selectCategoryModule/selectCategoryModule';
import taskViewportModule from './tasksViewportModule/tasksViewportModule';
import taskDateControlsModule from './taskDateControlsModule/taskDateControlsModule';

export default (function tasks() 
{
  return tasksPage
  (
    selectCategoryModule,
    taskViewportModule,
    taskDateControlsModule,
  );
})();
