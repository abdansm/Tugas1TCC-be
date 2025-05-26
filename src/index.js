const express = require("express");
const cors = require("cors");
const database = require("./database/connect_db.js");
const noteRoute = require("./routes/Note.route.js");

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));

database
  .sync({ force: false })
  .then(() => {
    console.info("database synced1");
  })
  .catch((err) => {
    console.error("failed to sync database: " + err.message);
  });

app.get("/", (req, res) => {
  res.json({
    message: "Node.js Ma-Notes REST API Server",
  });
});

app.use("/api/notes/", noteRoute);

app.listen(port, () => console.log(`Server berjalan pada port ${port}`));
