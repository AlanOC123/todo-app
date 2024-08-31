import '../../styles/common.css';
import { createElement } from '../../utils/classes/elementFactory.js';

export default (function progressbar() {
	const elementData = {
		container: {
			className: 'progress-container',
		},
		progressSVG: {
			className: 'progress-circle',
      attributes: {
        viewBox: '0 0 36 36'
      }
		},
		progressTrack: {
			className: 'progress-track',
      attributes: {
        d: "M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
      },
		},
		progressCircle: {
			className: 'progress',
      attributes: {
        d: "M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
      },
		},
		text: {
			className: 'font-body percentage',
      attributes: {
        x: "18",
        y: "20.35",
      },
		},
	};

	function render() {
		const { container, progressSVG, progressTrack, progressCircle, text } =
			elementData;
		const svgChildren = [
			createElement('path', progressTrack.className, progressTrack.attributes),
			createElement('path', progressCircle.className, progressCircle.attributes),
			createElement('text', text.className.split(' '), text.attributes),
		];
		const svg = createElement(
			'svg',
			progressSVG.className,
			progressSVG.attributes,
			svgChildren
		);
		const element = createElement('div', container.className, {}, [svg]);
		return element;
	};

	return {
		elementData,
		render,
	};
})();
