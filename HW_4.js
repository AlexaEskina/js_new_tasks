//isNaN

function myIsNaN(value) {
	return typeof value !== 'number' || value !== value;
}
console.log(myIsNaN('string'));
console.log(myIsNaN(123));
console.log(myIsNaN(NaN));
console.log(myIsNaN(undefined));

//2nd_task 
function checkProbabilityTheory(count) {
	let oddCount = 0;
	let evenCount = 0;
	for (let i = 0; i < count; i++) {
		let randomNumber = Math.floor(Math.random() * (1000 - 100 + 1)) + 100;
		if (randomNumber % 2 === 0) {
			evenCount++;
		} else {
			oddCount++;
		}
	}
	console.log("Кількість згенерованих чисел: " + count);
	console.log("Парних чисел: " + evenCount);
	console.log("Непарних чисел: " + oddCount);
	let evenPercentage = (evenCount / count) * 100;
	let oddPercentage = (oddCount / count) * 100;
	console.log("Відсоток парних до не парних: " + evenPercentage.toFixed(2) + "% / " + oddPercentage.toFixed(2) + "%");
}
checkProbabilityTheory(2500);