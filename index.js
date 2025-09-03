const express = require("express");
const app = express();

require("dotenv").config();
const PORT = process.env.PORT || 4000;


app.use(express.json());

const blogRoute = require("./routes/blog");

app.use("/api/v1", blogRoute);

app.listen(PORT, () =>
{
    console.log(`Server started succefully at ${PORT}`);
})

const dbConnect = require("./config/database");
dbConnect();
