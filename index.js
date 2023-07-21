import cors from 'cors';
import express from 'express';
import morgan from 'morgan';
import { router } from './Routes/Api.js';

const app = express();
const port = process.env.PORT;

app.use(cors());
app.use(morgan('dev'));
app.use(express.static("public"));
app.use(express.json());

app.use ('/api', router);

app.use(express.static("public"));


app.listen(port, () => {
  console.log(`Server listening on port http://localhost:${port}`);
});