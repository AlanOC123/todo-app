import ElementData from "../../../../../shared/utils/ElementData";

export default function relatedToProjectOption(project)
{
  if (!project)
  {
    return;
  }

  let textValue = project === 'None' ? project : project.getProjectName();

  if (!textValue)
  {
    return;
  }

  const element = new ElementData
  (
    'option',
    'task-related-to-project-option',
    {
      value: `${textValue}`
    },
    [textValue]
  ).renderElement();

  return element;
};