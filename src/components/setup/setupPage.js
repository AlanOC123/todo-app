import '../../styles/setup.css';
import createElement from '../../utils/classes/createElement';
import ElementData from '../../utils/classes/ElementData';
import rootPage from '../common/rootPage';
import form from './form/form';
import hero from './hero/hero';
import nameLabelChange from '../../utils/data-processing/setup/nameLabelChange';
import setUpState from '../../utils/state-management/setupState';
import EventsBus from '../../utils/events/eventBus';
import events from '../../utils/events/events';
import applyTheme from '../../utils/state-management/applyTheme';
import colourThemes from '../../utils/classes/color-themes';

export default (function setupPage() {
	const containerData = new ElementData(
		'div',
		'setup rounded-md shadow',
		{ id: 'setup' },
		[hero.render(), form.render()]
	).createElementData();

	setUpState.init = true;

	function render() {
		const root = document.getElementById(
			rootPage.containerData.attributes.id
		);

		const setup = createElement(containerData);

		if (!root) {
			console.error(`Root not found. Reading: ${root}`);
		} else {
			root.style.backgroundColor = `rgba(var(--pri-clr))`;
			root.appendChild(setup);
		};

		const {
			themeTextIndicator,
			nameTextIndicator,
			pictureIndicator,
			themeContainers,
			pictureInput,
			nameInput,
			nameLabel,
			editNameIcon,
			progressBar,
			progressBarText,
		} = cacheDOM(setup);

		themeContainers.forEach(theme => {
			theme.addEventListener('mouseenter', (e) => {
				applyTheme(e.target.id);
			});
		});

		themeContainers.forEach(theme => {
			theme.addEventListener('mouseleave', () => {
				applyTheme();
			});
		});

		EventsBus.on(events.setupUpdated, () => {
			nameLabel.textContent = nameLabelChange();
		});

		EventsBus.emit(events.setupUpdated);
	}

	function cacheDOM(parent) {
		const [hero, form] = parent.children;

		const textProgressIndicators = Array.from(
			hero.querySelectorAll('.setup-text-highlight')
		);

		const themeTextIndicator = textProgressIndicators.filter(
			(text) => text.textContent === 'theme'
		)[0];

		const nameTextIndicator = textProgressIndicators.filter(
			(text) => text.textContent === 'name'
		)[0];

		const pictureIndicator = textProgressIndicators.filter(
			(text) => text.textContent === 'profile picture'
		)[0];

		if (!themeTextIndicator || !nameTextIndicator || !pictureIndicator) {
			console.error(
				`Error caching DOM. Element not found. Theme: ${themeTextIndicator} Name: ${nameTextIndicator} Picture: ${pictureIndicator}`
			);
			return;
		}

		const themeContainers = Array.from(
			hero.querySelectorAll('.theme-card')
		);

		if (themeContainers.length === 0) {
			console.error(
				`Error caching DOM. Element not found. Theme Card Found: ${themeContainers.length}`
			);
			return;
		}

		const pictureInput = form.querySelector('#picture-input');

		if (!pictureInput) {
			console.error(
				`Error caching DOM. Element not found. Picture Input: ${pictureInput}`
			);
			return;
		}

		const nameInput = form.querySelector('#name-input');

		if (!nameInput) {
			console.error(
				`Error caching DOM. Element not found. Name Input: ${nameInput}`
			);
			return;
		}

		const nameLabel = form.querySelector('.name-label');
		
		if (!nameLabel) {
			console.error(
				`Error caching DOM. Element not found. Name Label: ${nameLabel}`
			);
			return;
		}

		const editNameIcon = form.querySelector('#edit-icon');

		if (!editNameIcon) {
			console.error(
				`Error caching DOM. Element not found. Edit Name Icon: ${editNameIcon}`
			);
			return;
		};

		const progressBar = form.querySelector('.progress');

		if (!progressBar) {
			console.error(
				`Error caching DOM. Element not found. Progress Bar: ${progressBar}`
			);
			return;
		}

		const progressBarText = form.querySelector('#progress-percent');

		if (!progressBarText) {
			console.error(
				`Error caching DOM. Element not found. Progress Bar Text: ${progressBarText}`
			);
			return;
		};

		return {
			themeTextIndicator,
			nameTextIndicator,
			pictureIndicator,
			themeContainers,
			pictureInput,
			nameInput,
			nameLabel,
			editNameIcon,
			progressBar,
			progressBarText,
		};
	}

	return {
		containerData,
		render,
	};
})();
