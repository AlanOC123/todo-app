import '../../../styles/setup.css';
import createElement from '../../../utils/classes/createElement';
import ElementData from '../../../utils/classes/ElementData';
import colourThemes from '../../../utils/classes/color-themes';
import ThemeCard from '../../../utils/classes/ThemeCard';

export default (function themeSelection() {
	const containerData = new ElementData(
    'div',
    'setup-theme',
    {
      id: 'setup-theme'
    },
    [],
  ).createElementData()

  colourThemes.forEach(theme => containerData.children.push(new ThemeCard(theme).render()));

	function render() {
		return createElement(containerData);
	}

	return {
		containerData,
		render,
	};
})();