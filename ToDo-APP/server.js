const express = require("express");
const app = express();

const taskRoutes = require("./routes/taskRoutes");

app.use(express.json());

// base route
app.use("/api/tasks", taskRoutes);

app.listen(3000, () => {
  console.log("Server running on port 3000");
});