var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.trim().split("\n");

while (lines.length) {

    let n = parseInt(lines.shift());

    livros = [];

    for (let i = 0; i < n; i++) {
      livros[i] = lines.shift();
    }

    livros.sort();

    livros.forEach((livro, index) => {
      console.log(`${livro}`);
    });
    
}




