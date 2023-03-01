function readNumber() {
	let a;
	while (!isFinite(a)) {
		a = prompt("Введите число", [0]);
	}

	if (a === null | a === '') return null;

	return +a;
}
alert(readNumber());