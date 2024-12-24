import taskPageEvents from "../events/taskPageEvents";
import taskPageEventsManager from "../events/taskPageEventsManager";
import taskViewportEventManager from "../../tasksViewportModule/events/taskViewportEventsManager";
import taskViewportEvents from "../../tasksViewportModule/events/taskViewportEvents";

export default (function taskPageState() 
{
  const _allTasks = [];
  const _categories = [];
  let _activeCategory = null;
  let _tasksSortedBy = 'All';
  let _tasksFilteredBy = 'All';
  let _isDeleting = false;
  let _tasksToDelete = [];
  let _setDate = new Date();

  function _findDefaultCategory()
  {
    if (_categories.length === 0) return;

    return _categories[0] || null;
  }

  function _findActiveCategory()
  {
    if (_categories.length === 0) return null;

    const activeCategory = _categories.find
    (
      category => category.getIsCategoryActive(),
    );

    return activeCategory ? activeCategory : null;
  }

  function deactivateCategories()
  {
    if (_categories.length === 0) return;

    _categories.forEach
    (
      category => category.setIsCategoryActive(false),
    );
  }

  function setActiveCategory(categoryClass)
  {
    if (categoryClass){
      deactivateCategories();
      _activeCategory = categoryClass;
      _activeCategory.setIsCategoryActive(true);
      taskPageEventsManager.emit(taskPageEvents.categorySelected);
      return;
    }

    if (categoryClass === null)
    {
      _activeCategory = null;
      deactivateCategories();
      taskPageEventsManager.emit(taskPageEvents.categorySelected);
      return;
    }

    _activeCategory = _findActiveCategory() || _findDefaultCategory();
    if (_activeCategory) _activeCategory.setIsCategoryActive(true);
    taskPageEventsManager.emit(taskPageEvents.categorySelected);
  }

  function setTaskFiltering(label, value)
  {
    if (!label) return;
    if (label === 'None' || value === '--Select Filter--') return;
    if (label === 'All')
    {
      _tasksFilteredBy = 'All';
      taskViewportEventManager.emit(taskViewportEvents.viewportSortByUpdated);
      return;
    }

    if (!label || !value) return;

    _tasksFilteredBy = `${label}: ${value}`;
    taskViewportEventManager.emit(taskViewportEvents.viewportSortByUpdated);
  }

  function setTaskSorting(label, value)
  {
    if (!label) return;
    if (label === 'None' || value === '--Select Sort--') return;
    if (label === 'All')
    {
      _tasksSortedBy = 'All';
      taskViewportEventManager.emit(taskViewportEvents.viewportSortByUpdated);
      return;
    }

    if (!label || !value) return;

    _tasksSortedBy = `${label}: ${value}`;
    taskViewportEventManager.emit(taskViewportEvents.viewportSortByUpdated);
  }

  function setDate(newDate) 
  {
    if (!newDate || Object.prototype.toString.call(newDate) !== '[object Date]') return;
    _setDate = newDate 
  };

  function setIsDeleting(newStatus) { _isDeleting = newStatus };

  function addCategory(newCategory)
  {
    if (!newCategory) return;

    _categories.push(newCategory);

    taskPageEventsManager.emit(taskPageEvents.categoryAdded, { categoryCard: newCategory.getCategoryCard() });
  }

  function deleteCategory(selectedCategory)
  {
    if (!selectedCategory) return;

    const index = _categories.findIndex
    (
      category => category === selectedCategory
    );

    if (index === -1) return;

    const categoryTasks = selectedCategory.getCategoryTasks();

    if (categoryTasks.length > 1) deleteTask(categoryTasks);

    _categories.splice(index, 1);

    taskPageEventsManager.emit(taskPageEvents.categoryDeleted, { categoryCard: selectedCategory.getCategoryCard() });

    if (selectedCategory === _activeCategory) setActiveCategory(null);
  }

  function addTask(newTask)
  {
    if (!newTask) return;

    _allTasks.push(newTask);

    if (_activeCategory)
    {
      _activeCategory.addCategoryTask(newTask);
      newTask.setTaskCategory(_activeCategory);
    };

    taskViewportEventManager.emit(taskViewportEvents.viewportRefreshed)
  }

  function deleteTask(selectedTask)
  {
    if (!selectedTask) return;

    if (Array.isArray(selectedTask))
    {
      if (selectedTask.length === 0) return;
      selectedTask.forEach(task => deleteTask(task));
      return;
    };

    const index = _allTasks.findIndex(task => task === selectedTask);

    if (index === -1) return;

    const category = selectedTask.getTaskCategory();

    if (category && category !== 'General') category.deleteCategoryTask(selectedTask);

    _allTasks.splice(index, 1);
  }

  function addTaskToDelete(selectedTask)
  {
    if (!selectedTask) return;
    _tasksToDelete.push(selectedTask);
  };

  function removeTaskFromDeletion(selectedTask)
  {
    if (!selectedTask) return;

    const index = _tasksToDelete.find(task => task === selectedTask);

    if (index === -1) return;

    _tasksToDelete.splice(index, 1);
  }

  function resetTasksToDelete() { _tasksToDelete = [] };

  function getCategories() { return _categories };

  function getActiveCategory() { return _activeCategory };

  function getAllTasks() { return _allTasks };

  function getTaskSorting() { return _tasksSortedBy };

  function getTaskFiltering() { return _tasksFilteredBy };

  function getDate() { return _setDate };

  function getIsDeleting() { return _isDeleting };

  function getTasksToDelete() { return _tasksToDelete };

  setActiveCategory();

  return {
    setActiveCategory,
    setTaskFiltering,
    setTaskSorting,
    setDate,
    setIsDeleting,
    addTask,
    deleteTask,
    addTaskToDelete,
    removeTaskFromDeletion,
    resetTasksToDelete,
    addCategory,
    deleteCategory,
    getActiveCategory,
    getAllTasks,
    getCategories,
    getTaskFiltering,
    getDate,
    getTaskSorting,
    getIsDeleting,
    getTasksToDelete,
  }
})()