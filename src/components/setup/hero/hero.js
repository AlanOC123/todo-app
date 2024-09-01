import '../../../styles/setup.css';
import createElement from '../../../utils/classes/createElement';
import ElementData from '../../../utils/classes/ElementData';
import welcomeMessage from './welcomeMessage';
import themeSelection from './themeSelection';

export default (function hero() {
	const containerData = new ElementData(
		'div',
		'setup-hero rounded-l shadow',
		{
			id: 'setup-hero'
		},
		[welcomeMessage.render(), themeSelection.render()]
	).createElementData();

	function render() {
		return createElement(containerData);
	}

	return {
		containerData,
		render,
	};
})();
