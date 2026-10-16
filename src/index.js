import http from "http"
import {route} from "./routes.js"

const server = http.createServer(route)

server.listen(3000, () => {
    console.log("Rodando o server em http://localhost:3000")
});