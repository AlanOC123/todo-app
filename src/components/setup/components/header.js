import '../../../styles/setup.css';
import { createElement } from '../../../utils/classes/elementFactory';

export default (function header() {
  const elementData = {
    className: 'flex flex-row setup-heading'
  };

  function render() {
    const { className } = elementData;
    return createElement('div', className.split(' '));
  };

  return {
    elementData,
    render
  };
})();