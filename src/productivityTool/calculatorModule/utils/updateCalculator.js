import productivityState from "../../shared/utils/productivityToolState";
import productivityToolEventManager from "../../shared/utils/productivityToolEventManager";
import productivityToolEvents from "../../shared/events/productivityToolEvents";
import calculatorButton from "../../shared/components/calculatorButton";

export default function updateCalculator({ value, type })
{
  const currentInput = productivityState.calculator.inputValue;
  const currentTotal = productivityState.calculator.displayValue;

  const inputArgs = 
  { 
    currentInput: currentInput, 
    currentTotal: currentTotal, 
    inputValue: value 
  };

  const functionMap =
  {
    'number': appendNumber,
    'operator':
    {
      'del': deleteValue,
      'clr': deleteAll,
      '%': convertToPercent,
      '.': insertDecimal,
      '+': appendOperator,
      '-': appendOperator,
      '*': appendOperator,
      '/': appendOperator,
      '=': equate,
    }
  }

  if (type === 'number')
  {
    functionMap[type](inputArgs);
  } else 
  {
    functionMap[type][value](inputArgs);
  };
}

function appendOperator({ currentInput, currentTotal, inputValue })
{
  const value = `${currentInput} ${inputValue} `;
  productivityState.calculator.displayValue = currentTotal += value;
  productivityState.calculator.inputValue = '0';

  productivityToolEventManager.emit
  (productivityToolEvents.calculatorDisplayUpdated);

  productivityToolEventManager.emit
  (productivityToolEvents.calculatorInputUpdated);
}

function deleteValue({ currentInput })
{
  console.log(currentInput);
  productivityState.calculator.inputValue = currentInput.slice(0, -1);

  productivityToolEventManager.emit
  (productivityToolEvents.calculatorInputUpdated);
}

function appendNumber({ currentInput, inputValue })
{
  const value = `${currentInput}${inputValue}`;
  if (productivityState.calculator.inputValue === '0')
  {
    productivityState.calculator.inputValue = inputValue;
  } else 
  {
    productivityState.calculator.inputValue = value;
  }

  productivityToolEventManager.emit
  (productivityToolEvents.calculatorInputUpdated);
}

function deleteAll()
{
  productivityState.calculator.displayValue = '';
  productivityState.calculator.inputValue = '0';
  productivityState.calculator.lastValue = '0';

  productivityToolEventManager.emit
  (productivityToolEvents.calculatorInputUpdated);

  productivityToolEventManager.emit
  (productivityToolEvents.calculatorDisplayUpdated);
}

function convertToPercent({ currentInput })
{
  productivityState.calculator.inputValue = (currentInput / 100).toString();

  productivityToolEventManager.emit
  (productivityToolEvents.calculatorInputUpdated);
}

function insertDecimal({ currentInput, inputValue })
{
  if (currentInput.includes('.'))
  {
    return;
  }

  productivityState.calculator.inputValue = currentInput += inputValue;

  productivityToolEventManager.emit
  (productivityToolEvents.calculatorInputUpdated);
}

function equate({ currentInput, currentTotal, inputValue })
{
  const value = `${currentInput} ${inputValue}`;
  productivityState.calculator.displayValue = currentTotal += value;

  const result = calculateValue();

  productivityState.calculator.inputValue = result.toString();
  productivityState.calculator.displayHistory.push(productivityState.calculator.displayValue);
  productivityState.calculator.displayValue = '';
  productivityState.calculator.lastValue = result.toFixed(0).toString();

  productivityToolEventManager.emit
  (productivityToolEvents.calculatorInputUpdated);

  productivityToolEventManager.emit
  (productivityToolEvents.calculatorDisplayUpdated);
}

function calculateValue()
{
  const total = productivityState.calculator.displayValue.split(' ');
  const operatorFunctions =
  {
    '+': (a, b) => a + b,
    '-': (a, b) => a - b,
    '/': (a, b) => 
      { 
        if (a === 0 || b === 0)
        {
          throw new Error('Division by Zero Not Allowed');
        }

        return a / b;
      },
    '*': (a, b) =>
      { 
        if (a === 0 || b === 0)
        {
          return 0
        }

        return a * b;
      },
  }

  return total.reduce(
    (acc, curr) => 
    {
      if (!isNaN(curr))
      {
        if (acc.lastOperator)
        {
          acc.result = operatorFunctions[acc.lastOperator](acc.result, parseFloat(curr))
        }
      } else if (operatorFunctions[curr])
      {
        acc.lastOperator = curr;
      }
      return acc;
    }, 
    { 
      result: parseFloat(total[0]), 
      lastOperator: null, 
    }
  ).result;
}