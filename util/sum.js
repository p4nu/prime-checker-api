/**
 * Calculates the sum of the numbers in the array
 *
 * @param {Array<Number>} numbers Array of numbers
 * @returns {Number} The sum of the numbers in the array
 * @example
 * sum([1, 2, 3]); // 6
 * sum([1, 2, 3, 4]); // 10
 */
const sum = (numbers) => numbers.reduce((acc, curr) => acc + curr, 0);

module.exports = sum;
