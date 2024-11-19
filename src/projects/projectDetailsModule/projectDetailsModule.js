import ElementData from "../../shared/utils/ElementData";
import projectDetailsHeader from "./components/projectDetailsHeader";
import projectCreatedAt from "./components/projectCreatedAt";
import projectLastModifiedAt from "./components/projectLastModifiedAt";
import projectCompletedAt from "./components/projectCompletedAt";
import projectDueDate from "./components/projectDueDate";
import projectComponentCount from "./components/projectComponentCount";
import projectCompleteComponentCount from "./components/projectCompleteComponentCount";
import projectInCompleteComponentCount from "./components/projectInCompleteComponentCount";
import projectRelatedTasksCount from "./components/projectRelatedTasksCount";
import projectCompletionProgress from "./components/projectCompletionProgress";

export default (function projectControlsModule() 
{
  return new ElementData
  (
    'div',
    'project-details',
    {},
    [

    ]
  ).renderElement()
})()