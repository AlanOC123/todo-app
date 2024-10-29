import createElement from "../../utils/classes/createElement";
import ElementData from "../../utils/classes/ElementData";

export default function section(className, id, ...children)
{
  return createElement
  (
    new ElementData
    (
      'section',
      className,
      {
        id: id,
      },
      [
        ...children
      ]
    )
  );
};