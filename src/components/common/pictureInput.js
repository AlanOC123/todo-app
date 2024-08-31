import '../../styles/common.css';
import { createElement } from '../../utils/classes/elementFactory';

export default (function pictureInput() {
	const elementData = {
		container: {
			className: 'flex flex-center',
		},
		label: {
			className: 'flex flex-center picture-preview',
			attributes: {
				id: 'picture-input-label',
				for: 'picture-input',
			},
		},
		input: {
			className: 'hidden',
			attributes: {
				type: 'file',
				id: 'picture-input',
				accept: 'image/*',
				name: 'picture-input',
			},
		},
	};

	function render() {
		const { container, label, input } = elementData;
		return createElement('div', container.className.split(' '), {}, [
			createElement(
				'label',
				label.className.split(' '),
				label.attributes
			),
			createElement('input', input.className, input.attributes),
		]);
	}

	return {
		elementData,
		render,
	};
})();
