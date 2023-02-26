const express = require("express");
const app = express();
const cors = require("cors");
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
const port = process.env.PORT || 5000;
app.use(require("./router/auth"));
app.listen(port, () => {
  console.log("Listening from backend to port ", port);
});
