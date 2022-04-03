let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// O(n)
((arr) => {
    let sum = 0; // 1
    for (let i = 0; i < arr.length; i++) { // 1
        sum += arr[i]; // n
    }
    console.log(sum); // 1
})(arr);

// O(n)
(arr => {
    const sum = arr.reduce((acc, val) => { // 1
        return acc + val; // n
    }, 0)
    console.log(sum); // 1
})(arr);

/**
 * @description This is a function that takes an array of numbers and returns the sum of all the numbers in the array.
 * @Note This is a recursive function.
 * @TimeComplextity We can say that the time complexity of this function is O(n) because it has a loop inside it.
 * @PossiableTimeComplexity O(n), As Per my knowledge, maximum speed of solving this problem in O(n) time.
 */