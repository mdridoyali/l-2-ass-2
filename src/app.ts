import express, { Application, Request, Response } from 'express';
import cors from 'cors';
const app: Application = express();
// const port = 3000

// parser
app.use(express.json());
app.use(express.text());
app.use(cors());

app.get('/', (req: Request, res: Response) => {
  res.send("Hello World");
});
app.post('/', (req: Request, res: Response) => {
  const result = req.body;
  console.log(result);
  res.send(result);
});

export default app;
