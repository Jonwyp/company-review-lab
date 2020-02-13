const app = require("../app");
const {
  companiesData,
  companiesDataWithoutReviews,
  newCompany,
  newReview
} = require("../utils/data");
const request = require("supertest");
const Companies = require("../models/companies.model");
const { MongoMemoryServer } = require("mongodb-memory-server");
const mongoose = require("mongoose");

mongoose.set("useNewUrlParser", true);
mongoose.set("useFindAndModify", false);
mongoose.set("useCreateIndex", true);
mongoose.set("useUnifiedTopology", true);

describe("/companies", () => {
  let mongoServer;
  beforeAll(async () => {
    try {
      mongoServer = new MongoMemoryServer();
      const mongoUri = await mongoServer.getConnectionString();
      await mongoose.connect(mongoUri);
    } catch (err) {
      console.error(err);
    }
  });

  afterAll(async () => {
    await mongoose.disconnect();
    await mongoServer.stop();
  });

  beforeEach(async () => {
    await Companies.create(companiesData);
  });

  afterEach(async () => {
    await Companies.deleteMany();
  });
  it(" GET should return a list of companies in the database without showing the reviews", async () => {
    const { body: list } = await request(app)
      .get("/companies")
      .expect(200);
    expect(list).toMatchObject(companiesDataWithoutReviews);
  });
  it(" GET /companies/:id should return the company with matching id in the database", async () => {
    const companyId = companiesData[0].id;
    const { body: foundCompany } = await request(app)
      .get(`/companies/${companyId}`)
      .expect(200);
    expect(foundCompany).toMatchObject(companiesData);
  });
  it(" POST /companies should add a new company to the database", async () => {
    const { body: addedCompany } = await request(app)
      .post("/companies")
      .send(newCompany)
      .expect(201);
    expect(addedCompany).toMatchObject(newCompany);
  });
  it(" POST /companies/:id/reviews should add a new review to the company in the database", async () => {
    const companyId = companiesData[0].id;
    const inputReview = {
      rating: 4,
      title: "eligendi adipisci",
      review:
        "Et voluptatem voluptas quisquam quos officia assumenda. Mollitia delectus vitae quia molestias nulla ut hic praesentium. Sed et assumenda et iusto velit laborum sunt non."
    };
    const { body: review } = await request(app)
      .post(`/companies/${companyId}/reviews`)
      .send(inputReview)
      .expect(201);
    expect(review).toMatchObject(newReview);
  });
});
