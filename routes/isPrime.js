const express = require('express');

const router = express.Router();

/**
 * Is the number prime?
 *
 * @param {number} n Number to check if prime
 * @returns Boolean value for whether the number is prime
 */
const isPrime = (n) => {
  if (n < 2) {
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
 * POST /api/isPrime
 */
router.post(
  '/',
  (req, res) => {
    const { number } = req.body;
    const numberIsPrime = isPrime(number);
    res.json({ numberIsPrime });
  },
  // res.json({ isPrime: isPrime(number) });
);

module.exports = router;
