import dayjs from 'https://unpkg.com/dayjs@1.11.10/esm/index.js';
// SELECTOR
const today = dayjs();
const submitBtn = document.querySelector('.js-button');
const userInput = document.querySelectorAll('.userInput');
const renderDate = document.querySelector('.display-date');
const errorMessage = document.querySelectorAll('.error-display');
const labelDate = document.querySelectorAll('.date-label');

// FUNCTIONS
submitBtn.addEventListener('click', () => {
	let dateDigit = [];

	userInput.forEach((digit, index) => {
		const displayError = errorMessage[index];
		const dateLabel = labelDate[index];

		// Check for empty input first
		if (!digit.value) {
			displayError.style.display = 'block';
			displayError.innerText = 'This field is required';
			dateLabel.style.color = 'red';
			digit.style.borderColor = 'red';
			hasError = true;
			return;
		}

		// Check for valid day input
		if (digit.id === 'day-input' && (digit.value < 1 || digit.value > 31)) {
			displayError.style.display = 'block';
			displayError.innerText = 'Must be a valid day';
			dateLabel.style.color = 'red';
			digit.style.borderColor = 'red';
			hasError = true;
		} else if (
			digit.id === 'month-input' &&
			(digit.value < 1 || digit.value > 12)
		) {
			displayError.style.display = 'block';
			displayError.innerText = 'Must be a valid month';
			dateLabel.style.color = 'red';
			digit.style.borderColor = 'red';
			hasError = true;
		} else if (
			digit.id === 'year-input' &&
			(digit.value < 1900 || digit.value > today.$y)
		) {
			displayError.style.display = 'block';
			displayError.innerText = 'Must be in the past';
			dateLabel.style.color = 'red';
			digit.style.borderColor = 'red';
			hasError = true;
		} else {
			dateDigit.push(digit.value);
			displayError.style.display = 'none';
			dateLabel.style.color = 'var(--clr-neutral-smokeyGrey)';
			digit.style.borderColor = 'var(--clr-neutral-lightGrey)';
		}
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

	renderDate.innerHTML = `<div class="display-years">
					<span class="digit-years">${year}</span> years
				</div>
				<div class="display-months">
					<span class="digit-months">${month}</span> months
				</div>
				<div class="display-days"><span class="digit-days">${day}</span> days</div>`;
});

//required input warning
