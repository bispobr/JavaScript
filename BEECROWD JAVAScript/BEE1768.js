var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.trim().split("\n");

while (lines.length) {
    let n = parseInt(lines.shift())
    let x = n / 2 + 1;

        for (let r = 1; r <= x; r++){
            
            for (let c = r; c <= n / 2; c++){ 
                process.stdout.write(" ");
            }
               
            let p = 2 * r - 1;

            for (let c = 1; c <= p; c++){
                process.stdout.write("*");
            }
                
            console.log()
        }

        let cont = 1;

        while (cont <= 2){
            for (let c = cont; c <= n / 2; c++){
                process.stdout.write(" ");}
               
            let p = 2 * cont - 1;
            
            for (let c = 1; c <= p; c++){
                process.stdout.write("*");
            }
                
            console.log()
            cont++;
        }
        console.log()
    
}