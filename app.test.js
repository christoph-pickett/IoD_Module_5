// import supertest and the express app
const request = require("supertest");
const app = require("./app");

describe.skip("Calculator Routes", () => {
  // generate some random numbers to test the calculator
  let number1 = Math.floor(Math.random() * 1_000_000);
  let number2 = Math.floor(Math.random() * 1_000_000);
  test("GET /calculator/add => sum of numbers", () => {
    return request(app)
      .get(`/calculator/add?num1=${number1}&num2=${number2}`)
      .expect("Content-Type", /json/)
      .expect(200)
      .then((response) => {
        expect(response.body).toEqual({
          result: number1 + number2,
        });
      });
  });

  test("GET /calculator/add => failed because of no expected params", () => {
    return request(app)
      .get(`/calculator/add?num=${number1}&number=${number2}`)
      .expect("Content-Type", /json/)
      .expect(422)
      .then((response) => {
        console.log("response", response.body);
        expect(response.body).toEqual({ result: "not valid values" });
      });
  });
});

describe("user routes", () => {
  test("GET /user => get list of all current users in my data", () => {
    return request(app)
      .get(`/user`)
      .expect(200)
      .then((response) => {
        console.log("response", response.body);
        expect(response.body).toEqual({
          result: [
            { id: 1, name: "Anthony Albanese", country: "AU" },
            { id: 2, name: "Joe Biden", country: "US" },
            { id: 3, name: "Chris Hipkins", country: "NZ" },
            { id: 4, name: "Lee Hsien Loong", country: "SG" },
          ],
        });
      });
  });

  test("GET /user/:id => get specific user from list", () => {
    return request(app)
      .get(`/user/1`)
      .expect(200)
      .then((response) => {
        console.log("response", response.body);

        expect(response.statusCode).toBe(200);

        expect(response.body).toEqual({
          result: { id: 1, name: "Anthony Albanese", country: "AU" },
        });
      });
  });
});
