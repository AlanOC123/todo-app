import '../../styles/common.css';
import createElement from '../../utils/classes/createElement';
import ElementData from '../../utils/classes/ElementData';

export default (function nameInput() {
	const iconData = new ElementData(
		'div',
		'flex flex-center fa-solid fa-pen font-body',
		{
			id: 'edit-icon',
		},
		[]
	).createElementData();

	const iconContainerData = new ElementData(
		'div',
		'flex flex-center icon-container',
		{},
		[createElement(iconData)]
	).createElementData();

	const inputData = new ElementData(
		'input',
		'name-input font-body hidden',
		{
			id: 'name-input',
		},
		[]
	).createElementData();

	const labelData = new ElementData(
		'label',
		'name-label font-body rounded-l',
		{
			for: 'name-input',
		},
		[]
	).createElementData();

	const containerData = new ElementData(
		'div',
		'flex flex-center w-full border rounded-l',
		{},
		[createElement(labelData), createElement(inputData), createElement(iconContainerData)]
	).createElementData();

	function render() {
    return createElement(containerData);
  }

	return {
		containerData,
		render,
	};
})();
