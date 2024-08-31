import '../../../styles/setup.css';
import { createElement } from '../../../utils/classes/elementFactory';

export default (function welcomeMessage() {
	const elementData = {
		className: 'font-heading',
	};

	function render() {
		const { className } = elementData;
		const element = createElement('h1', className);
		element.textContent = 'Welcome';
		return element;
	}

	return {
		elementData,
		render,
	};
})();
