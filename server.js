
const express = require("express");
const connectDb = require("./config/dbConnection");
const errorHandler = require("./middleware/errorHandler");
const dotenv = require("dotenv").config();

connectDb();
const app = express();

const port = process.env.PORT || 5000;

app.use(express.json());

app.use("/api/contacts", require("./routes/contactRoutes"));
app.use("/api/users", require("./routes/userRoutes"));

// app.get("/api/contacts", (req, res) => {
//     // res.send("Get all contacts");
//     res.status(200).json({message: "Get all contacts"});
// });

app.use(errorHandler);

app.listen(port, () => {
    console.log(`server running on port ${port}`);
}); 



