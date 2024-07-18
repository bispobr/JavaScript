var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split("\n");

while (lines.length) {
   let casos = parseInt(lines.shift()) 
   let valores = lines.shift().trim().split(" ").map((x) => parseInt(x));

   let maior = Math.max.apply(null,valores)
    
  if (maior >= 20) {
    console.log(`3`)
  } else if (maior >=10) {
    console.log(`2`);
  } else{
    console.log(`1`);
  }

}
