const express = require('express');
const isPrime = require('../util/isPrime');

const router = express.Router();

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

/**
 * GET /api/sumAndCheck?numbers=1,2,3,...
 */
router.get(
  '/',
  (req, res) => {
    const { numbers } = req.query;
    const parsedNumbers = numbers.toString().split(',').map(Number);
    const result = sum(parsedNumbers);

    res.json({ result, isPrime: isPrime(result) });
  },
);

module.exports = router;
