const express = require('express');
const isPrime = require('../util/isPrime');
const sum = require('../util/sum');

const router = express.Router();

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
