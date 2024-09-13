import dayjs from 'https://unpkg.com/dayjs@1.11.10/esm/index.js';
// SELECTOR
const today = dayjs();
const submitBtn = document.querySelector('.js-button');
const userInput = document.querySelectorAll('.userInput');

// FUNCTIONS
submitBtn.addEventListener('click', () => {
	console.log('Button clicked');
	let dateDigit = [];

	userInput.forEach((digit) => {
		dateDigit.push(digit.value);
	});

	const userYear = Number(dateDigit[2]);
	const userMonth = Number(dateDigit[1]);
	const userDay = Number(dateDigit[0]);

	const userDate = dayjs(`${userYear}-${userMonth}-${userDay}`);

	//years difference
	const year = today.diff(userDate, 'year');
	//month difference
	const month = today.subtract(year, 'year').diff(userDate, 'month');
	//day difference
	const day = today
		.subtract(year, 'year')
		.subtract(month, 'month')
		.diff(userDate, 'day');

	console.log(year);
	console.log(month);
	console.log(day);
});
