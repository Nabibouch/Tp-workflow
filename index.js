import express from 'express'


const port = 3000;
const app = express();



app.listen(port, () =>
  console.log(`Le serveur est en écoute sur le port ${port}`)
);