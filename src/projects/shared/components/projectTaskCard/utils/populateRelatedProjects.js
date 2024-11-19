import relatedToProjectOption from "../components/relatedToProjectOption";
import testProjects from "../../../utils/testProjects";

export default function populateRelatedProjects(listElement)
{
  listElement.append(relatedToProjectOption('None'));
  testProjects.forEach
  (
    project => listElement.append(relatedToProjectOption(project))
  );
}