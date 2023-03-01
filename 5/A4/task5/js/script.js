function getMaxSubSum(arr) {
	let ans = 0;
	let sum = 0;
	for (let i = 0; i < arr.length; ++i) {
		sum += arr[i];
		ans = Math.max(ans, sum);
		sum = Math.max(sum, 0);
	}
	return ans;
}
alert(getMaxSubSum([-1, 2, 3, -9]) == 5);
alert(getMaxSubSum([2, -1, 2, 3, -9]) == 6);
alert(getMaxSubSum([-1, 2, 3, -9, 11]) == 11);
alert(getMaxSubSum([-2, -1, 1, 2]) == 3);
alert(getMaxSubSum([100, -9, 2, -3, 5]) == 100);
alert(getMaxSubSum([1, 2, 3]) == 6);