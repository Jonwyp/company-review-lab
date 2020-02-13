const app = require("./app");
const { endpoints } = require("./utils/data");
const request = require("supertest");

describe("app.js", () => {
  it("GET / should return all possible endpoints", async () => {
    const { body: response } = await request(app)
      .get("/")
      .expect(200);
    expect(response).toEqual(endpoints);
  });
});
