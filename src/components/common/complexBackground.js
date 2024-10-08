import createElement from "../../utils/classes/createElement";
import ElementData from "../../utils/classes/ElementData";
import EventsManager from "../../utils/events/common/EventsManager";
import events from "../../utils/events/common/events";
import interactWithGradient from "../../utils/stateManagement/common/interactWithGradient";

export default (function gradientAnimation() {

  const interactiveData = new ElementData(
		'div',
		'interactive',
		{},
		[]
	).createElementData();

  const gradientOneData = new ElementData(
		'div',
		'complex-g1',
		{},
		[]
	).createElementData();

  const gradientTwoData = new ElementData(
		'div',
		'complex-g2',
		{},
		[]
	).createElementData();

  const gradientThreeData = new ElementData(
		'div',
		'complex-g3',
		{},
		[]
	).createElementData();

  const gradientFourData = new ElementData(
		'div',
		'complex-g4',
		{},
		[]
	).createElementData();

  const gradientFiveData = new ElementData(
		'div',
		'complex-g5',
		{},
		[]
	).createElementData();

  const blendData = new ElementData(
    'feBlend',
    '',
    {
      in: 'SourceGraphic',
      in2: 'effect'
    }
  ).createElementData()

  const matrixData = new ElementData(
    'feColorMatrix',
    '',
    {
      in: 'blur',
      mode: 'matrix',
      values: '1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 15 -8',
      result: 'effect'
    }
  ).createElementData()

  const blurData = new ElementData(
    'feGaussianBlur',
    [],
    {
      in: 'SourceGraphic',
      stdDeviation: '1',
      result: 'blur'
    }
  ).createElementData()

  const filterData = new ElementData(
    'filter',
    '',
    {
      id: 'effect'
    },
    [
      createElement(blurData),
      createElement(matrixData),
      createElement(blendData)
    ]
  ).createElementData();

  const defsData = new ElementData(
    'defs',
    '',
    {},
    [ createElement(filterData) ],
  ).createElementData();

  const svgData = new ElementData(
    'svg',
    '',
    {},
    [ createElement(defsData) ],
  ).createElementData()

	const gradientContainerData = new ElementData(
		'div',
		'gradient-container',
		{},
		[
      createElement(gradientOneData),
      createElement(gradientTwoData),
      createElement(gradientThreeData),
      createElement(gradientFourData),
      createElement(gradientFiveData),
      createElement(interactiveData),
    ],
	).createElementData()

	const gradientBackgroundData = new ElementData(
		'div',
		'gradient-bg',
		{
      id: 'complex-bg',
    },
		[
      createElement(svgData),
      createElement(gradientContainerData)],
	).createElementData()

  function render() {
    let element = document.getElementById(gradientBackgroundData.attributes.id);
    const root = document.getElementById('app');
    if (element) {
      return;
    }

    element = createElement(gradientBackgroundData);

    root.insertBefore(element, root.firstChild);
    interactWithGradient();
  }

  function remove() {
    const element = document.getElementById(gradientBackgroundData.attributes.id);
    const root = document.getElementById('app');
    if (element) {
      root.removeChild(element);
    };
  }

  EventsManager.on(events.complexGradientAdded, render);
  EventsManager.on(events.complexGradientRemoved, remove);
})()