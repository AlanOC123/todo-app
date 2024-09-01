import '../../styles/common.css';
import createElement from '../../utils/classes/createElement';
import ElementData from '../../utils/classes/ElementData';

export default (function pictureInput() {

	const inputData = new ElementData(
		'input',
		'hidden',
		{
			type: 'file',
			id: 'picture-input',
			accept: 'image/*',
			name: 'picture-input',
		},
		[]
	).createElementData();

	const labelData = new ElementData(
		'label',
		'picture-preview shadow',
		{
			id: 'picture-input-label',
			for: 'picture-input',
		},
		[]
	).createElementData();

	const containerData = new ElementData(
		'div',
		'flex flex-center full',
		{},
		[ 
			createElement(inputData),
			createElement(labelData)
		],
	).createElementData();

	function render() {
		return createElement(containerData);
	}

	return {
		containerData,
		inputData,
		labelData,
		render,
	};
})();
