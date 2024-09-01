import '../../../styles/common.css';
import '../../../styles/setup.css';
import placeholder from '../../../assets/placeholder-image.jpeg';
import pictureInput from '../../common/pictureInput';
import createElement from '../../../utils/classes/createElement';
import ElementData from '../../../utils/classes/ElementData';

export default (function pictureForm() {
	const textData = new ElementData(
		'p',
		'picture-form-text font-body flex flex-center',
		{
			id: 'picture-form',
		},
		[]
	).createElementData();

	const containerData = new ElementData(
		'div',
		'picture-form',
		{
			id: 'picture-form',
		},
		[
			pictureInput.render(),
			createElement(textData)
		]
	).createElementData();

	function render() {
		const element = createElement(containerData)
		let children = Array.from(element.children);
		if (!Array.isArray(children) || !children) {
			console.error(`Children not found. Reading: ${children}`);
		};
		children = Array.from(children[0].children);
		const label = children[1];
		label.style.backgroundImage = `url(${placeholder})`;

		return element;
	}

	return {
		containerData,
		render,
	};
})();
