import createElement from './createElement';
import ElementData from './ElementData';
import '../../styles/common.css';

class ThemeCard {
	constructor(theme) {
		(this.id = theme.id),
			(this.textName = theme.name),
			(this.icon = theme.icon),
			(this.primaryClr = theme.primaryClr),
			(this.secondaryClr = theme.secondaryClr),
			(this.highlightClr = theme.highlightClr),
			(this.contrastClr = theme.contrastClr),
			(this.textClr = theme.textClr),
			(this.notStartedClr = theme.notStartedClr),
			(this.startedClr = theme.startedClr),
			(this.completeClr = theme.completeClr);
	}

	render() {
		const iconData = new ElementData(
			'div',
			`${this.icon} theme-icon`,
			{},
			[]
		).createElementData();

		const containerData = new ElementData(
			'div',
			`theme-card shadow`,
			{
				id: this.id,
				'data-theme': this.textName,
				style: `--accent-clr-1: ${this.primaryClr}; --accent-clr-2: ${this.secondaryClr}; --accent-clr-3: ${this.highlightClr};`,
			},
			[createElement(iconData)]
		).createElementData();

		const element = createElement(containerData);

		return element;
	}
}

export default ThemeCard;
