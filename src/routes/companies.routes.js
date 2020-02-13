const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync");
const Companies = require("../models/companies.model");

const generateId = () => {
  const randomId = require("crypto")
    .randomBytes(256 / 8)
    .toString("hex");
  return (
    randomId.substring(0, 8) +
    "-" +
    randomId.substring(9, 13) +
    "-" +
    randomId.substring(14, 18) +
    "-" +
    randomId.substring(19, 23) +
    "-" +
    randomId.substring(24, 36)
  );
};

router.get(
  "/",
  wrapAsync(async (req, res, next) => {
    const showAllCompanies = await Companies.find({}, "-_id -__v -reviews");
    res.status(200).send(showAllCompanies);
  })
);

router.get(
  "/:id",
  wrapAsync(async (req, res, next) => {
    const companyId = req.params.id;
    const filteredCompany = await Companies.find({ id: companyId });
    res.status(200).send(filteredCompany);
  })
);
router.post(
  "/",
  wrapAsync(async (req, res, next) => {
    const company = req.body;
    const addedCompany = new Companies(company);
    await Companies.init();
    addedCompany.id = generateId();
    await addedCompany.save();
    res.status(201).send(company);
  })
);
router.post(
  "/:id/reviews",
  wrapAsync(async (req, res, next) => {
    const companyId = req.params.id;
    const user = {
      userId: "754aece9-64bf-42ab-b91c-bb65e2db3a37",
      userName: "Humberto Bruen"
    };
    const id = generateId();
    const inputReview = req.body;
    const updatedReview = { id, ...user, ...inputReview };
    const updatedCompany = await Companies.findOneAndUpdate(
      { id: companyId },
      { $push: { reviews: updatedReview } }
    );
    res.status(201).send(updatedReview);
  })
);

router.use((err, req, res, next) => {
  if (err.name === "ValidationError") {
    err.statusCode = 400;
  }
  next(err);
});

module.exports = router;
