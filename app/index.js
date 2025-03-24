import express from 'express'
import router from './routes.js';
import connectionDB from './db/db.js';

const port = 3000;
const app = express();
app.use(express.json());
connectionDB();


app.use(router)

app.listen(port, () =>
  console.log(`Le serveur est en écoute sur le port ${port}`)
);

