import selectFilter from "../taskDisplayControlsModule/components/selectFilter";
import { listField, populateList } from "../../../reusableComponents/list";
import createElement from "../../../../utils/classes/createElement";
import ElementData from "../../../../utils/classes/ElementData";
import tasksState from "../../../../utils/stateManagement/tasksState";

const FILTER_CATEGORIES = [
  {
    filterID: 'none',
    filterName: 'viewport-filters',
    filterText: 'None',
  },
  {
    filterID: "status",
    filterName: "viewport-filters",
    filterText: "Status",
  },
  {
    filterID: "priority",
    filterName: "viewport-filters",
    filterText: "Priority",
  },
  {
    filterID: "category",
    filterName: "viewport-filters",
    filterText: "Category",
  },
];

export default function viewportFilters()
{
  return createElement
  (
    new ElementData
    (
      'div',
      'viewport-filters',
      {},
      [
        filtersHeading(),
        viewportList(),
      ]
    ).createElementData()
  )
}

function viewportList() {
  const nodes = FILTER_CATEGORIES.map((node) =>
    selectFilter(node.filterID, node.filterName, node.filterText)
  );

  nodes.forEach(node => {if (node.id === tasksState.sortBy) {node.querySelector("input").checked = true}});

  const element = listField("viewport-filter-list", "");

  populateList(nodes, element);

  return element;
}


function filtersHeading()
{
  return createElement
  (
    new ElementData
    (
      'p',
      'viewport-filter-heading',
      {},
      ['Sort By:']
    ).createElementData()
  )
}