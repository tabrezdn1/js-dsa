// Shortcut
let a = "Hello"
console.log(a.split('').reverse().join(''));

// No shortcut requires new variable
let b = "Hello"
let reverse_b = ""
for (let i = b.length - 1; i >= 0; i--) {
    reverse_b += b.charAt(i);
}
console.log(reverse_b);