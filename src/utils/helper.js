/* Start Prime Number */
function isPrime(number) {
    if (number < 2) {
        return false;
    }

    for (let i = 2; i < number; i += 1) {
        if (number % i === 0) {
            return false;
        }
    }

    return true;
}

export function firstNPrimes(n) {
    const primes = [];
    let num = 2;

    while (primes.length < n) {
        if (isPrime(num)) {
            primes.push(num);
        }

        num += 1;
    }

    return primes;
}
/* End Prime Number */


/* Start Fibonacci */
export function firstFibonacci(length) {
    var fibArr = [],
      i = 0,
      j = 1;
    fibArr.push(i);
    fibArr.push(j);
    while (fibArr.length <= length) {
      fibArr.push(fibArr[j] + fibArr[i]);
      j++;
      i++;
    }
    return fibArr;
  };
/* End Fibonacci */