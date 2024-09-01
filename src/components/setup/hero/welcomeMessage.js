import '../../../styles/setup.css';
import createElement from '../../../utils/classes/createElement';
import ElementData from '../../../utils/classes/ElementData';

export default (function welcomeMessage() {

	const headingData = new ElementData(
		'h1',
		'text-left mb-1',
		{},
		[]
	).createElementData();

	const spanData1 = new ElementData(
		'span',
		'setup-text-highlight font-bold',
		{},
		['theme'],
	).createElementData();

	const spanData2 = new ElementData(
		'span',
		'setup-text-highlight font-bold',
		{},
		['name'],
	).createElementData();

	const spanData3 = new ElementData(
		'span',
		'setup-text-highlight font-bold',
		{},
		['profile picture'],
	).createElementData();

	const subheadingData = new ElementData(
		'h3',
		'text-left',
		{},
		[],
	).createElementData();

	const containerData = new ElementData(
		'div',
		'setup-message',
		{
			id: 'hero-header',
		},
		[
			createElement(headingData), 
			createElement(subheadingData)
		],
	).createElementData();

	function render() {
		const element = createElement(containerData);
		const children = Array.from(element.children);
		const heading = children[0];
		const subheading = children[1];
		
		heading.textContent = 'Welcome';
		subheading.append(document.createTextNode('Lets get set up. To begin, select a '));
		subheading.append(createElement(spanData1));
		subheading.append(document.createTextNode(' from the options below. Then, upload a '));
		subheading.append(createElement(spanData2));
		subheading.append(document.createTextNode(' by clicking the placeholder image and selecting on in the menu. Finally, enter your '));
		subheading.append(createElement(spanData3));
		subheading.append(document.createTextNode('. This will customise your experience and make it yours.'));

		return element;
	};

	return {
		containerData,
		spanData1,
		spanData2,
		spanData3,
		render,
	};
})();
