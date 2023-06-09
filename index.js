const express = require("express");
const cors = require("cors");
const server = express();
const db = require("./src/queries");

server.use(cors());
server.use(express.json());

server.listen(7000, () => {
  console.log("Server online na porta 7000");
});

server.get("/api/user", db.getUsers);
// server.get("/carro/:id", db.getCarroById);
server.post("/api/user", db.createUser);
// server.put("/carro/:id", db.updateCarro);
// server.delete("/carro/:id", db.deleteCarro);

server.get("/", (req, res) => {
  return res.json({ info: "Node.js, Express, and Postgres API" });
});
