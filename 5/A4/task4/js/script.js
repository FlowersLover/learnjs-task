function sumInput() {
	let arr = [];
	let num;
	let sum = 0;
	while (1) {
		num = prompt("Введите значение", [0])
		if (num === "" || num === null || !isFinite(num)) {
			break;
		}
		arr.push(+num);
	}
	for (let number of arr) {
		alert(number);
		sum += number;
	}
	return sum;
}
sumInput();