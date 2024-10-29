import ElementData from "../../shared/utils/ElementData";

export function dropdownMenu(id) {
    return new ElementData(
      "select",
      "",
      {
        id: id,
      },
      []
    ).renderElement()
}

export function dropdownOption(value) {
  return createElement(
    new ElementData(
      "option",
      "",
      {
        value: value,
      },
      [value]
    ).createElementData()
  );
}

export function populateDataSet(dataSet, optionList) {
  if (Array.isArray(optionList)) {
    optionList.forEach((option) => {
      dataSet.append(dropdownOption(option));
    });
  }

  if (optionList instanceof Object && !Array.isArray(optionList)) {
    for (const key in optionList) {
      dataSet.append(dropdownOption(key));
    }
  }
}
