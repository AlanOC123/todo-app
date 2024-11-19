export default function createElement
({
	type,
	className = [],
	attributes = {},
	children = [],
}) {
	// Function Start
	if (!isValidType(type)) {
		throw new Error(`Invalid Type Provided: ${type}`);
	}

	const namespace = isSVGType(type) ? 'http://www.w3.org/2000/svg' : null;
	const element = namespace
		? document.createElementNS(namespace, type)
		: document.createElement(type);

	if (typeof className === 'string') {
		className = className.split(' ');
	}

	if (namespace) {
		element.setAttribute('class', className.join(' '))
	} else {
		className.forEach((classItem) => addClass(element, classItem));
	}

	if (isValidAttributeObject(attributes)) {
		Object.keys(attributes).forEach((attribute) => {
			if (isValidAttributeProperty(attributes, attribute)) {
				if (namespace && isSVGAttribute(attribute)) {
					element.setAttributeNS(null, attribute, attributes[attribute])
				} else {
					element.setAttribute(attribute, attributes[attribute]);
				}
			}
		});
	}

	if (!Array.isArray(children)) {
		addChild(element, children);
	} else {
		children.forEach((child) => {
			addChild(element, child);
		});
	}

	return element;
}

// Helper Functions

function addChild(parent, child) {
	if (!isValidChild(child)) {
		//console.warn(`Invalid element provided: ${child}. Parent: ${parent}`);
		return;
	}

	if (typeof child === 'string') {
		parent.appendChild(document.createTextNode(child));
	} else {
		parent.appendChild(child);
	}
}

function addClass(element, classItem) {
	if (!isValidClass(classItem)) {
		if (classItem === '') {
			return;
		}
		console.warn(`Invalid class name provided: ${classItem}`);
		return;
	}
	element.classList.add(classItem);
}

function isValidType(type) {
	return typeof type === 'string' && type.trim().length > 0;
}

function isSVGType(type) {
	return [
		'svg',
		'path',
		'text',
		'circle',
		'rect',
		'line',
		'ellipse',
		'polygon',
		'polyline',
		'g',
		'defs',
		'filter',
		'feGaussianBlur',
		'feColorMatrix',
		'feBlend',
	].includes(type);
}

function isValidClass(classItem) {
	return typeof classItem === 'string' && classItem.trim().length > 0;
}

function isValidAttributeObject(attributes) {
	return attributes && typeof attributes === 'object';
}

function isValidAttributeProperty(attributes, property) {
	return (
		typeof property === 'string' && typeof attributes[property] === 'string'
	);
}

function isSVGAttribute(attribute) {
	return [
		'fill',
		'stroke',
		'viewBox',
		'xlink:href',
		'xmlns',
		'preserveAspectRatio',
		'width',
		'height',
		'in',
		'stdDeviation',
		'result',
		'mode',
		'values',
		'in2',
	].includes(attribute);
}

function isValidChild(node) {
	return typeof node === 'string' || node instanceof Node;
}
