import {homePage, alunosPage, cursosPage, contatoPage, nafPage} from "./views.js"

export function route(req, res) {
    if (req.method === "GET" && req.url === "/"){
        res.writeHead(200, {"Content-Type": "text/html;  charset=utf-8"})
        res.end()
        return
    }

    if (req.method === "GET" && req.url === "/sobre"){
        res.writeHead(200, {"Content-Type": "text/html"})
        res.end()
        return
    }

    if (req.method === "GET" && req.url === "/antigo"){
        res.writeHead(301, {"Content-Type": "text/html",
            "Location": "/sobre"})
        res.end()
        return
    }

    if (req.method === "GET" && req.url === "/contato"){
        res.writeHead(200, {"Content-Type": "text/html"})
        res.end()
        return
    }

    res.writeHead(404, {"Content-Type": "text/html"})
    res.end(nafPage())
    return
}