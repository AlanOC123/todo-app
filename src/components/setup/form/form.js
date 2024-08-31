import '../../../styles/setup.css';
import { createElement } from "../../../utils/classes/elementFactory";
import pictureForm from './pictureForm';

export default (function form() {
  const elementData = {
    className: 'setup-form flex flex-column flex-center',
    attibutes: {
      id: 'setup-form'
    },
    children: [pictureForm.render()],
  };

  function render() {
    const { className, attibutes, children } = elementData;
    return createElement('div', className.split(' '), attibutes, children);
  };

  return {
    elementData,
    render
  };
})();