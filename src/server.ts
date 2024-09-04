import express from 'express';
import { run } from './model/model';
const app = express();
const port = 3000;


app.get('/', (req, res) => {
  res.send('Hello, TypeScript + Node.js + Express!');
});

app.listen(port, () => {
  console.log(`Server is running on ${port}`);
  run();
});


