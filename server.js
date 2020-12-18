const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

const apiRoutes = require("./routes/api-routes");
const clientRoutes = require("./routes/client-routes")

//set up to receive JSON and string data
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(express.static("public"));

//routes as middleware
app.use("/api", apiRoutes);
app.use("/", clientRoutes);

// server listening
app.listen(PORT, () => console.log(`listening at http://localhost:${PORT}`));