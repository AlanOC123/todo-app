import createElement from "./createElement";

class ElementData {
  constructor(type, className, attributes, children) {
    this.type = type;
    this.className = className;
    this.attributes = attributes;
    this.children = children;
  }

  renderElement = () => {
    return createElement({
      type: this.type,
      className: this.className,
      attributes: this.attributes,
      children: this.children,
    });
  };
}

export default ElementData;
