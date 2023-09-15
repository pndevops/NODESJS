import express, { Request, Response } from "express";
import cors from "cors";
import { getUsers } from "./services/user.service";
import connect from "./utils/connect";
const app = express();
app.use(express.json());
app.use(
  cors({
    origin: ["http://localhost:3000", "*"],
    credentials: true,
  })
);
app.listen(42069, async () => {
  console.log("App running on port 42069");
  await connect();
});
app.get("/healthcheck", (req: Request, res: Response) => {
  res.status(200).send({ status: "ok" });
});

app.get("/get-users-json", (req: Request, res: Response) => {
  const data = [
    {
      id: 1,
      name: "User 1",
      email: "user1@localhost.com",
    },
    {
      id: 2,
      name: "User 2",
      email: "user2@localhost.com",
    },
  ];
  res.status(200).send(data);
});

app.get("/get-users-mongo",async (req: Request, res: Response) => {
  try {
    const users = await getUsers();
    res.status(201).send({ users: users, message: "user fetched" });
  } catch (error) {
    res.status(500).send({ message: "error fetching users from db" });
  }
});
