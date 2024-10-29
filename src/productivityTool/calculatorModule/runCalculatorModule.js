import calculatorBody from "./components/calculatorBody";
import calculatorButtonsContainer from "./components/calculatorButtonsContainer";
import calculatorDisplayContainer from "./components/calculatorDisplayContainer";
import calculatorInputDisplay from "./components/calculatorInputDisplay";
import calculatorTotalDisplay from "./components/calculatoryTotalDisplay";
import calculatorKeyValuesData from './utils/calculatorKeyValuesData';
import calculatorKey from './components/calculatorKey';
import productivityToolEventManager from "../shared/utils/productivityToolEventManager";
import updateCalculator from "./utils/updateCalculator";
import productivityToolEvents from "../shared/events/productivityToolEvents";

export default function runCalculatorModule()
{
  const nodes = [];
  
  calculatorKeyValuesData.forEach(node => nodes.push(calculatorKey(node)));

  const element = calculatorBody
  (
    calculatorDisplayContainer
    (
      calculatorTotalDisplay(),
      calculatorInputDisplay(),
    ),
    calculatorButtonsContainer
    (
      ...nodes
    )
  )

  productivityToolEventManager.on(productivityToolEvents.calculatorUpdated, updateCalculator);

  return element;
}