const path = require("path");
const express = require("express");

const app = express();
const PORT = process.env.PORT | 3000;

app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.post('/usuarios/editar/:id', (req, res) => {
  res.send(`
    Dados recebidos para o usuário: ${req.params.id}

    ${JSON.stringify(req.body, null, 2)}
  `);
})

app.listen(PORT, () => console.log(`Server is up and running on port: ${PORT}`));
