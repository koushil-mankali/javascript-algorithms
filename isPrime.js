// Find out whether the provided umber is prime number or not.

/**
 * @Note A number is a prime number if it is only divisible by 1 and itself.
 */

// O(n)
let isPrime = (val) => {

    for (let i = 2; i < val; i++) { // 1
        if (val % i === 0) { // 1
            return false; // n
        }
    }
    return true; // 1
}

// TimeComplexity => 1 + 1 + n - 2 => 2 + n - 2 => n

console.log(isPrime(5)); // true
console.log(isPrime(9)); // false

// every prime number will have a square root value so it can be divisiable by less than that number.

// O(sqrt(n))
let isPrime2 = (val) => {
    //  Math.sqrt(val) => sqrt(9) = 3 => loops for 1 time rather than 7 times.

    // 9 => sqrt(9) = 3 => 3 * 3 == 0 (not prime)
    // 5 => sqrt(5) = 2.5.. => 2.5 * 2.5 => 6.5 (prime)
    for (let i = 2; i < Math.sqrt(val); i++) { // 1
        if (val % i === 0) { // 1
            return false; // n
        }
    }
    return true; // 1
}

// TimeComplexity => 1 + 1 + n - 2 => 2 + n - 2 => n

// Average Case => O(n) => Improved O(sqrt(n))
// Worst Case => O(n) => Improved O(sqrt(n))

console.log(isPrime(5)); // true
console.log(isPrime(9)); // false