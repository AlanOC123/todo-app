import projectsPage from "./shared/components/projectsPage";
import selectProjectModule from "./selectProjectModule/selectProjectModule";
import projectViewportModule from "./projectViewportModule/projectViewportModule";
import thoughtBubbleModule from "./thoughtBubbleModule/thoughtBubbleModule";
import timeController from "./shared/utils/timeController";

export default (function projects()
{
  timeController.startInterval();
  return projectsPage
  (
    selectProjectModule,
    projectViewportModule,
    thoughtBubbleModule,
  )
})()