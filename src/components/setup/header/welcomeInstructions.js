import '../../../styles/setup.css';
import { createElement } from '../../../utils/classes/elementFactory';

export default (function welcomeInstructions() {
	const elementData = {
		className: 'font-body',
	};

	function render() {
		const { className } = elementData;
		const element = createElement('p', className);
		element.textContent =
			"To get started, fill out the form on the right. Enter your name, select a picture and select a theme. These settings are used to personalise the experience. You can change them letter by clicking the profile picture on the bottom right of the dashboard. Once you're done, a submit button will appear.";
		return element;
	}

	return {
		elementData,
		render,
	};
})();
