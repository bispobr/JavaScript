var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.trim().split("\n");

let n = parseInt(lines.shift())
   
if (n <= 10){
    console.log(7)
} else if (n <= 30){
    console.log(n - 3)
} else if (n  <= 100){
   console.log(27 + (n -30)* 2)  
} else{
    console.log(167 + (n - 100) * 5);
}
       

