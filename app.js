const express = require("express");


const app = new express();
const path = require("path");
const dotENV = require("dotenv");
const authRoute = require("./routes/authRoute");
const inventoryRoute = require("./routes/inventoryRoute");

dotENV.config();
const connectDB = require("./config/db");

// connectDB();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "view"));

app.use(express.json());
app.use("/api/auth" , authRoute);
app.use("/api/inventory", inventoryRoute);

const PORT = process.env.PORT || 3000;
connectDB();
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})


module.exports = app;

