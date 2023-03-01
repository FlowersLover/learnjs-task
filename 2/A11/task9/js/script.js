let result;
let password;
result = prompt("Кто там?", [""]);
if (result === "Админ") {
	password = prompt("Пароль?", [""]);
	if (password == null || password === "") {
		alert("Отменено");
	} else if (password === "Я Главный") {
		alert("Здравствуйте!");
	} else {
		alert("Неверный пароль");
	}
} else if (result == null || result === "") {
	alert("Отменено");
} else {
	alert("Я вас не знаю");
}