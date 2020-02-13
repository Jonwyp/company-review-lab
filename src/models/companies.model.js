const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const reviewSchema = new Schema({
  id: {
    type: String,
    unique: true,
    required: true
  },
  userId: {
    type: String,
    unique: true,
    required: true
  },
  userName: {
    type: String,
    required: true
  },
  rating: {
    type: Number,
    min: 0,
    max: 5
  },
  title: String,
  review: {
    type: String,
    required: true
  }
});

const companySchema = new Schema({
  id: {
    type: String,
    required: true,
    unique: true
  },
  companyName: {
    type: String,
    required: true,
    unique: true
  },
  companySuffix: String,
  numberOfEmployees: Number,
  description: String,
  reviews: [reviewSchema]
});

const Companies = mongoose.model("Companies", companySchema);
module.exports = Companies;
