var a =  parseFloat(lines.shift())
var b = parseFloat(lines.shift())
MEDIA = ((a * 3.5) + (b * 7.5))/11
console.log(`MEDIA = ${MEDIA.toFixed(5)}`)