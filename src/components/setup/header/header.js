import '../../../styles/setup.css';
import { createElement } from '../../../utils/classes/elementFactory';
import welcomeMessage from './welcomeMessage';
import welcomeInstructions from './welcomeInstructions';
import setupProgress from './setupProgress';

export default (function header() {
	const elementData = {
		className: 'flex flex-column setup-heading',
		children: [
			welcomeMessage.render(),
			welcomeInstructions.render(),
			setupProgress.render(),
		],
	};

	function render() {
		const { className, children } = elementData;
		return createElement('div', className.split(' '), {}, children);
	}

	return {
		elementData,
		render,
	};
})();
