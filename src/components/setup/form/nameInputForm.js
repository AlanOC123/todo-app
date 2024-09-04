import '../../../styles/setup.css';
import createElement from '../../../utils/classes/createElement';
import ElemenData from '../../../utils/classes/ElementData';
import nameInput from '../../common/nameInput';

export default (function nameInputForm() {
	const containerData = new ElemenData(
		'div',
		'name-form',
		{
			id: 'name-form'
		},
		[nameInput.render()]
	).createElementData()

	function render() {
		
		const element = createElement(containerData);

		return element;
	}

	return {
		containerData,
		render,
	};
})();