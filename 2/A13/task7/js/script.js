n = prompt("Введите целое число", [""])
outer: for (let i = 2; i <= n; i++) {
	for (let k = 2; k < i; k++) {
		if (i == k) { continue; }
		if (i % k == 0) {
			continue outer;
		}
	}
	alert(i);
}
