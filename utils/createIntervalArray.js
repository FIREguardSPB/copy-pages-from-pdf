module.exports = function createIntervalArray(num1, num2) {
	let nums = [num1, num2 ? num2 : num1]
	console.log(nums, '====')
	const intervalArray = []
	for (let i = nums[0]; i <= nums[1]; i++) {
		intervalArray.push(i - 1)
	}
	console.log(intervalArray, '!!!!!!!!!!')
	return intervalArray
}