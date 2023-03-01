function pow(a, b) {
	return a ** b;
}
let a = prompt("Основание", [""]);
let b = prompt("Степень", [""]);
alert(pow(+a, +b));