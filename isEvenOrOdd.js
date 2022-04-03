// Find whether the given value is even or odd.

// O(1)
let isEven = (num) => {
    if (num % 2 === 0) { // 1
        return "even"; // 1
    }

    return "odd"; // 1
}

for (let i = 1; i <= 10; i++) {
    console.log(i, isEven(i))
}