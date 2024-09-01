import '../../styles/common.css';
import createElement from '../../utils/classes/createElement';
import ElementData from '../../utils/classes/ElementData';

export default (function rootPage() {
	const containerData = new ElementData(
		'div',
		'full flex flex-center relative',
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
