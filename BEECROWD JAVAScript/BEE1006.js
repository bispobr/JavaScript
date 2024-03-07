var a = parseFloat(lines.shift())
var b = parseFloat(lines.shift())
var c = parseFloat(lines.shift())
MEDIA = ((a * 2)+(b * 3)+(c * 5))/10
console.log(`MEDIA = ${MEDIA.toFixed(1)}`)