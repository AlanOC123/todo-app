import '../../styles/setup.css';
import createElement from '../../utils/classes/createElement';
import ElementData from '../../utils/classes/ElementData';
import rootPage from '../common/rootPage';
import form from './form/form';
import hero from './hero/hero';

export default (function setupPage() {
	const containerData = new ElementData(
		'div',
		'setup rounded-md shadow',
		{ id: 'setup' },
		[hero.render(), form.render()]
	).createElementData();

	function render() {
		const root = document.getElementById(
			rootPage.containerData.attributes.id
		);

		if (!root) {
			console.error(`Root not found. Reading: ${root}`);
		} else {
			root.style.backgroundColor = `rgba(var(--pri-clr))`;
			root.appendChild(createElement(containerData));
		}
	}

	return {
		containerData,
		render,
	};
})();
