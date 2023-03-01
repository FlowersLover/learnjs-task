function isEmpty(object) {
	for (key in object) {
		if (key in object) {
			return true;
		}
	}
	return false;
}
let schedule = {};

alert(isEmpty(schedule)); // true

schedule["8:30"] = "get up";

alert(isEmpty(schedule)); // false
