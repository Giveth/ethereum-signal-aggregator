const express = require("express")
const path = require("path")
const next = require("next")

const routes = require("./routes")

const dev = process.env.NODE_ENV !== "production"
const app = next({ dev })
const handle = routes.getRequestHandler(app)

const server = express()

// enable middleware for i18next
server.use(i18nextMiddleware.handle(i18nInstance))

// serve general static files
server.use("/static", express.static(path.join(__dirname, "/static")))

// serve locales for client
server.use("/locales", express.static(path.join(__dirname, "/locales")))

// missing keys
server.post(
  "/locales/add/:lng/:ns",
  i18nextMiddleware.missingKeyHandler(i18nInstance),
)

// use next.js
server.get("*", (req, res) => handle(req, res))

server.listen(3000, err => {
  if (err) throw err
  console.log("> Ready on http://localhost:3000")
})
