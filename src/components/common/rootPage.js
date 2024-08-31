import '../../styles/common.css';
import { createElement } from '../../utils/classes/elementFactory';

export default (function rootPage() {
  const elementData = {
    id: 'index-page',
    className: 'flex flex-center relative'
  };

  function render() {
    const { id, className } = elementData;
    const root = document.body;
    const element = createElement('div', className.split(' '), { id });
    root.appendChild(element);
  }

  return {
    elementData,
    render
  };

})();