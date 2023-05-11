const http = require("http");
const calc = require("./sub");

const PORT = 8080;

http.createServer((req, res) => {
    res.writeHead(200, {"Content-Type": "text/plain"});
    res.write("Hello, World! THis is my first server!\n");
    res.write("Sum: " + calc.sum(2, 5) + "\n");
    res.write("Sub: " + calc.sub(2, 5) + "\n");
    res.write("Mul: " + calc.mul(2, 5) + "\n");
    res.write("Div: " + calc.div(2, 5) + "\n");
    res.write("Modulo: " + calc.modulo(2, 5) + "\n");
    res.end();
}).listen(PORT); // Listening on port 8080.

console.log(`Server running at http://localhost:${PORT}`);
