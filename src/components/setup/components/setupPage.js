import '../../../styles/setup.css';
import { createElement } from '../../../utils/classes/elementFactory';
import rootPage from '../../common/rootPage';
import header from './header';

export default (function setupPage() {
  const elementData = {
    id: 'setup',
    className: 'setup flex',
    children: [header.render()]
  };

  function render() {
    const { id, className, children } = elementData;
    const root = document.getElementById(rootPage.elementData.id);
    root.appendChild(createElement('div', className.split(' '), { id }, children));
  };

  return {
    elementData,
    render
  };
})();