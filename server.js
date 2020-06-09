const express = require("express");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3000;

const app = express();
app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));
app.use(express.static("public"));

const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/workout";
mongoose.connect(MONGODB_URI, function (err, res) {
    if (err) {
        console.log('ERROR connecting to: ' + MONGODB_URI + '. ' + err);
    } else {
        console.log('Succeeded connected to: ' + MONGODB_URI);
    }
});

require("./routes/htmlRoutes.js")(app);
require("./routes/apiRoutes.js")(app);

// Start the server
app.listen(PORT, () => {
    console.log(`This app is running on port ${PORT}!`);
});