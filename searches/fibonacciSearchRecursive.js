// fibonacciSearchRecursive.js

const fibonacciSearchRecursive = (n) => {
    const series = [0, 1];

    if (n <= 0) {
        return [];
    } else if (n === 1) {
        return [0];
    } else if (n === 2) {
        return series;
    }

    for (let i = 2; i < n; i++) {
        const nextTerm = series[i - 1] + series[i - 2];
        series.push(nextTerm);
    }

    return series;
};

const n = 10;
console.log(fibonacciSearchRecursive(n));