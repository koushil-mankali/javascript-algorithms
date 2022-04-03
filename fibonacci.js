// Fibonacci series

/**
 * @description Returns the value ar provided num(index) of the fibonacci series.
 */

//O(n)
let fib = (num) => {
    let arr = [1, 1]; // 1

    for (let i = 2; i <= num; i++) { // 1
        arr.push(arr[i - 1] + arr[i - 2]); // n
    }

    return arr[num]; // 1
}

console.log(fib(4))
console.log(fib(5))

/**
 * @description This is a function returns the value at provided index from fibonacci array of elements.
 * @TimeComplextity We can say that the time complexity of this function is O(n) because it has a loop inside it.
 * @PossiableTimeComplexity O(n), As Per my knowledge, maximum speed of solving this problem in O(n) time.
 * @AlternativeSolutions We can use recurrsion for fibonacci.
 */
