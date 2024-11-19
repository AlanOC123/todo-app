import ElementData from '../../../shared/utils/ElementData';

export default function projectViewportSectionHeader(sectionHeader, arraylength)
{
  const componentCount = new ElementData
  (
    'div',
    'project-viewport-section-header-count',
    {},
    [
      new ElementData
      (
        'p',
        'project-viewport-section-header-count-text',
        {},
        [arraylength]
      ).renderElement()
    ]
  ).renderElement()

  const header = new ElementData
  (
    'h3',
    'project-viewport-section-header-text',
    {},
    [sectionHeader]
  ).renderElement()

  const element = new ElementData
  (
    'div',
    'project-viewport-section-header',
    {},
    [
      header,
      componentCount
    ]
  ).renderElement()

  return element;
}