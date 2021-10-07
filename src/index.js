import express from 'express';

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.status(200).send({message: 'Aplicação esta no ar'});
});

const PORT = process.env.PORT || 3000;

app.listen(PORT);