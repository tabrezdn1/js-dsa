// Shortcut
let a = [1, 10, 50, 100, -2]
console.log("Max number: " + Math.max(...a));
console.log("Min number: " + Math.min(...a));

// No shortcut
let b = [1, 10, 50, 100, -2]
let max = b[0];
let min = b[0];
b.forEach(function (number) {
    if (number > max) {
        max = number;
    }
    if (number < min) {
        min = number;
    }
})
console.log("Max number: " + max);
console.log("Min number: " + min);
