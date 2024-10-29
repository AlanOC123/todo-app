import productivityState from "../../shared/utils/productivityToolState";

export default function updateTotal()
{
  const totalElement = document.querySelector('.calculator-total-display');

  totalElement.textContent = productivityState.calculator.displayValue;
}