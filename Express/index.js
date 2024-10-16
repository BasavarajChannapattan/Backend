import express from "express";
import logger from "./loggers.js";
import morgan from "morgan";

const app = express();
const port = 3000;
app.use(express.json());

const morganFormat = ":method :url :status :response-time ms:http";
app.use(
  morgan(morganFormat, {
    stream: {
      write: (message) => {
        const logObject = {
          method: message.split(" ")[0],
          url: message.split(" ")[1],
          status: message.split(" ")[2],
          responseTime: message.split(" ")[3],
          http: message.split(" ")[1],
        };
        logger.info(JSON.stringify(logObject));
      },
    },
  })
);

let usersData = [];
let nextId = 1;

//create user
app.post("/user", (req, res) => {
  const { name, job } = req.body;
  const newUser = { id: nextId++, name, job };
  usersData.push(newUser);
  res.status(201).send(newUser);
});

//get all user
app.get("/users", (req, res) => {
  res.status(200).send(usersData);
});

//get single user
app.get("/users/:id", (req, res) => {
  const user = usersData.find((t) => t.id === parseInt(req.params.id));

  if (!user) {
    return res.status(404).send("User Not Found!!!");
  }
  res.status(200).send(user);
});

//update user
app.put("/users/:id", (req, res) => {
  const user = usersData.find((t) => t.id === parseInt(req.params.id));
  if (!user) {
    return res.status(404).send("User Not Found!!!");
  }
  const { name, job } = req.body;
  user.name = name;
  user.job = job;
  res.status(200).send(user);
});

//delete user
app.delete("/users/:id", (req, res) => {
  const index = usersData.findIndex((t = t.id === parseInt(req.params.id)));

  if (index === -1) {
    return res.status(404).send("User Not Found!!!");
  }
  usersData.splice(index, 1);
  return res.status(204).send("User deleted");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
