import setupState from "../state-management/setupStates/setupState";

export default function isNameValid(value, ...fields) {
  if (!value) {
    if (setupState.name) {
      fields[0].style.borderLeft = fields[0].style.borderBottom =
        "0.5rem solid rgba(var(--complete-clr))";
      fields.forEach(
        (field) => (field.style.color = "rgba(var(--complete-clr))")
      );
      return false;
    }
    fields[0].style.borderLeft = fields[0].style.borderBottom =
      "0.5rem solid rgba(var(--not-started-clr))";
    fields.forEach((field) => {
      field.style.color = "rgba(var(--not-started-clr))";
    });
    console.error("No Name Given");
    return false;
  }

  const MIN = 2;
  const MAX = 20;
  const PATTERN = /[A-Za-z0-9]+/;
  let valid;
  const length = value.length;

  if (length > MIN && length < MAX && PATTERN.test(value)) {
    fields[0].style.borderLeft = fields[0].style.borderBottom =
      "0.5rem solid rgba(var(--complete-clr))";
    fields.forEach(
      (field) => (field.style.color = "rgba(var(--complete-clr))")
    );
    return true;
  } else {
    if (setupState.name) {
      fields[0].style.borderLeft = fields[0].style.borderBottom =
        "0.5rem solid rgba(var(--complete-clr))";
      fields.forEach(
        (field) => (field.style.color = "rgba(var(--complete-clr))")
      );
      return false;
    }
    if (length < MIN) {
      console.error(`Invalid Name ${value}. Too Short: ${length}`);
    } else if (length > MAX) {
      console.error(`Invalid Name ${value}. Too Long: ${length}`);
    } else {
      console.error(
        `Invalid Format ${value}. Format: ${PATTERN} where value is ${value}`
      );
    }
    fields[0].style.borderLeft = fields[0].style.borderBottom =
      "0.5rem solid rgba(var(--not-started-clr))";
    fields.forEach((field) => {
      field.style.color = "rgba(var(--not-started-clr))";
    });
    console.error("Invalid Name");
    return false;
  }
}
