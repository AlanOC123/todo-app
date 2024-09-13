import createElement from '../../utils/classes/createElement';
import ElementData from '../../utils/classes/ElementData';
import gradientAnimation from './gradientAnimation';

export default (function rootPage() {

	const containerData = new ElementData(
		'div',
		'app',
		{
			id: 'app',
		},
		[]
	).createElementData();

	function render() {
		const root = document.body;
		root.appendChild(createElement(containerData));
	}

	return {
		containerData,
		render,
	};
})();
