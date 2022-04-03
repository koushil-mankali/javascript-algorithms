// Find whether the given number is power of 2 or not.

//O(log n)
let powerOfTwo = (num) => {
    if (num < 1) { // 1
        return false;
    }

    let dividend = num; // 1

    while (dividend !== 1) { // log2 n
        // exp: 23.45 (floating point integers) it is not a power of 2
        if (dividend % 2 !== 0) {
            return false; // 1
        }

        dividend = dividend / 2;
    }
    return true; // 1
}

console.log(powerOfTwo(8))
console.log(powerOfTwo(5))
console.log(powerOfTwo(20))
console.log(powerOfTwo(16))
console.log(powerOfTwo(13))
console.log("-----------------")

// O(1)
let powerOfTwo2 = (num) => {
    // does binary cal of num and (num - 1) to check if the number is power of 2, If the result is 0 then it is power of 2.
    // exp: 8 & (8-1) => 8 & 7 => 0 (true)
    // 8 => 1000, 7 => 0111; 8&7 => 1000 & 0111 => 0 (true)
    return (num & (num - 1)) === 0; // 1
}

console.log(powerOfTwo2(8))
console.log(powerOfTwo2(5))
console.log(powerOfTwo2(20))
console.log(powerOfTwo2(16))
console.log(powerOfTwo2(13))