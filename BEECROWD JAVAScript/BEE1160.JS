var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split("\n");


let t = parseInt(lines.shift());
for (let i = 0; i < t; ++i) {
  let [pa, pb, g1, g2] = lines.shift().trim().split(" ");
  [pa, pb] = [parseInt(pa), parseInt(pb)];
  [g1, g2] = [parseFloat(g1) / 100, parseFloat(g2) / 100];

  let anos;

  for (anos = 1; pa <= pb && anos < 101; ++anos) {
    pa += Math.floor(pa * g1);
    pb += Math.floor(pb * g2);
  }

  if (pa <= pb) {
    console.log("Mais de 1 seculo.");
  } else {
    console.log(`${anos - 1} anos.`);
  }
}
