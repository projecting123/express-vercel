import express from "express";
import cors from "cors";
import createAccount from "./handlers/createAccount.js";
import loginHandler from "./handlers/loginHandler.js";
import connect from "./db/connect.js";

await connect();

const app = express();

app.use(cors());
app.use(express.json());
app.get("/", (req, res) => {
  res.json({
    message: "API is working fine.",
    statusCode: 200,
    developedBy: "Ankur Rajbongshi",
  });
});
app.post("/create-account", createAccount);
app.post("/login", loginHandler);

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
