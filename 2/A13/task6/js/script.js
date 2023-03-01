while (1) {
	number = prompt("Введите число больше 100", [""]);
	if (number == null || number == "" || number > 100) {
		break;
	} else {
		alert("Введите число еще раз");
	}
}