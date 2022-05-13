const express = require('express');

const router = express.Router();

/**
 * Is the number prime?
 *
 * @param {number} n Number to check if prime
 * @returns Boolean value for whether the number is prime
 * @example
 * isPrime(2); // true
 * isPrime(10); // false
 */
const isPrime = (n) => {
  if (n < 2 || n === undefined) {
    return false;
  }

  for (let i = 2; i < n; i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
};

/**
 * GET /api/isPrime
 */
router.get(
  '/',
  (req, res) => {
    const { number } = req.query;
    const parsedNumber = parseInt(number.toString(), 10);

    res.json({ isPrime: isPrime(parsedNumber) });
  },
);

module.exports = router;
