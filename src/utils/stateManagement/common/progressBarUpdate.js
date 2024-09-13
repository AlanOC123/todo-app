export default function progressBarUpdate(full, current, text, bar) {
	if (full === undefined || current === undefined) {
		console.error(
			`Invalid values provided. Full : ${full}, Current: ${current}`
		);
		return;
	}

	if (typeof full !== 'number' || typeof current !== 'number') {
		console.error(
			`Invalid value type provided. Full ${full}. Current: ${current}`
		);
		return;
	}
	const value = ((current / full) * 100).toFixed(0) || 0;

  let percentClr;

  const root = document.documentElement;

  if (value >= 0 && value <= 33) {
    percentClr = getComputedStyle(root).getPropertyValue('--not-started-clr').trim();
  } else if (value < 100) {
    percentClr = getComputedStyle(root).getPropertyValue('--started-clr');
  } else {
    percentClr = getComputedStyle(root).getPropertyValue('--complete-clr');
  };

  const regexCheck = /^\s*(\d{1,2}|1\d{2}|2[0-4]\d|25[0-5])\s*,\s*(\d{1,2}|1\d{2}|2[0-4]\d|25[0-5])\s*,\s*(\d{1,2}|1\d{2}|2[0-4]\d|25[0-5])\s*$/

  if (!percentClr || !regexCheck.test(percentClr)) {
    console.error(`Error getting percentage bar colour. Color: ${percentClr}`);
  }

	text.textContent = `${value}%`;
	bar.style.strokeDashoffset = 100 - value;
	bar.style.stroke = `rgba(${percentClr}, 1)`;
}
