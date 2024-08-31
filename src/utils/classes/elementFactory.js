export function createElement(type, className = [], attributes = {}, children = []) {
  const element = document.createElement(type);

  className.forEach(classItem => element.classList.add(classItem));

  Object.keys(attributes).forEach(attribute => { element.setAttribute(attribute, attributes[attribute]) });

  children.forEach(child => { 
    if (typeof child === 'string') { 
      element.appendChild(document.createTextNode(child));
    } else {
      element.appendChild(child);
    };
  });

  return element;
};