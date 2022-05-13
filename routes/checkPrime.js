const express = require('express');
const isPrime = require('../util/isPrime');

const router = express.Router();

/**
 * GET /api/checkPrime
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
