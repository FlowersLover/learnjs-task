result = prompt("Введите число", ["0"]);
if (result > 0) {
	message = 1;
} else if (result < 0) {
	message = -1
} else {
	message = 0;
}
alert(message);