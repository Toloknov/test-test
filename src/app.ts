import express, { Express, Request, Response } from "express";
import "dotenv/config";

const PORT: number = 5000;
const app: Express = express();

app.get("/", (req: Request, res: Response) => {
  console.log(process.env);

  res.send("hello node with ts");
});

app.listen(PORT, () => {
  console.log(`create server on port http://localhost:${PORT}`);
});
