// Find minimum value from the array.

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 0, -77];

// sol 1
console.log(Math.min(...arr));

// sol 2  TimeComplexity => O(n)
let min = (arr) => {
    let minVal = arr[1]; // 1

    for (let i = 0; i < arr.length; i++) { // 1
        if (arr[i] < minVal) { // 1
            minVal = arr[i]; // n
        }
    }

    return minVal; // 1
}

console.log(min(arr));