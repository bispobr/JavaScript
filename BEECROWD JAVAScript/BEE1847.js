var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

valores = lines.shift().trim().split(" ").map((x) => parseInt(x))

let A = valores[0];
let B = valores[1];
let C = valores[2];
        
if (B < A && C >= B) {
    console.log(":)")
} else if (B > A && C <= B) {
    console.log(":(")
} else if (B > A && C > B && C - B < B - A) {
    console.log(":(")
} else if (B > A && C > B && C - B >= B - A) {
    console.log(":)")
} else if (B < A && C < B && B - C < A - B) {
    console.log(":)")
} else if (B < A && C < B && B - C >= A - B) {
    console.log(":(")
} else if (A == B) {
    if (C > B) {
        console.log(":)")
    } else {
    console.log(":(")
    }
}