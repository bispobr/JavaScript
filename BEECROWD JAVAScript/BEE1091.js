
const { readFileSync } = require("node:fs")
const lines = readFileSync("/dev/stdin", "utf8")
	.split("\n")
	.map((line) => line.split(" ", 2).map(value => Number.parseInt(value, 10)))

const input = (function* (lines) {
	for (const line of lines) yield line
})(lines)

function NlogoniaDelimits(dX, dY) {
	return function (x, y) {
		if (x === dX || y == dY) return "divisa"
		if (x > dX && y > dY) return "NE"
		if (x  <  dX && y > dY) return "NO"
		if (x > dX && y < dY) return "SE"
		if (x < dX && y < dY) return "SO"
	}
}

function main() {
	const output = []

	for (let line = input.next(); line.value[0] != 0; line = input.next()) {
		const [delimiters] = line.value
		const [dX, dY] = input.next().value
		const nlogoniaDelimitsInstance = NlogoniaDelimits(dX, dY)

		for (let i = 0; i  <  delimiters; i++) {
			output.push(nlogoniaDelimitsInstance(...(input.next().value)))
		}
	}

	console.log(output.join("\n"))
}

main()
