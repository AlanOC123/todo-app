import projectsPage from "./shared/components/projectsPage"
import projectDetailsModule from "./projectDetailsModule/projectDetailsModule";
import selectProjectModule from "./selectProjectModule/selectProjectModule";
import projectViewportModule from "./projectViewportModule/projectViewportModule";

export default (function projects()
{
  return projectsPage
  (
    selectProjectModule,
    projectViewportModule,
    projectDetailsModule
  )
})()