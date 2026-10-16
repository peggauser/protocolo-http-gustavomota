export function route(req, res) {
    if (req.method === "GET" && req.url === "/"){
        res.writeHead(200, {"Content-Type": "text/html;  charset=utf-8"})
        res.end("Inicio")
        return
    }

    if (req.method === "GET" && req.url === "/sobre"){
        res.writeHead(200, {"Content-Type": "text/html"})
        console.log(`${req.method} ${req.url} 200`);
        console.log(`${req.method} ${req.url} 200`);
        res.end("Sobre")
        return
    }

    if (req.method === "GET" && req.url === "/antigo"){
        res.writeHead(301, {"Content-Type": "text/html",
            "Location": "/sobre"})
            console.log(`${req.method} ${req.url} 301`);
        res.end("Sobre")
        return
    }

    if (req.method === "GET" && req.url === "/admin"){
        res.writeHead(403, {"Content-Type": "text/html"})
        console.log(`${req.method} ${req.url} 403`);
        res.end("Acesso Negado - 403")
        return
    }

    if (req.url === "/contato"){
        if (req.method !== "GET") {
            res.writeHead(405, { "Content-Type": "text/html",
            "Allow": "GET"
        });
        console.log(`${req.method} ${req.url} 405`);
        res.end("Metodo invalido");
        return;

        }
        res.writeHead(200, {"Content-Type": "text/html"})
        console.log(`${req.method} ${req.url} 200`);
        res.end("Pagina de Contato")
        return
    }

    res.writeHead(404, {"Content-Type": "text/html"})
    console.log(`${req.method} ${req.url} 404`);
    res.end("Pagina nao encontrada - 404")
    return
}