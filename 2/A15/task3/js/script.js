function min(a, b) {
	return (a >= b) ? b : a;
}
let a = prompt("Первое число", [""]);
let b = prompt("Второе число число", [""]);
alert(min(+a, +b));