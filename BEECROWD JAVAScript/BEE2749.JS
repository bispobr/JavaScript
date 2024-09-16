var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split("\n");

process.stdout.write("---------------------------------------\n");
process.stdout.write("|x = 35                               |\n");
process.stdout.write("|                                     |\n");
process.stdout.write("|               x = 35                |\n");
process.stdout.write("|                                     |\n");
process.stdout.write("|                               x = 35|\n");
process.stdout.write("---------------------------------------\n");