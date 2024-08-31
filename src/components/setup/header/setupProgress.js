import '../../../styles/setup.css';
import { createElement } from '../../../utils/classes/elementFactory';
import progressBar from '../../common/progressBar';

export default (function setupProgress() {
	const elementData = {
		id: 'setup-progress',
		className: 'setup-progress',
		children: [progressBar.render()],
	};

	function render() {
		const { id, className, children } = elementData;
		return createElement('div', className, { id }, children);
	}

	return {
		elementData,
		render,
	};
})();
