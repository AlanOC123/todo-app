import '../../../styles/setup.css';
import createElement from '../../../utils/classes/createElement';
import ElemenData from '../../../utils/classes/ElementData';
import progressBar from '../../common/progressBar';

export default (function setupProgress() {
	const containerData = new ElemenData(
		'div',
		'setup-progress',
		{
			id: 'setup-progress'
		},
		[progressBar.render()]
	).createElementData()

	function render() {
		return createElement(containerData);
	}

	return {
		containerData,
		render,
	};
})();
