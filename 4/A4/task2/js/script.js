
let calculator = {
	sum() {
		return this.a + this.b;
	},
	mul() {
		return this.a * this.b;
	},
	read() {
		this.a = +prompt("Введите первое число", ["0"]);
		this.b = +prompt("Введите второе число", ["0"]);
	},

};

calculator.read();
alert(calculator.sum());
alert(calculator.mul());

