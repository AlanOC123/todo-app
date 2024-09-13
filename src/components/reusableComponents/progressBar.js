import '../../styles/common.css';
import createElement from '../../utils/classes/createElement.js';
import ElementData from '../../utils/classes/ElementData.js';

export default (function progressbar() {
	const textData = new ElementData(
		'p',
		'font-card-title percentage',
		{
			id: 'progress-percent'
		},
		[],
	).createElementData();

	const circleData = new ElementData(
		'path',
		'progress',
		{
			d: "M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
		},
		[],
	).createElementData();

	const trackData = new ElementData(
		'path',
		'progress-track',
		{
			d: "M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
		},
		[],
	).createElementData();

	const svgData = new ElementData(
		'svg',
		'progress-circle',
		{
			viewBox: '0 0 36 36'
		},
		[
			createElement(trackData),
			createElement(circleData),
		],
	).createElementData();

	const containerData = new ElementData(
		'div',
		'progress-container',
		{},
		[createElement(svgData), createElement(textData)],
	).createElementData();

	function render() {
		return createElement(containerData);
	};

	return {
		containerData,
		render,
	};
})();
