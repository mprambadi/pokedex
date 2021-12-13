import express from "express";
import mockData from "./data.js";

const app = express();



app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/pokemon", (req, res) => {
    //  TODO:
    // Get Data from pokemon API and comibine it

    //  TODO:
    // Change mock data with result from pokemon API

  res.json(mockData);
});

app.listen(3000, () => {
  console.log("Example app listening on port 3000!");
});
