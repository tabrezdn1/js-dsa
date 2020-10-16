let k = 2;

// Small
let b = [1, 10, 50, 100, -2]
b = b.sort(function (a, b) {
    return a - b;
    // b-a for asc
});
console.log("ASC SORTED: " + b);
console.log("Min Kth number for K = " + k + " : " + b[k - 1]);
console.log("Max Kth number for K = " + k + " : " + b[b.length - k]);


// Custom
let a = [1, 10, 50, 100, -2];
a = a.sort(function (a, b) {
    // You can use custom operations here 
    if (a > b) return 1
    else if (a < b) return -1
    else return 0
});
console.log("ASC SORTED: " + a);
console.log("Min Kth number for K = " + k + " : " + a[k - 1]);
console.log("Max Kth number for K = " + k + " : " + a[a.length - k]);


