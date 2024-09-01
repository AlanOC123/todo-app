import '../../../styles/setup.css';
import createElement from '../../../utils/classes/createElement';
import ElemenData from '../../../utils/classes/ElementData';

export default (function nameInputForm() {
	const containerData = new ElemenData(
		'div',
		'name-form',
		{
			id: 'name-form'
		},
		[]
	).createElementData()

	function render() {
		return createElement(containerData);
	}

	return {
		containerData,
		render,
	};
})();