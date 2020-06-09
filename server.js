const express = require("express");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3000;

const db = require("./models");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", { useNewUrlParser: true });

require("./routes/htmlRoutes.js")(app);
require("./routes/apiRoutes.js")(app);

// Start the server
app.listen(PORT, () => {
  console.log(`This app is running on port ${PORT}!`);
});
