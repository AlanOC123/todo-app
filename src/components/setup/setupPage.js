import '../../styles/setup.css';
import { createElement } from '../../utils/classes/elementFactory';
import rootPage from '../common/rootPage';
import header from './header/header';
import form from './form/form';

export default (function setupPage() {
	const elementData = {
		className: 'setup flex',
		attributes: {
			id: 'setup',
		},
		children: [header.render(), form.render()],
	};

	function render() {
		const { className, attributes, children } = elementData;
		const root = document.getElementById(rootPage.elementData.id);
		root.appendChild(
			createElement('div', className.split(' '), attributes, children)
		);
	}

	return {
		elementData,
		render,
	};
})();
