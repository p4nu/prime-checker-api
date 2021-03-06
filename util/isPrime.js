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

  const rootN = Math.sqrt(n);

  for (let i = 2; i < rootN; i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
};

module.exports = isPrime;
