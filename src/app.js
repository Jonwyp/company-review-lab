const express = require("express");
const app = express();
const companiesRouter = require("./routes/companies.routes");

app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    "0": "GET /",
    "1": "GET /companies",
    "2": "POST /companies",
    "3": "GET /companies/:id",
    "4": "POST /companies/:id/reviews",
    "5": "GET /user",
    "6": "POST /user"
  });
});

app.use("/companies", companiesRouter);

app.use((err, req, res, next) => {
  res.status(err.statusCode || 500);
  if (err.statusCode) {
    res.send({ error: err.message });
  } else {
    res.send({ error: "Internal Server Error" });
  }
});

module.exports = app;
