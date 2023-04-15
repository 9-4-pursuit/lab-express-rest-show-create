const express = require("express");
const app = express();

const logs = require("./controllers/logsControllers")

app.use(express.json());
app.use("/logs", logs)

app.get('/', (req, res) => {
    res.send("Welcome to the Captain's Log");
  });
  
  
  app.get( "*", (req, res) => {
    res.status(404).json({ error: "Page not found"});
  });
  
  app.listen(3000, () => {
    console.log('Server listening on port 3000');
  });

module.exports = app;