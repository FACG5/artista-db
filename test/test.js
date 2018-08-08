const test = require("tape");
const supertest = require("supertest");
const router = require("../src/router.js");


test("Home route returns a status code of 200", t => {
  supertest(router)
    .get("/")
    .expect("Content-Type", /html/)
    .end((err, res) => {
      t.error(err);
      t.equal(res.statusCode, 200, "Should return 200");
      t.end();
    });
});

test("Erorr page status code", t => {
  supertest(router)
    .get("/pppp")
    .expect("Content-Type", /html/)
    .end((err, res) => {
      t.error(err);
      t.equal(res.statusCode, 404, "response should return 404");
      t.end();
    });
});
