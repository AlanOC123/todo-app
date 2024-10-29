export default function toggleModule(e)
{
  const target = e.target.closest('.open-module');
  const className = 'module-active';

  const isCalculator = target.classList.contains('calculator-data');
  const isTimer = target.classList.contains('timer-data');

  const calculatorModule = document.querySelector('.calculator');
  const timerModule = document.querySelector('.timer');
  const activeModule = document.querySelector(`.${className}`);

  if (activeModule)
  {
    activeModule.classList.remove(className);
  }

  if (isCalculator)
  {
    calculatorModule.classList.add(className);
  } else if (isTimer)
  {
    timerModule.classList.add(className);
  } else
  {
    return;
  }
}