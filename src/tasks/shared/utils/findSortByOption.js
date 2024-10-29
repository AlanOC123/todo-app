import taskCardValues from "./taskValues";

export default function findSortByOption(givenValue) {
  let sortByOption;
  let sortByID;

  Object.keys(taskCardValues).forEach((field) => {
    taskCardValues[field].textHeadings.forEach((heading) => {
      if (heading === givenValue) {
        sortByOption = taskCardValues[field].sortByText;
        sortByID = taskCardValues[field].sortByID;
      }
    });
  });

  return { sortByOption, sortByID } || null;
}
