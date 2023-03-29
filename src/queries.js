const Pool = require("pg").Pool;
const pool = new Pool({
  user: "postgres",
  password: "1234",
  host: "127.0.0.1",
  port: 5432,
  database: "astronomus",
});

const getUsers = (request, response) => {
  pool.query("SELECT * FROM users ORDER BY id ASC", (error, results) => {
    if (error) {
      throw error;
    }
    response.status(200).json(results.rows);
  });
};

// const getCarroById = (request, response) => {
//   const id = parseInt(request.params.id);

//   pool.query("SELECT * FROM carros WHERE id = $1", [id], (error, results) => {
//     if (error) {
//       throw error;
//     }
//     response.status(200).json(results.rows);
//   });
// };

const createUser = (request, response) => {
  const { email, name, password } = request.body.data;

  pool.query(
    "INSERT INTO users (email, name, password) VALUES ($1, $2, $3)",
    [email, name, password],
    (error, results) => {
      if (error) {
        response.status(404).send({ message: "Error when registring user!" });
      }
      response.status(201).send({ message: `${name} successfully registred!` });
    }
  );
};

// const updateCarro = (request, response) => {
//   const id = parseInt(request.params.id);
//   const { categoria, marca, modelo, nome, ano, valor, loja } = request.body;

//   pool.query(
//     "UPDATE carros SET categoria = $1, marca = $2, modelo = $3, nome = $4, ano = $5, valor = $6, loja = $7 WHERE id = $8",
//     [categoria, marca, modelo, nome, ano, valor, loja, id],
//     (error, results) => {
//       if (error) {
//         throw error;
//       }
//       response.status(200).send(`Carro modified with ID: ${id}`);
//     }
//   );
// };

// const deleteCarro = (request, response) => {
//   const id = parseInt(request.params.id);

//   pool.query("DELETE FROM carros WHERE id = $1", [id], (error, results) => {
//     if (error) {
//       throw error;
//     }
//     response.status(200).send(`Carro deleted with ID: ${id}`);
//   });
// };

module.exports = {
  getUsers,
  //   getCarroById,
  createUser,
  //   updateCarro,
  //   deleteCarro,
};
