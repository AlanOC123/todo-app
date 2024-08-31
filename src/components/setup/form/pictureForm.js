import '../../../styles/common.css';
import '../../../styles/setup.css';
import placeholder from '../../../assets/placeholder-image.jpeg';
import pictureInput from '../../common/pictureInput';
import { createElement } from '../../../utils/classes/elementFactory';

export default (function pictureForm() {
	const elementData = {
		container: {
			className: 'picture-form',
			attributes: {
				id: 'picture-form',
			},
		},
		text: {
			className: 'picture-form-text font-body flex flex-center',
			attributes: {
				id: 'picture-form',
			},
		},
	};

	function render() {
		const { container, text } = elementData;
		const pictureElement = pictureInput.render();
		const children = Array.from(pictureElement.children);
    const textElement = createElement('p', text.className.split(' '), text.attributes);
    textElement.textContent = 'Upload Image';
		if (!Array.isArray(children)) {
			console.warn(`Error parsing children. Children: ${children}`);
		}
		let label = children.filter(
			(child) => child.tagName.toLowerCase() === 'label'
		);

		if (label.length !== 1) {
			console.warn(`Error parsing label. Label: ${label}`);
		} else {
			label = label[0];
		}

		label.style.backgroundImage = `url(${placeholder}`;

		return createElement(
			'div',
			container.className.split(' '),
			container.attributes,
			[
				pictureElement,
				textElement,
			]
		);
	}

	return {
		elementData,
		render,
	};
})();
