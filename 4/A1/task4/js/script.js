let salaries = {
	John: 100,
	Ann: 160,
	Pete: 130
}
let salaries2 = {
}
function sumSalary(object) {
	let sum = 0;
	for (let key in object) {
		sum += object[key];
	}
	return sum;
}
alert(sumSalary(salaries));
alert(sumSalary(salaries2));
