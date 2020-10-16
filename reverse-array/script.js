// Short cut
let a = [5, 3, 1, 2, 4];
console.log(a.reverse());

// No shortcut
let b = [5, 3, 1, 2, 4]
b.forEach(function (number, index) {
    if (index >= b.length / 2)
        return;

    let temp = b[index];
    b[index] = b[b.length - 1 - index];
    b[b.length - 1 - index] = temp;

})
console.log(b)
