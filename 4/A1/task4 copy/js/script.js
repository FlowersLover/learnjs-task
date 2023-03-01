function multiplyNumeric(object) {
	for (key in object) {
		if (typeof (object[key]) == 'number') {
			object[key] *= 2
		}
	}
}
// до вызова функции
let menu = {
	width: 200,
	height: 300,
	title: "My menu"
};

multiplyNumeric(menu);
for (key in menu) {
	alert(menu[key])
}
// после вызова функции
menu = {
	width: 400,
	height: 600,
	title: "My menu"
};