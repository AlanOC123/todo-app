import '../../../styles/setup.css';
import createElement from '../../../utils/classes/createElement';
import ElementData from '../../../utils/classes/ElementData';
import progressBar from './progressBar';
import pictureForm from './pictureForm';
import nameInputForm from './nameInputForm';

export default (function form() {
	const containerData = new ElementData(
		'div',
		'setup-form',
		{
			id: 'setup-form',
		},
		[pictureForm.render(), nameInputForm.render(), progressBar.render()]
	).createElementData();

	function render() {
		return createElement(containerData);
	}

	return {
		containerData,
		render,
	};
})();
