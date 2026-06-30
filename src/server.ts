import { createServer } from "node:http";
import { readFileSync } from "node:fs";
import { join } from "node:path";

const server = createServer((req, res) => {
    const html = readFileSync(
        join(process.cwd(), "src", "public", "index.html"),
        "utf-8"
    );

    res.writeHead(200, {
        "Content-Type": "text/html; charest=utf-8",
    });

    res.end(html);
});

server.listen(3000, () => {
    console.log("Server is running!");
})

