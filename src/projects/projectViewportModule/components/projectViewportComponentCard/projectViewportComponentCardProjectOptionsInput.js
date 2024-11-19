import ElementData from "../../../../shared/utils/ElementData";
import testProjects from "../../../shared/utils/testProjects";
import changeProject from "../../utils/changeProject";

export default function projectViewportComponentCardProjectOptionsInput(componentClass)
{
  const element = new ElementData
  (
    'select',
    'change-project-input',
    {},
    []
  ).renderElement();

  function optionElement(project)
  {
    return new ElementData
    (
      'option',
      'change-project-input-option',
      {
        value: project.getProjectID()
      },
      [ project.getProjectName() ]
    ).renderElement();
  }

  testProjects.forEach
  (
    project => element.append(optionElement(project))
  );

  function elementChanged()
  {
    changeProject(element, componentClass);
  }

  element.onchange = elementChanged;

  return element;
}