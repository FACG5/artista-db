const test = require('tape');
const supertest = require('supertest');
const router = require('../src/router.js');


test('Home route returns a status code of 200', (t) => {
  supertest(router)
    .get('/')
    .expect('Content-Type', /html/)
    .expect(200)
    .end((err) => {
      if (err) {
        t.error(err);
      }
      t.end();
    });
});

test('Erorr page status code', (t) => {
  supertest(router)
    .get('/pppp')
    .expect('Content-Type', /html/)
    .expect(404)
    .end((err) => {
      if (err) {
        t.error(err);
      }
      t.end();
    });
});
