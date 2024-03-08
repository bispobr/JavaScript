var valores = lines.shift().trim().split(" ")

var a = parseFloat(valores.shift())
var b = parseFloat(valores.shift())
var c = parseFloat(valores.shift())

var delta = b * b - 4 * a * c;

if (a !== 0 && delta > -1) {
  var R1 = (-b + Math.sqrt(delta)) / (2 * a);
  var R2 = (-b - Math.sqrt(delta)) / (2 * a);

  console.log(`R1 = ${R1.toFixed(5)}`);
  console.log(`R2 = ${R2.toFixed(5)}`);
} else {
  console.log("Impossivel calcular");
}