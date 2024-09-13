import '../../styles/common.css';
import createElement from '../../utils/classes/createElement';
import ElementData from '../../utils/classes/ElementData';

export default (function nameInput() {

	const inputData = new ElementData(
		'input',
		'name-input font-body',
		{
			id: 'name-input',
			name: 'name-input',
			type: 'text',
			minlength: '4',
			maxlength: '20',
			title: "Name must be alphanumeric",
			autocomplete: 'on',
			pattern: '[A-Za-z0-9]+'
		},
		[]
	).createElementData();

	const inputDecorationData = new ElementData(
		'div',
		'label-line font-body',
		{},
		['Enter Your Name']
	).createElementData()

	const inputContainerData = new ElementData(
		'div',
		'name-input-area',
		{},
		[createElement(inputData), createElement(inputDecorationData)]
	).createElementData()

	const labelData = new ElementData(
		'div',
		'font-body fa-solid fa-pen',
		{
			
		},
		[]
	).createElementData();

	const labelContainerData = new ElementData(
		'label',
		'name-label flex flex-center w-full',
		{
			for: 'name-input',
		},
		[createElement(labelData)]
	)

	const containerData = new ElementData(
		'div',
		'input-area',
		{},
		[createElement(inputContainerData), createElement(labelContainerData) ]
	).createElementData();

	function render() {
    return createElement(containerData);
  }

	return {
		containerData,
		render,
	};
})();
